import { api } from "./axios";

export const loginUser = async (data) =>
  await api.post("/api/auth/login", data, {
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
  });

// data = {userId: 3af425ca-5ffb-4d7b-9df8-7c51c49085bc}
export const logout = async (data) => {
  localStorage.removeItem("user");
  localStorage.removeItem("accessToken");
  await api.post("/api/auth/revokedRefreshTokens", data);

  location.replace("/login");
};
