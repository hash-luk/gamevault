"use client";

import { useQuery } from "@tanstack/react-query";
import { getUserData } from "../services/user";

export const useUser = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: getUserData,
    staleTime: 5 * 60 * 1000,
  });
};
