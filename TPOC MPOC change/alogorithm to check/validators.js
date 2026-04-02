/**
 * PAN (Permanent Account Number) Validation
 * Format: 10 character alphanumeric (5 letters, 4 digits, 1 letter)
 * Example: ABCDE1234F
 */
function validatePAN(pan) {
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    return panRegex.test(pan.toUpperCase());
}

/**
 * GSTIN (Goods and Services Tax Identification Number) Validation
 * Format: 15 digit alphanumeric
 */
function validateGSTIN(gstin) {
    const gstinRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
    return gstinRegex.test(gstin.toUpperCase());
}

/**
 * CIN (Corporate Identification Number) Validation
 * Format: 21 character alphanumeric
 */
function validateCIN(cin) {
    const cinRegex = /^[LU][0-9]{5}[A-Z]{2}[0-9]{4}[A-Z]{3}[0-9]{6}$/;
    return cinRegex.test(cin.toUpperCase());
}

module.exports = {
    validatePAN,
    validateGSTIN,
    validateCIN
};
