import CryptoJS from "crypto-js";

const secret = process.env.SECRET_KEY ?? ""; 


export const saveToken = (token: string) => {
  const encryptedToken = CryptoJS.AES.encrypt(token, secret).toString();
  localStorage.setItem("tbi_token", encryptedToken);
};


export const getToken = () => {
  const stored = localStorage.getItem("tbi_token");
  if (!stored) return null;
  const bytes = CryptoJS.AES.decrypt(stored, secret);
  return bytes.toString(CryptoJS.enc.Utf8);
};
