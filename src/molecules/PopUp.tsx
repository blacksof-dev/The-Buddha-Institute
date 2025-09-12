import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";
import { useForm } from "react-hook-form";

type NewsLetter = {
  name: string;
  email: string;
  source: string;
};

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email format"),
});

type FormData = z.infer<typeof formSchema>;

const PopUp = ({ handleClose }: { handleClose: () => void }) => {
  const [successMessage, setSuccessMessage] = useState("");
  const [datas, setdatas] = useState<NewsLetter>({
    name: "",
    email: " ",
    source: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(formSchema) });

  const onSubmit = async (formData: FormData, e?: React.BaseSyntheticEvent) => {
    e?.preventDefault();
     setSuccessMessage("");

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_LOCAL_URL}/api/newsletter/create`,
        formData
      );
      
      console.log("Response received:", response.data);

      setSuccessMessage("Thank you for subscribing!");

      handleClose();
    } catch (error: any) {
      console.log("Error submitting form:", error.message);
    }
  };

  return (
   <div className="fixed top-0 inset-0 w-[100vw] h-[100dvh] bg-black/50 z-[999] flex justify-center items-center">
      <div className="w-full sm:w-[70%] lg:w-[49%] xl:w-[35%] h-auto lg:h-auto  p-2 w-container bg-[#FFFBEF]  m-2">
        <div className="ms-auto w-fit mt-2 mr-2">
          <button onClick={() => handleClose()}>
            {" "}
            {/* Close button */}
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="35" height="35" rx="5" fill="" />
              <rect
                x="0.5"
                y="0.5"
                width="34"
                height="34"
                rx="4.5"
                stroke="black"
                stroke-opacity="0.28"
              />
              <path
                d="M24.6113 22.781C25.1296 23.2997 25.1296 24.1066 24.6113 24.6254C24.3522 24.8847 24.0355 25 23.69 25C23.3445 25 23.0278 24.8847 22.7687 24.6254L17.5 19.3516L12.2313 24.6254C11.9722 24.8847 11.6555 25 11.31 25C10.9645 25 10.6478 24.8847 10.3887 24.6254C9.87044 24.1066 9.87044 23.2997 10.3887 22.781L15.6574 17.5072L10.3887 12.2334C9.87044 11.7147 9.87044 10.9078 10.3887 10.389C10.9069 9.87032 11.7131 9.87032 12.2313 10.389L17.5 15.6628L22.7687 10.389C23.2869 9.87032 24.0931 9.87032 24.6113 10.389C25.1296 10.9078 25.1296 11.7147 24.6113 12.2334L19.3426 17.5072L24.6113 22.781Z"
                fill="#000"
              />
            </svg>
          </button>
        </div>
        <div className="px-2 sm:px-4 md:px-8">
          <div>
            <h1 className="text-[#07393C] font-lato-bold">The Buddha Times</h1>
            <h3 className="font-lato-regular text-black ">
              Stay in the loop with The Buddha Institute with our monthly newsletter.
            </h3>
          </div>
          <form
            className="pt-3"
            onSubmit={handleSubmit((data, e) => onSubmit(data, e))}
          >
            <div className="sm:flex gap-4 ">
              <div className="mb-6 w-full  py-2">
                <input
                  className={`w-full lg:w-[65%] sm:pb-3 pb-2  sm:border-b-2 border-b border-opacity-40 text-black font-lato-regular bg-transparent focus-visible:outline-none text-input`}
                  placeholder="Full name"
                  {...register("name")}
                />

                {errors.name && (
                  <p className="absolute font-lato-regular text-red-500 text-sm pt-2">
                    {errors.name.message}
                  </p>
                )}
              </div>
            </div>
            <div className="py-2">
              <input
                type="email"
                className={`w-full lg:w-[65%] sm:pb-3 pb-2 font-lato-regular   sm:border-b-2 border-b border-opacity-40 text-black bg-transparent focus-visible:outline-none text-input`}
                placeholder="Email ID"
                {...register("email")}
              />
              {errors.email && (
                <p className="absolute font-lato-regular text-red-500 text-sm pt-2">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="mt-10">
              <button className=" px-12 bg-pear py-3 w-full sm:w-fit sm:py-3 font-lato-bold text-xl rounded text-black">
                Subscribe
              </button>
              <div>
                <h6 className="font-lato-regular text-black/30  py-4">By submitting your email address, you agree to our Privacy Policy and Terms of Service. You can unsubscribe any time via  the link in  your email.</h6>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
