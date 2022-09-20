import { SHA512, enc } from "crypto-js";

export const hashToken = (token) => {
  return SHA512(token).toString(enc.Hex);
};
