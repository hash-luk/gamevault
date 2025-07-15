import { LockKeyhole, Mail, User } from "lucide-react";
import InputField from "../ui/Input";
import Button from "../ui/Button";
import { useRegister } from "@/app/hooks/useRegister";
import { useState } from "react";
import { toast } from "sonner";
import { registerSchema, RegisterFormValues } from "@/app/lib/register-schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface RegisterFormProps {
  onToggleMode: () => void;
}

export default function RegisterForm({ onToggleMode }: RegisterFormProps) {
  const register = useRegister();

  const {
    register: formRegister,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormValues) => {
    try {
      await register.mutateAsync(data);
      toast.success("User registered successfully");

      setTimeout(() => {
        onToggleMode();
      }, 1500);
    } catch (error) {
      toast.error(
        "There was an error when trying to register, please try later"
      );
      console.error("Error:", error);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center gap-4"
      >
        <InputField
          inputID="name"
          inputName="name"
          inputPlaceholder="Enter your username"
          label="Username"
          icon={User}
          {...formRegister("name")}
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
        <InputField
          inputID="email"
          inputName="email"
          inputPlaceholder="Enter your email"
          label="Email"
          icon={Mail}
          {...formRegister("email")}
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
        <InputField
          inputID="password"
          inputName="password"
          inputPlaceholder="Create a Password"
          inputType="password"
          label="Password"
          icon={LockKeyhole}
          {...formRegister("password")}
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
        <Button
          buttonType="submit"
          buttonText="Sign up"
          isLoading={register.isPending}
          isDisabled={register.isPending}
        />
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
