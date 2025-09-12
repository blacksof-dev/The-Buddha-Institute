import React, { useRef, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type FormProps = {
  formTitle?: string;
};

const formSchema = z.object({
  fullName: z
    .string()
    .min(1, "Full Name is required.")
    .max(30, "Name cannot exceed 30 characters."),
  email: z
    .string()
    .email("Invalid email address.")
    .min(1, "Email is required."),
  contactNumber: z
    .string()
    .regex(/^\d{10,12}$/, "Contact Number must not exceed 10-12 digits."),
  industry: z.string().min(1, "Industry is required."),
  howDidYouGetToKnowUs: z.string().min(1, "Please choose any option."),
  queryRelatedTo: z.string().min(1, "Please choose any option."),
  query: z.string().optional(),
});

type FormFieldSchema = z.infer<typeof formSchema>;

export default function DetailForm({ formTitle = "Contact Us" }: FormProps) {
  const [isLoading, setLoading] = useState(false);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormFieldSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormFieldSchema> = async (data) => {
    setLoading(true);
    try {
      // console.log("Form submitted:", data);
      // toast.success("Form submitted successfully!");
      setPopupVisible(true);
      reset();
    } catch {
      toast.error("Failed to submit the form.");
    } finally {
      setLoading(false);
    }
  };

  const ClosePopup = () => {
    setPopupVisible(false);
  };

  return (
    <section className="ml-1  mt-3 w-full sm:mt-1">
      <ToastContainer
        position="bottom-center"
        theme="dark"
        toastClassName="bg-darkGreen shadow-none"
        className="rounded-xl bg-darkGreen !px-5 text-sm font-medium"
        progressClassName="h-[1px] bg-darkGreen"
      />
      <form
        noValidate
        ref={formRef}
        onSubmit={handleSubmit(onSubmit)}
        className="grid   grid-cols-1 gap-x-8  gap-y-5 sm:grid-cols-2"
      >
        <div className="relative">
          <input
            className={`w-full sm:pb-3 pb-2 sm:leading-[2rem] leading-[1.75rem] sm:border-b-2 border-b border-opacity-40 text-black bg-transparent focus-visible:outline-none text-input ${
              errors.fullName ? "border-rose-500" : "text-[#646464]"
            }`}
            placeholder="Full name"
            {...register("fullName")}
          />
          {errors.fullName && (
            <span className="text-xl text-red-500">
              {errors.fullName.message}
            </span>
          )}
        </div>
        <div className="relative">
          <input
            className={`w-full sm:pb-3 pb-2 sm:leading-[2rem] leading-[1.75rem] sm:border-b-2 border-b border-opacity-40 text-black bg-transparent focus-visible:outline-none text-input ${
              errors.contactNumber ? "border-rose-500" : "text-[#646464]"
            }`}
            placeholder="Contact number"
            {...register("contactNumber")}
          />
          {errors.contactNumber && (
            <span className="text-xl text-red-500">
              {errors.contactNumber.message}
            </span>
          )}
        </div>
        <div className="relative">
          <input
            className={`w-full sm:pb-3 pb-2 sm:leading-[2rem] leading-[1.75rem] sm:border-b-2 border-b border-opacity-40 text-black bg-transparent focus-visible:outline-none text-input ${
              errors.email ? "border-rose-500" : "text-[#646464]"
            }`}
            placeholder="Email ID"
            type="email"
            {...register("email")}
          />
          {errors.email && (
            <span className="text-xl text-red-500">{errors.email.message}</span>
          )}
        </div>

        <div className="relative">
          <input
            className={`w-full sm:pb-3 pb-2 sm:leading-[2rem] leading-[1.75rem] sm:border-b-2 border-b border-opacity-40 text-black bg-transparent focus-visible:outline-none text-input ${
              errors.industry ? "border-rose-500" : "text-[#646464]"
            }`}
            placeholder="Industry"
            {...register("industry")}
          />
          {errors.industry && (
            <span className="text-xl text-red-500">
              {errors.industry.message}
            </span>
          )}
        </div>

        <div className="relative">
          <select
            className={`w-full sm:border-b-2 border-b border-opacity-40 text-[#646464] opacity-70 bg-transparent focus-visible:outline-none   text-input ${
              errors.howDidYouGetToKnowUs ? "border-rose-500" : "text-[#646464]"
            }`}
            {...register("howDidYouGetToKnowUs", {
              validate: (value) => value !== "",
            })}
            defaultValue=""
            style={{ paddingBottom: "8px" }}
          >
            <option value="" className="text-black ">
              How did you get to know about us?
            </option>
            <option value="Peers" className="text-black ">
              Peers
            </option>
            <option value="Website" className="text-black option-value">
              Website
            </option>
            <option value="Fellows" className="text-black ">
              Fellows
            </option>
            <option value="College/University" className="text-black">
              College/University
            </option>
            <option value="Others" className="text-black ">
              Others
            </option>
          </select>
          {errors.howDidYouGetToKnowUs && (
            <span className="text-xl text-red-500">
              {errors.howDidYouGetToKnowUs.message}
            </span>
          )}
        </div>

        <div className="relative">
          <select
            className={`w-full sm:border-b-2 border-b border-opacity-40 text-[#646464] opacity-80 bg-transparent focus-visible:outline-none text-input ${
              errors.queryRelatedTo ? "border-rose-500" : "text-[#646464]"
            }`}
            {...register("queryRelatedTo")}
            defaultValue=""
            style={{ paddingBottom: "8px" }}
          >
            <option value=" " className="text-black">
              What is your query related to?
            </option>
            <option value="Donation" className="text-black">
              Donation
            </option>
            <option value="Mentorship" className="text-black">
              Mentorship
            </option>
            <option value="Anchor" className="text-black">
              Anchor
            </option>
            <option value="The Buddha Fellowship" className="text-black">
              The Buddha Fellowship
            </option>
            <option value="The Buddha Anubhav Program" className="text-black">
              The Buddha Anubhav Program
            </option>
            <option value="The Buddha Institute Global" className="text-black">
              The Buddha Institute Global
            </option>
            <option value="Partnership" className="text-black">
              Partnership
            </option>
            <option value="Media" className="text-black">
              Media
            </option>
            <option value="Others" className="text-black">
              Others
            </option>
          </select>
          {errors.queryRelatedTo && (
            <span className="text-xl text-red-500">
              {errors.queryRelatedTo.message}
            </span>
          )}
        </div>

        <div className="relative  col-span-full">
          <textarea
            className={`w-full sm:border-b-2 border-b border-opacity-40 text-black bg-transparent focus-visible:outline-none text-input ${
              errors.query ? "border-rose-500" : "text-[#646464]"
            }`}
            // rows={0}
            placeholder="Query"
            {...register("query")}
          ></textarea>
        </div>
        <div className=" mt-2 sm:mt-8">
          <button
            type="submit"
            className=" w-fit border-pear px-14 py-2 text-2xl text-black transition-all duration-300 ease-in-out font-lato-bold hover:bg-darkCyan hover:text-white sm:px-8 sm:py-4"
          >
            Submit
          </button>
        </div>
      </form>
      {isPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm px-4">
          <div className=" relative max-w-[705px] w-full h-[296px] rounded-lg shadow-lg bg-darkCyan overflow-hidden">
            <img
              src="/ContactUs/pop-1.png"
              className="h-36 absolute -left-12 -top-11"
              alt="popup-1"
            />
            <img
              src="/ContactUs/pop-2.png"
              className="h-36 absolute -right-12 -bottom-11"
              alt="popup-1"
            />
            <button
              onClick={ClosePopup}
              className="absolute right-4 top-4 text-white  transition hover:text-gray-200"
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#1A8482"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-8 w-8 bg-[#7FCECD] text-[#1A8482] hover:scale-125 rounded"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            {/* Content */}
            <div className="flex h-full items-center justify-center w-container  2xl:max-w-[75%] text-center">
              <h5 className="2xl:text-xl text-white font-lato-regular sm:leading-relaxed">
                Thank you for reaching out. We receive many inquiries daily and
                our team is dedicated to addressing each one. Please allow us up
                to 72 business hours to respond.
              </h5>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
