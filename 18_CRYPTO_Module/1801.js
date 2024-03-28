// ## 1801 - Password Encryption and Decryption using AES

const crypto = require('crypto');

const algorithm = 'aes-256-cbc';
const key = 'abcdefghijklmnopqrstuvwxyz123456';
const iv = '1234567890123456';

function encrypt(text) {
    const cipher = crypto.createCipheriv(algorithm, Buffer.from(key), Buffer.from(iv, 'utf8'));
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
}

function decrypt(encryptedText) {
    const decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), Buffer.from(iv, 'utf8'));
    let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

const password = 'secretPassword123';

const encryptedPassword = encrypt(password);

console.log('Encrypted Password:', encryptedPassword);

const decryptedPassword = decrypt(encryptedPassword);

console.log('Decrypted Password:', decryptedPassword);
