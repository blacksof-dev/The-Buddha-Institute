import React, { useState } from "react";
import { useAuth } from "admin/hooks/authProvider";
import { FaHand } from "react-icons/fa6";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

// Define Zod schema for validation
const signInSchema = z.object({
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .nonempty({ message: "Email is required" }),
  password: z
    .string()
    .min(4, { message: "Password must be at least 6 characters long" })
    .nonempty({ message: "Password is required" }),
});

type SignInFormData = z.infer<typeof signInSchema>;

export default function SignIn() {
  const { loginAction } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: SignInFormData) => {
    setLoading(true);
    try {
      await loginAction(data);
      // Handle successful login (e.g., redirect to dashboard)
      // console.log('Login successful');
    } catch (error) {
      // Handle login error (e.g., display error message)
      // console.error('Login failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`fixed bg-black/20 backdrop-blur-lg inset-0 z-50 flex flex-col items-center 2xl:blade-top-padding`}
    >
      <div className="mb-5 flex justify-center ">
      <img className="w-[35%] h-fit cursor-pointer" src={`/final-logo.svg`} alt="logo"></img>
      </div>
      <div className="border-[1px] border-gray-400 bg-white rounded-lg shadow-lg w-[25rem]">
        <form className="flex flex-col p-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label
              htmlFor="emailField"
              className="form-label block font-lato-bold mt-4"
            >
              Email
            </label>
            <input
              type="email"
              id="emailField"
              {...register("email")}
              placeholder="Enter email"
              className={`form-control font-lato-regular text-black/70 w-full mt-1 px-3 py-2 border rounded-lg placeholder:font-lato-regular ${errors.email ? "border-red-500" : ""
                }`}
            />
            {errors.email && (
              <span className="error text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>

          <div>
            <label
              htmlFor="passwordField"
              className="form-label block font-lato-bold mb-2 mt-4"
            >
              Password
            </label>
            <input
              type="password"
              id="passwordField"
              {...register("password")}
              placeholder="&#8226; &#8226; &#8226; &#8226; &#8226; &#8226; &#8226;"
              className={`form-control font-lato-regular text-black/70 w-full px-3 py-2 border rounded-lg placeholder:font-lato-regular ${errors.password ? "border-red-500" : ""
                }`}
            />
            {errors.password && (
              <span className="error text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}
          </div>

          <div className="mt-2">
            <Link to="/forgot-password"><p className="font-lato-regular text-darkCyan">Forgot password?</p></Link>
          </div>

          <div className="flex justify-center mt-8 space-x-9">
            <button
              className="bg-teal w-full text-white font-lato-bold px-4 py-2 rounded-lg"
              type="submit"
              disabled={loading}
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// import { useAuth } from 'admin/hooks/authProvider';
// import React from 'react'
// import { FaHand } from 'react-icons/fa6';

// export default function SignIn() {

//     const { loginAction } = useAuth();

//     const handleSubmit = () => {

//     }

//     return (
//         <div className={`fixed bg-black/40 backdrop-blur-lg inset-0 z-50 flex items-center justify-center `}>

//             <div className="border-[1px] border-gray-400 bg-white rounded-lg shadow-lg w-[25rem]">
//                 <form className="flex flex-col p-6" >
//                     <div>
//                         <label htmlFor="email" className="form-label block font-lato-bold mt-4">Email</label>
//                         <input
//                             type="email"
//                             id="email"
//                             name="email"
//                             // value={formData.fullName}
//                             // onChange={handleChanges}
//                             placeholder='Enter email'
//                             className="form-control font-lato-regular text-black/70 w-full mt-1 px-3 py-2 border rounded-lg placeholder:font-lato-regular"
//                         />
//                         {/* {errors.fullName && <span className="error text-red-500 text-sm">{errors.fullName}</span>} */}
//                     </div>

//                     <div>
//                         <label htmlFor="password" className="form-label block font-lato-bold mb-2 mt-4">Password</label>
//                         <input
//                             type="password"
//                             id="password"
//                             name="password"
//                             placeholder='&#8226; &#8226; &#8226; &#8226; &#8226; &#8226; &#8226; '
//                             // value={formData.designation}
//                             // onChange={handleChanges}
//                             className="form-control font-lato-regular text-black/70 w-full px-3 py-2 border rounded-lg placeholder:font-lato-regular"
//                         />
//                         {/* {errors.designation && <span className="error text-red-500 text-sm">{errors.designation}</span>} */}
//                     </div>

//                     <div className='mt-2'>
//                         <p className='font-lato-regular text-darkCyan'>Forgot password?</p>
//                     </div>
//                     <div className="flex justify-center mt-8 space-x-9">
//                         <button className=" bg-green w-full  text-white font-lato-bold px-4 py-2 rounded-lg" type="submit">
//                             Sign In
//                         </button>

//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }
