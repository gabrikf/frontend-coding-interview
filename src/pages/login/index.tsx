import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useAuth } from "../../hooks/use-auth";
import { loginSchema, type LoginData } from "./schema";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { useNavigate } from "react-router";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginData) => {
    // Simulate login
    login({ email: data.email });
    navigate("/photos");
    // In a real application, you would typically send the data to an API
    // and handle the response accordingly.
    // For example:
    // api.post('/login', data)
    //   .then(response => {
    //     login(response.data.user);
    //     navigate("/photos");
    //   })
    //   .catch(error => {
    //     console.error("Login failed:", error);
    //     // Handle error (e.g., show a notification)
    //   });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 max-w-[319px] w-full"
      >
        <img
          src="/logo.svg"
          alt="Logo"
          className="mb-4 w-[75px] h-[75px] mx-auto"
        />
        <h1 className="text-lg font-semibold text-center">
          Sign in to your account
        </h1>
        {/* put email instead of username for better clarity */}
        <Input
          label="Email"
          {...register("email")}
          error={errors.email?.message}
        />

        <Input
          label="Password"
          type="password"
          afterlabel={
            // on a real application, you might want to add a link to reset the password
            <span className="text-sm text-blue-500 cursor-pointer">
              Forgot password?
            </span>
          }
          {...register("password")}
          error={errors.password?.message}
        />

        <Button className="h-[44px]" type="submit">
          Sign in
        </Button>
      </form>
    </div>
  );
}
