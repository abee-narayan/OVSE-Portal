/**
 * PAN (Permanent Account Number) Validation
 * Format: 10 character alphanumeric (5 letters, 4 digits, 1 letter)
 * Example: ABCDE1234F
 */
export const validatePAN = (pan: string): boolean => {
  const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
  return panRegex.test(pan.toUpperCase());
};

/**
 * GSTIN (Goods and Services Tax Identification Number) Validation
 * Format: 15 digit alphanumeric
 * Structure: 2 digits (State code) + 10 (PAN) + 1 (Entity number) + 1 (Default Z) + 1 (Check code)
 * Example: 29ABCDE1234F1Z5
 */
export const validateGSTIN = (gstin: string): boolean => {
  const gstinRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
  return gstinRegex.test(gstin.toUpperCase());
};

/**
 * CIN (Corporate Identification Number) Validation
 * Format: 21 character alphanumeric
 * Structure: Listing status (L/U) + 5 digits (Industry) + 2 letters (State) + 4 digits (Year) + 3 letters (Type) + 6 digits (Reg No)
 * Example: L12345KA2020PLC123456
 */
export const validateCIN = (cin: string): boolean => {
  const cinRegex = /^[LU][0-9]{5}[A-Z]{2}[0-9]{4}[A-Z]{3}[0-9]{6}$/;
  return cinRegex.test(cin.toUpperCase());
};
