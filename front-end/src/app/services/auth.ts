import api from "./api";

export const registerUser = async (data: {
  name: string;
  email: string;
  password: string;
}) => {
  const response = await api.post("/users", data);
  return response.data;
};

export const login = async (data: { email: string; password: string }) => {
  const response = await api.post("/login", data);
  return response.data;
};

export const signOut = async () => {
  const response = await api.post("/signout");
  return response.data;
};
