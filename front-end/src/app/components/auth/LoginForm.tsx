import { LockKeyhole, Mail } from "lucide-react";
import Link from "next/link";
import InputField from "../ui/Input";
import Button from "../ui/Button";
import { useAuth } from "@/app/hooks/useAuth";
import { loginSchema, LoginFormValues } from "@/app/lib/login-schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

interface RegisterFormProps {
  onToggleMode: () => void;
}

export default function LoginForm({ onToggleMode }: RegisterFormProps) {
  const auth = useAuth();
  const router = useRouter();

  const {
    register: loginRegister,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormValues) => {
    try {
      await auth.mutateAsync(data);
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center gap-4"
      >
        <InputField
          inputName="email"
          inputID="email"
          inputPlaceholder="Email adress"
          icon={Mail}
          label="Email"
          {...loginRegister("email")}
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
        <InputField
          inputType="password"
          inputName="password"
          inputID="password"
          inputPlaceholder="Password"
          label="Password"
          icon={LockKeyhole}
          {...loginRegister("password")}
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
        <Button
          buttonType="submit"
          buttonText="Sign in"
          isLoading={auth.isPending}
          isDisabled={auth.isPending}
        />
      </form>
      <div className="flex justify-between border-t-gray-300 border-t-1 pt-5">
        <button
          onClick={onToggleMode}
          type="button"
          className="text-gray-500 hover:opacity-80 hover:cursor-pointer"
        >
          <span>Don't have an account?</span>
        </button>
        <Link href="#" className="text-blue-600 hover:underline">
          <span>Forgot password?</span>
        </Link>
      </div>
    </>
  );
}
