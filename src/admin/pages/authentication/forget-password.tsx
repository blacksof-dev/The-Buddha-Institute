import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { FiLoader } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Icon } from "organisms/iconCommonent";

interface ResetPasswordProps {
    onSubmit: (formData: forgotPasswordProps) => void;
    onClose: () => void;
}

interface forgotPasswordProps {
    email: string;
}


const ForgetPassword = () => {
    const [formData, setFormData] = useState<forgotPasswordProps>({
        email: "",
    });
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const navigate = useNavigate();
    const validate = (): boolean => {
        const newErrors: { [key: string]: string } = {};

        if (!formData.email) {
            newErrors.email = "Email is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log();
        if (validate()) {
            // onSubmit(formData);
            handleSubmitEmail(formData)
        }
    };


    const handleSubmitEmail = async (formDta: forgotPasswordProps) => {
        try {
            setIsLoading(true)
            await axios.post(`${process.env.REACT_APP_LOCAL_URL}/api/admin/forgot-password`, formData);
            // console.log(res)
            toast.success("Password reset email sent successfully!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setIsLoading(false)
            navigate('/signin')
        }
        catch (error: any) {
            console.log(error.response.data.message)
            toast.error(error.response.data.message, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }


    return (
        <div
            className={`fixed bg-black/40 backdrop-blur-lg inset-0 z-50 flex items-center justify-center`}
        >
            <div className="border-[1px] border-gray-400 bg-white rounded-lg shadow-lg w-[25rem]">
                <form className="flex flex-col p-6" onSubmit={handleSubmit}>
                    <div>
                        <label
                            htmlFor="email"
                            className="form-label block font-lato-bold mt-4">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChanges}
                            className="form-control font-lato-regular text-black/70 w-full px-3 py-2 border rounded-lg placeholder:font-lato-regular"
                        />
                        {errors.email && (
                            <span className="error text-red-500 text-sm">
                                {errors.email}
                            </span>
                        )}
                    </div>


                    <div className="flex justify-center mt-8 space-x-9">
                        <button
                            className="bg-teal text-white font-lato-regular px-4 py-2 rounded-lg w-[8rem] h-[2.8rem] flex justify-center items-center"
                            type="submit"
                        >
                            {
                                isLoading ?
                                    <span className="spin text-2xl"><Icon icon={FiLoader} /></span>
                                    : "Send Email"
                            }
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgetPassword;
