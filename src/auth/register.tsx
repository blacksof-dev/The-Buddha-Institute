import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { toast } from "react-toastify";
import Loading from "./loading";
import { useNavigate } from "react-router-dom";

const UserSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters").max(50, "Name can't be longer than 50 characters"),
    email: z.string().max(255, "Email is too long").email("Invalid email address"),
    password: z
        .string()
        .min(6, "Password must be at least 6 characters")
        .max(128, "Password is too long"),
    mobile: z
        .string()
        .regex(/^[0-9]{10}$/, "Mobile number must be 10 digits"),

    gender: z.enum(["male", "female", "other"], {
        errorMap: () => ({ message: "Gender must be either male, female, or other" }),
    }),
    otp: z.string().length(6, "OTP must be 6 digits"),
    terms: z.literal(true, { errorMap: () => ({ message: "You must accept terms & conditions" }) })
})

export type UserFormData = z.infer<typeof UserSchema>

const Register = () => {

    const
        {
            register,
            handleSubmit,
            formState: { errors },
            watch,
            reset,

        } = useForm<UserFormData>({ resolver: zodResolver(UserSchema) })

    const [otpSent, setOtpSent] = useState(false);
    const [isOtpVerified, setIsOtpVerified] = useState(false);
    const [loading, setLoading] = useState(false);
    const mobileNumber = watch("mobile");
    const otpValue = watch("otp");
    const navigate = useNavigate();
    const onSubmit = async (data: UserFormData) => {
        if (!isOtpVerified) {
            toast.error("Please verify your OTP before form submitting");
            return;
        }
        try {

            setLoading(true);
            const response = await axios.post(
                `${process.env.REACT_APP_APPLICATION_URL}/api/signup`,
                {
                    name: data.name,
                    email: data.email,
                    password: data.password,
                    mobile: data.mobile,
                    gender: data.gender
                },
                { headers: { "Content-Type": "application/json" } }
            );



            if (response.data.status) {
                toast.success( "Registration successful!");
                reset()
                setLoading(false);
                navigate("/login");

            } else {
                toast.error("Something went wrong!");
                setLoading(false);
            }
        } catch (error: any) {
            console.error("API Error:", error.response?.data || error.message);
            toast.error(error.response?.data?.message || "Failed to register. Try again.");
        }
    };

    const handleOtp = async () => {
        try {
            if (!mobileNumber && mobileNumber.length !== 10) {
                toast.error("Please enter the valid 10 digit phone Number");
                return;
            }
            console.log("MobileNumber:", mobileNumber);
            const response = await axios.post(
                `${process.env.REACT_APP_APPLICATION_URL}/api/send_otp`,
                { mobile: mobileNumber },
                {
                    headers: { "Content-Type": "application/json" }
                }
            )

            console.log("OTP Response:", response);

            if (response.data.status) {
                setOtpSent(true)
                toast.success("OTP sent successfully!");
            }
            else {
                toast.error("Some error during sending otp")
            }
        }
        catch (error: any) {
            console.log(error.message)
        }

    }

    const verifyOtp = async () => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_APPLICATION_URL}/api/verify_otp`, { mobile: mobileNumber, otp: otpValue }, { headers: { "Content-Type": "application/json" } });

            if (response.data.status) {
                setIsOtpVerified(true)
                toast.success("OTP verified successfully!");
            }
            else {
                setIsOtpVerified(false)
                toast.error("Some error during verifying otp")
            }
        }
        catch (error: any) {
            console.error("OTP Error:", error.response?.data || error.message);
        }
    }


    return (
        <section className="mt-24 xl:mt-44 px-4 blade-bottom-margin-sm flex justify-center items-center">
            <div className="w-full max-w-3xl bg-white p-2 md:p-8 shadow-xl border-2 border-customGray/10 rounded-2xl">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="flex justify-center mb-4">
                        {/* Logo Box */}
                        <div className="flex justify-center items-center w-32 md:w-40 h-auto">
                            <img
                                src="/logo.png"
                                alt="The Buddha Institute Logo"
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>
                    </div>

                    <h3 className="font-semibold font-lato-bold text-darkGreen text-lg md:text-2xl">
                        Buddha Fellowship Program
                    </h3>
                    <p className="font-lato-regular max-w-2xl mx-auto py-2 text-sm md:text-base">
                        Thank you for your interest in The Buddha Fellowship Program. We are
                        currently accepting applications for our 2022-2024 cohort.
                        Individuals working on their own for-profit development enterprise
                        with a direct impact on the poor are eligible to apply.
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 p-2 md:p-4">
                    {/* Name */}
                    <div>
                        <label className="block font-lato-regular text-black mb-1 text-sm md:text-base">Name</label>
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full border rounded-lg px-4 py-2 outline-none"
                            {...register("name")}
                        />
                        {errors.name && (
                            <p className="text-red-500">{errors.name.message}</p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block font-lato-regular text-black mb-1 text-sm md:text-base">Email</label>
                        <input
                            type="email"
                            placeholder="Email"
                            {...register("email")}
                            className="w-full border rounded-lg px-4 py-2 outline-none"
                        />
                        {errors.email && (
                            <p className="text-red-500">{errors.email.message}</p>
                        )}
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block font-lato-regular text-black mb-1 text-sm md:text-base">Password</label>
                        <input
                            type="password"
                            placeholder="Password"
                            {...register("password")}
                            className="w-full border rounded-lg px-4 py-2 outline-none"
                        />
                        {errors.password && (
                            <p className="text-red-500">{errors.password.message}</p>
                        )}
                    </div>

                    {/* Gender */}
                    <div>
                        <label className="block font-lato-regular text-black mb-1 text-sm md:text-base">Gender</label>
                        <select {...register("gender")} className="w-full border rounded-lg px-4 py-2 outline-none">
                            <option value="">Select Gender*</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                        {errors.gender && <p className="text-red-500">{errors.gender.message}</p>}
                    </div>

                    {/* Mobile + OTP */}
                    <div className="md:col-span-2">
                        <label>Mobile</label>
                        <div className="flex flex-col sm:flex-row gap-2">
                            <input
                                type="tel"
                                {...register("mobile")}
                                className="flex-1 border outline-none rounded-lg px-4 py-2"
                            />
                            <button
                                type="button"
                                onClick={handleOtp}
                                className="bg-pear text-black font-lato-bold px-8 py-2 rounded-lg  cursor-pointer transition"
                            >
                                Get OTP
                            </button>
                        </div>
                        {otpSent && (
                            <div className="flex gap-2 mt-2">
                                <input
                                    type="text"
                                    {...register("otp")}
                                    placeholder="Enter OTP"
                                    className="flex-1 border outline-none rounded-lg px-4 py-2"
                                />
                                <button
                                    type="button"
                                    onClick={verifyOtp}
                                    className={`px-4 py-2 rounded-lg ${isOtpVerified ? "bg-green-600 text-white" : "bg-pear text-black"
                                        }`}
                                >
                                    {isOtpVerified ? "Verified" : "Verify OTP"}
                                </button>
                            </div>
                        )}
                        {errors.mobile && <p className="text-red-500">{errors.mobile.message}</p>}
                        {errors.otp && <p className="text-red-500">{errors.otp.message}</p>}
                    </div>

                    {/* Terms & Conditions */}
                    <div className="md:col-span-2 flex items-center space-x-2 mt-2">
                        <input
                            type="checkbox"
                            id="terms"
                            {...register("terms")}
                            className="w-4 h-4 text-green-600 border-gray-300 rounded outline-none"
                        />
                        <label htmlFor="terms" className="font-lato-regular text-black text-sm md:text-base">
                            I Accept terms & Conditions.
                        </label>
                    </div>

                    {/* Submit Button */}
                    <div className="md:col-span-2 text-center mt-4">
                        <button
                            type="submit"
                            className="bg-pear text-black font-lato-bold px-8 py-2 rounded-lg  transition"
                        >
                            {loading ? (
                                <Loading />
                            ) : (
                                "Sign Up"
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Register;
