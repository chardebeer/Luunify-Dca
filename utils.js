import CryptoJS from "crypto-js";

export function encrypt(decrypted) {
  return CryptoJS.AES.encrypt(decrypted, process.env.ENCRYPTION_KEY).toString();
}

export function decrypt(encrypted) {
  return CryptoJS.AES.decrypt(encrypted, process.env.ENCRYPTION_KEY).toString(CryptoJS.enc.Utf8);
}
