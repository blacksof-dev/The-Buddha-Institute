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
    password: string;
    confirmPassword: string
}


const CreatePassword = () => {
    const [formData, setFormData] = useState<forgotPasswordProps>({
        password: "",
        confirmPassword: ''
    });
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const navigate = useNavigate();
    const validate = (): boolean => {
        const newErrors: { [key: string]: string } = {};

        if (!formData.password) {
            newErrors.password = "password is required";
        }
        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "confirm password is required";
        }
        if (formData.confirmPassword !== formData.password) {
            newErrors.confirmPassword = "Confirm password should match the password";
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

        // console.log();
        if (validate()) {
            handleSubmitPassword(formData)
        }
    };


    const handleSubmitPassword = async (formDta: forgotPasswordProps) => {
        // console.log(formData)
        // console.log(process.env.REACT_APP_LOCAL_URL)

        try {
            setIsLoading(true)
            const userId = window.location.pathname.split("/").pop();
            //  console.log(userId);
            await axios.post(`${process.env.REACT_APP_LOCAL_URL}/api/admin/set-password/${userId}`, formData);
            // console.log(res)
            toast.success("Password reset password sent successfully!", {
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
            setIsLoading(false)
            // console.log(error.response.data.message)
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
                            htmlFor="password"
                            className="form-label block font-lato-bold mt-4">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChanges}
                            className="form-control font-lato-regular text-black/70 w-full px-3 py-2 border rounded-lg placeholder:font-lato-regular outline-teal"
                        />
                        {errors.password && (
                            <span className="error text-red-500 text-sm">
                                {errors.password}
                            </span>
                        )}
                    </div>
                    <div>
                        <label
                            htmlFor="confirmPassword"
                            className="form-label block font-lato-bold mt-4">
                            Confirm password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChanges}
                            className="form-control font-lato-regular text-black/70 w-full px-3 py-2 border rounded-lg placeholder:font-lato-regular outline-teal"
                        />
                        {errors.confirmPassword && (
                            <span className="error text-red-500 text-sm">
                                {errors.confirmPassword}
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
                                    : "Submit"
                            }
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreatePassword;
