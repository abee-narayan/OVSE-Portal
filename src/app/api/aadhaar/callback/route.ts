import { NextRequest, NextResponse } from 'next/server';
import { XMLParser } from 'fast-xml-parser';
import { verifySdJwt, generateXmlResponse } from '@/lib/aadhaar-verifier';

// UIDAI Public Certificate
// It is perfectly safe to include public certificates in source code. 
// You can also override this by setting UIDAI_PUBLIC_KEY in Vercel.
const UIDAI_CERT = `-----BEGIN CERTIFICATE-----
MIIHlDCCBXygAwIBAgIQAhCoG6isRBuXAuX0ooqHPzANBgkqhkiG9w0BAQsFADBp
MQswCQYDVQQGEwJVUzEXMBUGA1UEChMORGlnaUNlcnQsIEluYy4xQTA/BgNVBAMT
OERpZ2lDZXJ0IFRydXN0ZWQgRzQgQ29kZSBTaWduaW5nIFJTQTQwOTYgU0hBMzg0
IDIwMjEgQ0ExMB4XDTI1MDExNzAwMDAwMFoXDTI2MDEyMDIzNTk1OVowgZsxCzAJ
BgNVBAYTAklOMRIwEAYDVQQIEwlLYXJuYXRha2ExEjAQBgNVBAcTCUJlbmdhbHVy
dTExMC8GA1UEChMoVU5JUVVFIElERU5USUZJQ0FUSU9OIEFVVEhPUklUWSBPRiBJ
TkRJQTExMC8GA1UEAxMoVU5JUVVFIElERU5USUZJQ0FUSU9OIEFVVEhPUklUWSBP
RiBJTkRJQTCCAiIwDQYJKoZIhvcNAQEBBQADggIPADCCAgoCggIBAKxyrEBKWBvJ
5gvia/DymKnfFzJ2dxCLHeMCppS5aabzbQr3ayWwVPJZj5nm0nZ0GvpwJHVoUTJ9
+M6WxXG1Niii3eLXdHrm5Y8Utyev5hBbpMgwefkFV+5LUWaWgniARHNE7fGGg/b6
pImgYa1jyDCn8Pes4n8xsS2zY8CqJDYaWh7fkCiXuUwebO6KUuRoiW5040uvjwhX
w7K3a06ZSTnfRvDCIYDtYJ68EOHHD7sneCwaLwdTKwiPL1KclVeEbgh0jNzrVoIg
HSw4Kg7gY3zIjODFI5Wa0AhT0S+Ctl6Hh+YBqmjH8bWv1+NJ/WzOJ57qjKHQtk9T
D1q0EYd5yW13xmlQdEM3QFpjgO2Ww64kEm7kbFRYFcvA1HCpVkV4YQqeVKrWVRaI
1qJ9cZCmToQvYaQuux+8S6RsusUTvKP23qnhmTULNO44OuVFXxUihs4d5EXzfJAi
qyMriS3k9+qoIpUDhjl9I/2ajdVLmn+OztzRc98co+yd7nxxNWPWi6AMxWpG2KxL
B6s1SWSqn+7+ux4VOOrpCOglqjZV7Y3TIBmGRuC4sYX12FSG7LI8SUnL2oBPZ4aX
45WQfn56tzCE+e21WUaRM7QSSW3DEkEEXONmR9hjW9softh4t1KwmvDIihp2IouW
CCxjx4z64/5TRAcmKWavEVc2wA/PXmMXAgMBAAGjggIDMIIB/zAfBgNVHSMEGDAW
gBRoN+Drtjv4XxGG+/5hewiIZfROQjAdBgNVHQ4EFgQUn/ghh0Fm5frBjQSJfh6T
B+yMsmEwPgYDVR0gBDcwNTAzBgZngQwBBAEwKTAnBggrBgEFBQcCARYbaHR0cDov
L3d3dy5kaWdpY2VydC5jb20vQ1BTMA4GA1UdDwEB/wQEAwIHgDATBgNVHSUEDDAK
BggrBgEFBQcDAzCBtQYDVR0fBIGtMIGqMFOgUaBPhk1odHRwOi8vY3JsMy5kaWdp
Y2VydC5jb20vRGlnaUNlcnRUcnVzdGVkRzRDb2RlU2lnbmluZ1JTQTQwOTZTSEEz
ODQyMDIxQ0ExLmNybDBToFGgT4ZNaHR0cDovL2NybDQuZGlnaWNlcnQuY29tL0Rp
Z2lDZXJ0VHJ1c3RlZEc0Q29kZVNpZ25pbmdSU0E0MDk2U0hBMzg0MjAyMUNBMS5j
cmwwgZQGCCsGAQUFBwEBBIGHMIGEMCQGCCsGAQUFBzABhhhodHRwOi8vb2NzcC5k
aWdpY2VydC5jb20wXAYIKwYBBQUHMAKGUGh0dHA6Ly9jYWNlcnRzLmRpZ2ljZXJ0
LmNvbS9EaWdpQ2VydFRydXN0ZWRHNENvZGVTaWduaW5nUlNBNDA5NlNIQTM4NDIw
MjFDQTEuY3J0MAkGA1UdEwQCMAAwDQYJKoZIhvcNAQELBQADggIBAMbRIFNYp57V
ryxGQoJ256II5brscydWuTq9ptJIN8tGWy2tuZpCGR5inPnrC7kP2cYiaSGPyLMg
k66nICZTgLfaK2UX3+0m2Lznnq0PuIIvskKP3T3XLp5IjIMWwuI5VBfUtGetz5x0
nln82YNh3rEEAKjEbryQB2gperiHhG+ZBfqD2T7nkMKIkGAojZ2J8svVMmkaXIDT
whIr7Kv5vjgmHMK1xn4y4uvAh7FQhlCURCUTw+Q6/q21JzDxOebY62I6hVpCTdho
u+60/LHHq8JJP0ADl7rxqzRl9WNGDNCmaijWoS0Ec25kd7a6jH6K6cP0r/bxT4yU
NKyggZgNUajFk61CHImyAXRjg+IEtUcn+OqxJsxOsYy4R0To4gU9tR75pDRQ4gEL
Ae6d1JY1kQF16SbvR+UK9h9hf/Qnep+Ki9GpWbwLhD7cH7sEtwb+lNFjXXixFVVl
Wt1q9ZUs8oLt7wuUqJrWnO/sd5np069iWsm4yZVSZM4ssLgbDt6atZnaIj+tH2qV
WOAluJatqqJzPrqj8H/vn8XRsnhC2ggdcY7UbMovIloDr4JFDKrsIFgNnLzMxII2
updTmXiu8h83wMPtSJ+2VKK08WUGh54r17b7AvKvELRF7pAAr/z2hGx7jIxBjYYT
KJLa91t28mY5G/OxJl3jE7O4dOrtm8Ad
-----END CERTIFICATE-----`;

