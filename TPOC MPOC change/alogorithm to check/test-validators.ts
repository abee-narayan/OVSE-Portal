import { validatePAN, validateGSTIN, validateCIN } from './validators';

const testCases = {
    pan: [
        { value: 'ABCDE1234F', expected: true },
        { value: 'abcde1234f', expected: true }, // Case insensitive check
        { value: 'ABCD1234F', expected: false },  // Too short
        { value: 'ABCDE12345', expected: false }, // Ends with digit
        { value: '12345ABCDE', expected: false }, // Starts with digit
    ],
    gstin: [
        { value: '29ABCDE1234F1Z5', expected: true },
        { value: '29abcde1234f1z5', expected: true },
        { value: '29ABCDE1234F1Z', expected: false },  // Too short
        { value: '29ABCDE1234F1A5', expected: false }, // 14th char not Z
    ],
    cin: [
        { value: 'L12345KA2020PLC123456', expected: true },
        { value: 'l12345ka2020plc123456', expected: true },
        { value: 'U12345KA2020PLC123456', expected: true },
        { value: 'A12345KA2020PLC123456', expected: false }, // Invalid first char
        { value: 'L1234KA2020PLC123456', expected: false },  // Invalid industry code length
    ]
};

console.log('--- PAN Tests ---');
testCases.pan.forEach(t => {
    const result = validatePAN(t.value);
    console.log(`PAN: ${t.value} | Expected: ${t.expected} | Result: ${result} | ${result === t.expected ? '✅' : '❌'}`);
});

console.log('\n--- GSTIN Tests ---');
testCases.gstin.forEach(t => {
    const result = validateGSTIN(t.value);
    console.log(`GSTIN: ${t.value} | Expected: ${t.expected} | Result: ${result} | ${result === t.expected ? '✅' : '❌'}`);
});

console.log('\n--- CIN Tests ---');
testCases.cin.forEach(t => {
    const result = validateCIN(t.value);
    console.log(`CIN: ${t.value} | Expected: ${t.expected} | Result: ${result} | ${result === t.expected ? '✅' : '❌'}`);
});
