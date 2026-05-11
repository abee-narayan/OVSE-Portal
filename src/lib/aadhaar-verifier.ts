import * as jose from 'jose';
import crypto from 'crypto';

/**
 * Verifies an SD-JWT credential according to Aadhaar App Intent Integration Specifications.
 *
 * @param credential - The full SD-JWT string: header.payload.signature~disclosure1~disclosure2...
 * @param publicKeyPem - The UIDAI public key (PEM format)
 * @returns - The verified and parsed JWT payload, along with locally verified disclosures.
 */
export async function verifySdJwt(credential: string, publicKeyPem: string) {
  // 1. Split credential by delimiter '~'
  const parts = credential.split('~');
  if (parts.length < 1 || !parts[0]) {
    throw new Error('Invalid SD-JWT format');
  }

  const jwt = parts[0];
  const disclosures = parts.slice(1);

  // 2. Signature Verification
  // Import the public key or X.509 Certificate in RS256 algorithm format
  let publicKey;
  try {
    if (publicKeyPem.includes('BEGIN CERTIFICATE')) {
      publicKey = await jose.importX509(publicKeyPem, 'RS256');
    } else {
      publicKey = await jose.importSPKI(publicKeyPem, 'RS256');
    }
  } catch (keyError) {
    throw new Error('Failed to import public key format. Must be valid SPKI PEM or X509 Certificate.');
  }

  // Verify RS256 signature
  const { payload } = await jose.jwtVerify(jwt, publicKey, {
    algorithms: ['RS256'],
  });

  // 3. Disclosure Verification
  const _sd = (payload._sd as string[]) || [];
  
  const verifiedDisclosures: string[] = [];

  for (const disclosure of disclosures) {
    // Some implementations append an empty string when ending with ~
    if (!disclosure) continue; 

    // Hash disclosure string using SHA256
    const hash = crypto.createHash('sha256').update(disclosure).digest();
    
    // Base64URL encode the hash
    const hashBase64url = hash.toString('base64url');
    
    // Match against _sd array from the payload
    if (!_sd.includes(hashBase64url)) {
      throw new Error(`Disclosure mismatch or unrecognized disclosure hash: ${hashBase64url}`);
    }

    verifiedDisclosures.push(disclosure);
  }

  // Mandatory both validations passed.
  return {
    payload,
    disclosures: verifiedDisclosures,
  };
}

/**
 * Assists in building the strictly structured XML Response.
 */
export function generateXmlResponse(txnId: string, code: string, message: string): string {
  return `<Response>
  <TxnID>${txnId}</TxnID>
  <ResponseCode>${code}</ResponseCode>
  <ResponseMsg>${message}</ResponseMsg>
</Response>`;
}
