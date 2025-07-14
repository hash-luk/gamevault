"use client";

import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import AuthHeader from "./AuthHeader";

export default function AuthForm() {
  const modes = {
    login: {
      title: "Login",
      description: "Welcome back!",
    },
    register: {
      title: "Create Account",
      description: "Join us",
    },
  } as const;

  const [mode, setMode] = useState<"login" | "register">("login");
  const { title, description } = modes[mode];

  return (
    <div className="w-full max-w-sm p-8 rounded-md flex flex-col gap-10 border-1 border-gray-100 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
      <AuthHeader title={title} description={description} />
      {mode === "login" ? (
        <LoginForm onToggleMode={() => setMode("register")} />
      ) : (
        <RegisterForm onToggleMode={() => setMode("login")} />
      )}
    </div>
  );
}
