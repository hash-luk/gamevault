import { useMutation } from "@tanstack/react-query";
import { login } from "../services/auth";

export function useAuth() {
  return useMutation({
    mutationFn: login,
  });
}
