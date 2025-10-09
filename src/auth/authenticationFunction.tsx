import CryptoJS from "crypto-js";

const secret = process.env.REACT_APP_SECRET_KEY ?? "";

// Save encrypted token and optional user data
export const saveToken = (token: string, userData: any = null) => {
  const encryptedToken = CryptoJS.AES.encrypt(token, secret).toString();
  localStorage.setItem("tbi_token", encryptedToken);

  if (userData) {
    localStorage.setItem("tbi_user", JSON.stringify(userData));
  }
};

// Get decrypted token
export const getToken = () => {
  const stored = localStorage.getItem("tbi_token");
  if (!stored) return null;
  try {
    const bytes = CryptoJS.AES.decrypt(stored, secret);
    return bytes.toString(CryptoJS.enc.Utf8);
  } catch (err) {
    console.error("Token decryption failed:", err);
    return null;
  }
};

// Get user data
export const getUserData = () => {
  const data = localStorage.getItem("tbi_user");
  return data ? JSON.parse(data) : null;
};

// Clear auth
export const clearAuth = () => {
  localStorage.removeItem("tbi_token");
  localStorage.removeItem("tbi_user");
};
