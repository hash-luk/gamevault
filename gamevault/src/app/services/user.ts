import api from "./api";

export const getUserData = async () => {
  const response = await api.get("/users/me");
  return response.data;
};
