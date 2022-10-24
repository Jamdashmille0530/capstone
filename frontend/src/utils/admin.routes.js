import useSWR from "swr";
import { api } from "./axios";

export const getAllUserInfo = () => {
  const { data, error, mutate } = useSWR("/api/admin/userInfo");
  return {
    users: data?.user,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
};

export const updateUserRole = async (userId, role) =>
  await api.put(`/api/admin/updateRole/${userId}`, { role });
