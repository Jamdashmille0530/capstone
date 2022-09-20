import useSWR from "swr";
import { api } from "./axios";
import { withToken } from "./fetcher";

export const signUp = async (data) =>
  await api.post("/api/auth/register", data);

export const getUser = (id) => {
  const { data, error } = useSWR(`/api/user/${id}`);
  return {
    user: data?.user,
    isLoading: !error && !data,
    isError: error,
  };
};

export const updateUser = async (data) =>
  await api.post("/api/user/updateUser", data);

export const me = (token) => {
  const { data, error } = useSWR(["/api/user/me", token], withToken);

  return {
    user: data?.user,
    isLoading: !error && !data,
    isError: error,
  };
};

export const getAllUserWithoutPass = () => {
  const { data, error } = useSWR("/api/user/getAllUserWithoutPass");

  return {
    users: data?.users,
    isLoading: !error && !data,
    isError: error,
  };
};