const UIDAI_PUBLIC_KEY = process.env.UIDAI_PUBLIC_KEY || UIDAI_CERT;

export async function POST(req: NextRequest) {
  try {
    // 1. Read request body as string
    const xmlBody = await req.text();
    
    if (!xmlBody) {
      return new NextResponse(generateXmlResponse('UNKNOWN', '400', 'Empty payload'), { 
        status: 400, 
        headers: { 'Content-Type': 'application/xml' } 
      });
    }

    // 2. Parse XML into JSON
    const parser = new XMLParser();
    const parsed = parser.parse(xmlBody);

    // Ensure the required fields exist based on Specification
    const requestData = parsed?.Request;
    if (!requestData || !requestData.TxnID || !requestData.Credential) {
       return new NextResponse(generateXmlResponse('UNKNOWN', '400', 'Invalid XML structure'), { 
         status: 400, 
         headers: { 'Content-Type': 'application/xml' } 
       });
    }

    const { TxnID, Credential } = requestData;

    try {
      // 3. Cryptographic Verification (Signatures and Disclosures)
      const verificationResult = await verifySdJwt(Credential, UIDAI_PUBLIC_KEY);
      
      // Note: verificationResult contains raw payload and raw verified disclosures.
      // You can store the received credential or extract the JSON payload if required.
      // Security warning: Do not log raw credentials in production.

      // 4. Send Acknowledgement for Success
      const successXml = generateXmlResponse(TxnID, '200', 'Success');
      return new NextResponse(successXml, {
        status: 200,
        headers: {
          'Content-Type': 'application/xml',
        },
      });

    } catch (verifyError: any) {
      console.error('SD-JWT Verification failed:', verifyError.message);
      // Deny with Error 401
      const errorXml = generateXmlResponse(TxnID, '401', 'Verification Failed');
      return new NextResponse(errorXml, {
        status: 401,
        headers: {
          'Content-Type': 'application/xml',
        },
      });
    }

  } catch (err: any) {
     console.error('Webhook Internal Error:', err.message);
     return new NextResponse(generateXmlResponse('UNKNOWN', '500', 'Internal Server Error'), {
        status: 500,
        headers: {
          'Content-Type': 'application/xml',
        },
      });
  }
}
