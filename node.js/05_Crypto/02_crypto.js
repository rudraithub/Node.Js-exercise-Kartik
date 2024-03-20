
const crypto = require("crypto-js")
const data = "kartik dabhi"
const key = "password@5533"


const encrypted = crypto.AES.encrypt(data, key).toString();
console.log("Encrypted data")

console.log(encrypted)
console.log("Decrypted data")

const decrypted = crypto.AES.decrypt(encrypted, key)
                    .toString(crypto.enc.Utf8)
console.log(decrypted)

