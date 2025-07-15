import { LockKeyhole, Mail, User } from "lucide-react";
import InputField from "../ui/Input";
import Button from "../ui/Button";
import { useRegister } from "@/app/hooks/useRegister";
import { useState } from "react";

interface RegisterFormProps {
  onToggleMode: () => void;
}

export default function RegisterForm({ onToggleMode }: RegisterFormProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const register = useRegister();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await register.mutateAsync(form);
      alert("Usuário registrado com sucesso");
      onToggleMode();
    } catch (error) {
      console.error("Erro ao registrar:", error);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center gap-4"
      >
        <InputField
          inputID="name"
          inputName="name"
          inputPlaceholder="Enter your username"
          label="Username"
          icon={User}
          onChange={handleChange}
        />
        <InputField
          inputID="email"
          inputName="email"
          inputPlaceholder="Enter your email"
          label="Email"
          icon={Mail}
          onChange={handleChange}
        />
        <InputField
          inputID="password"
          inputName="password"
          inputPlaceholder="Create a Password"
          inputType="password"
          label="Password"
          icon={LockKeyhole}
          onChange={handleChange}
        />
        <Button buttonType="submit" buttonText="Sign up" />
      </form>
      <div className="flex justify-center border-t-gray-300 border-t-1 pt-5">
        <div className="flex">
          <span className="text-gray-500 font-medium">
            Already have an account?{" "}
            <button
              onClick={onToggleMode}
              type="button"
              className="text-black hover:cursor-pointer hover:underline"
            >
              Sign In
            </button>
          </span>
        </div>
      </div>
    </>
  );
}
