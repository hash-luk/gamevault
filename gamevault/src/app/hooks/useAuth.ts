import { useMutation } from "@tanstack/react-query";
import { login, signOut } from "../services/auth";

export function useAuth() {
  return useMutation({
    mutationFn: login,
  });
}

export function useSignOut() {
  return useMutation({
    mutationFn: signOut,
  });
}
