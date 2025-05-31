// // src/utils/tokenStorage.js
// import CryptoJS from "crypto-js";

// const secretKey = "mySuperSecretEncryptionKey@123!";

// export function saveToken(token) {
//   const encrypted = CryptoJS.AES.encrypt(token, secretKey).toString();
//   localStorage.setItem("fb_token", encrypted);
// }

// export function getToken() {
//   try {
//     const encrypted = localStorage.getItem("fb_token");
//     if (!encrypted) return null;

//     const bytes = CryptoJS.AES.decrypt(encrypted, secretKey);
//     const decrypted = bytes.toString(CryptoJS.enc.Utf8);

//     if (!decrypted) throw new Error("Invalid decryption output");

//     return decrypted;
//   } catch (error) {
//     console.error("Decryption failed:", error.message);
//     localStorage.removeItem("fb_token"); // clear corrupted token
//     return null;
//   }
// }
