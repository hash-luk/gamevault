import api from "./api";

export const registerUser = async (data: {
  name: string;
  email: string;
  password: string;
}) => {
  const response = await api.post("/users", data);
  return response.data;
};
