const crypto = require('crypto');

const username = "test";
const password = "test@1234";

const encrypt = (rawText, key) => {
  const randomBytes = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), randomBytes);
  let encryptedData = cipher.update(rawText, 'utf-8', 'hex');
  encryptedData += cipher.final('hex');
  return {
    randomBytes: randomBytes.toString('hex'),
    encryptedData
  }
}

const decrypt = (encryptedData, key, randomBytes) => {
  const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), Buffer.from(randomBytes, 'hex'));
  let deCryptedData = decipher.update(encryptedData, 'hex', 'utf8');
  deCryptedData += decipher.final('utf8');
  return deCryptedData;
};

const generateKey = (key) => {
  return crypto.createHash('sha256').update(key).digest('base64').substring(0, 32);
}

const secretKey = generateKey('SecretKeyTesting123');
const { randomBytes: random1, encryptedData: encryptedUserName } = encrypt(username, secretKey);
console.log('Encrypted Username is : ', encryptedUserName);

const { randomBytes: random2, encryptedData: encryptedPassword } = encrypt(password, secretKey);
console.log(`Encrypted Password is : ${encryptedPassword}`);

const decryptedUsername = decrypt(encryptedUserName, secretKey, random1);
console.log(`Decrypted Username is: ${decryptedUsername}`);

const decryptedPassword = decrypt(encryptedPassword, secretKey, random2);
console.log(`Decrypted Username is: ${decryptedPassword}`);
