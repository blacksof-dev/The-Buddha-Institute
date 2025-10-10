import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";
import { saveToken } from "./authenticationFunction";
import { toast } from "react-toastify";
import { useState } from "react";
import Loading from "./loading";

const UserLoginSchema = z.object({
  email: z
    .string()
    .max(255, "Email is too long")
    .email("Invalid email address"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(128, "Password is too long"),
});

export type UserFormData = z.infer<typeof UserLoginSchema>;

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserFormData>({ resolver: zodResolver(UserLoginSchema) });
  const [loading, setLoading] = useState(false);
  const onSubmit = async (data: UserFormData) => {
    try {
      setLoading(true);
      const response = await axios.post(
        `${process.env.REACT_APP_APPLICATION_URL}/api/login`,
        {
          email: data.email,
          password: data.password,
        },
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.data.status) {
        saveToken(response.data.token);
        localStorage.removeItem("userName");
        toast.success(response.data.message || "Login successful!");
        reset();
        setLoading(false);
        window.open(
          `https://application.thebuddhainstitute.org/login/verify_token?token=${response.data.token}`,
          "_blank"
        );
      } else {
        toast.error(response.data.message || "Login failed!");
        setLoading(false);
      }
    } catch (error: any) {
      console.error("API Error:", error.response?.data || error.message);
    }
  };

  return (
    <section className="mt-24 xl:mt-48 px-4 blade-bottom-margin-sm flex justify-center items-center ">
      <div className="w-full max-w-md bg-white border-2 border-customGray/10 shadow-xl rounded-2xl p-4 md:p-6 xl:p-10">
        {/* Header */}
        <div className="text-center mb-8">
          <img
            src="/logo.png"
            alt="Buddha Institute Logo"
            className="w-28 mx-auto mb-4"
          />
          <h3 className=" font-lato-bold text-teal">Login</h3>
          <p className=" py-2 text-md font-lato-regular text-black">
            Do get in touch with us by submitting the form.
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email */}
          <div>
            <label className="block font-lato-regular text-black mb-2">
              Enter Email
            </label>
            <input
              type="email"
              placeholder="Email"
              {...register("email")}
              className="w-full border rounded-full px-4 py-2 outline-none"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block font-lato-regular text-black mb-2">
              Enter Password
            </label>
            <input
              type="password"
              placeholder="Password"
              {...register("password")}
              className="w-full border rounded-full px-4 py-2  outline-none"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-pear text-black font-bold px-8 py-2 rounded-lg  transition"
            >
              {loading ? <Loading /> : "Login"}
            </button>
          </div>

          {/* Links */}
          <div className="text-center text-md mt-4 space-y-2">
            <p className="font-lato-regular text-black">
              Not registered?{" "}
              <Link
                to="/registration"
                className="hover:text-teal font-bold hover:underline "
              >
                Register here
              </Link>
            </p>
            <Link
              to="/Forgot-password"
              className="font-lato-regular text-black hover:underline hover:text-teal block "
            >
              Forgot Password
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
