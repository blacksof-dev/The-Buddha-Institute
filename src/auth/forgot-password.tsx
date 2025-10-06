import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";
import Loading from "./loading";


const UserLoginSchema = z.object({
  email: z.string().max(255, "Email is too long").email("Invalid email address")
})

export type UserFormData = z.infer<typeof UserLoginSchema>

const ForgotPassword = () => {
  const
    {
      register,
      handleSubmit,
      reset,
      formState: { errors },

    } = useForm<UserFormData>({ resolver: zodResolver(UserLoginSchema) })

     const [loading, setLoading] = useState(false);
     
  const onSubmit = async (data: UserFormData) => {
    try {
       
        setLoading(true);
        const response = await axios.post(`${process.env.REACT_APP_APPLICATION_URL}/api/forgot_password`, { email: data.email }, { headers: { "Content-Type": "application/json" } });
        console.log("Forgot Password Response:", response);
        if (response.data.status) {
          toast.success("Request successful! Please check your email.");
          reset()
          setLoading(false);
        }
        else {
          toast.error("Something went wrong!");
        }
    }
    catch (error: any) {
      console.error("API Error:", error.response?.data || error.message);
    }
  }


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
          <h3 className=" font-lato-bold text-teal">Forgot Your Password</h3>
          <p className=" py-2 text-md font-lato-regular text-black">
           Enter the email address associated with your The Buddha Institute account.
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block font-lato-regular text-black mb-2">Enter Email</label>
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

    

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-pear text-black font-bold px-8 py-2 rounded-lg  transition"
            >
              {loading ? <Loading /> : "Submit"}
            </button>
          </div>

          {/* Links */}
        
        </form>
      </div>
    </section>
  );
};

export default ForgotPassword;
