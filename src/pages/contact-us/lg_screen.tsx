import React, { useRef, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import Select from "react-select";
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

const howDidYouGetToKnowUsOptions = [
  { value: "Peers", label: "Peers" },
  { value: "Website", label: "Website" },
  { value: "Fellows", label: "Fellows" },
  { value: "College/University", label: "College/University" },
  { value: "Others", label: "Others" },
];

const queryRelatedToOptions = [
  { value: "Donation", label: "Donation" },
  { value: "Mentorship", label: "Mentorship" },
  { value: "Anchor", label: "Anchor" },
  { value: "The Buddha Fellowship", label: "The Buddha Fellowship" },
  { value: "The Buddha Anubhav Program", label: "The Buddha Anubhav Program" },
  {
    value: "The Buddha Institute Global",
    label: "The Buddha Institute Global",
  },
  { value: "Partnership", label: "Partnership" },
  { value: "Media", label: "Media" },
  { value: "Others", label: "Others" },
];

export default function DetailingForm({ formTitle = "Contact Us" }: FormProps) {
  const [isLoading, setLoading] = useState(false);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    reset,
    formState: { errors },
  } = useForm<FormFieldSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormFieldSchema> = async (data) => {
    setLoading(true);
    try {
      // console.log("Form submitted:", data);
      toast.success("Form submitted successfully!");
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
        className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2"
      >
        {/* Full Name */}
        <div className=" d relative">
          <input
            className={`w-full sm:pb-3 pb-2 sm:border-b-2 border-b ${
              errors.fullName ? "border-rose-500" : "border-opacity-40"
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

        {/* Contact Number */}
        <div className="relative">
          <input
            className={`w-full sm:pb-3 pb-2 sm:border-b-2 border-b ${
              errors.contactNumber ? "border-rose-500" : "border-opacity-40"
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

        {/* Email */}
        <div className="relative">
          <input
            className={`w-full sm:pb-3 pb-2 sm:border-b-2 border-b ${
              errors.email ? "border-rose-500" : "border-opacity-40"
            }`}
            placeholder="Email ID"
            type="email"
            {...register("email")}
          />
          {errors.email && (
            <span className="text-xl text-red-500">{errors.email.message}</span>
          )}
        </div>

        {/* Industry */}
        <div className="relative">
          <input
            className={`w-full sm:pb-3 pb-2 sm:border-b-2 border-b ${
              errors.industry ? "border-rose-500" : "border-opacity-40"
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

        {/* How Did You Get To Know Us */}
        <div className="relative">
          <Select
            options={howDidYouGetToKnowUsOptions}
            placeholder="How did you get to know about us?"
            onChange={(selectedOption) =>
              setValue("howDidYouGetToKnowUs", selectedOption?.value || "")
            }
            onBlur={() => trigger("howDidYouGetToKnowUs")}
            classNamePrefix="react-select"
            className={errors.howDidYouGetToKnowUs ? "border-rose-500" : ""}
            styles={{
              control: (provided) => ({
                ...provided,
                backgroundColor: "transparent",
              }),
              option: (provided) => ({
                ...provided,
                backgroundColor: "transparent",
                color: "black",
                "&:hover": {
                  backgroundColor: "#1A8482",
                  color: "white",
                },
              }),
            }}
          />
          {errors.howDidYouGetToKnowUs && (
            <span className="text-xl text-red-500">
              {errors.howDidYouGetToKnowUs.message}
            </span>
          )}
        </div>

        {/* Query Related To */}
        <div className="relative">
          <Select
            options={howDidYouGetToKnowUsOptions}
            placeholder="How did you get to know about us?"
            onChange={(selectedOption) =>
              setValue("howDidYouGetToKnowUs", selectedOption?.value || "")
            }
            onBlur={() => trigger("howDidYouGetToKnowUs")}
            classNamePrefix="react-select"
            className={errors.howDidYouGetToKnowUs ? "border-rose-500" : ""}
            styles={{
              control: (provided) => ({
                ...provided,
                backgroundColor: "transparent",
              }),
              option: (provided) => ({
                ...provided,
                backgroundColor: "transparent",
                color: "black",
                "&:hover": {
                  backgroundColor: "#1A8482",
                  color: "white", // Text color changes to white on hover
                },
              }),
            }}
          />
          {errors.howDidYouGetToKnowUs && (
            <span className="text-xl text-red-500">
              {errors.howDidYouGetToKnowUs.message}
            </span>
          )}
        </div>

        {/* Query */}
        <div className="relative col-span-full">
          <textarea
            className={`w-full sm:border-b-2 border-b ${
              errors.query ? "border-rose-500" : "border-opacity-40"
            }`}
            placeholder="Query"
            {...register("query")}
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="mt-2 sm:mt-8">
          <button
            type="submit"
            className="border-pear px-12 py-2 text-2xl text-black transition-all duration-300 ease-in-out font-lato-bold hover:bg-darkCyan hover:text-white sm:px-8 sm:py-4"
          >
            Submit
          </button>
        </div>
      </form>

      {/* Popup */}
      {isPopupVisible && (
        <div className="relative flex h-[1000px] w-[1000px] items-center justify-center bg-darkCyan bg-opacity-50">
          <div className="rounded-lg shadow-lg">
            <button
              onClick={ClosePopup}
              className="absolute right-4 top-4 text-white transition hover:text-gray-200"
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="flex h-full items-center justify-center px-8 text-center">
              <h5 className="mb-2 text-xl text-white font-lato-regular">
                Thank you for reaching out. Please allow us up to 72 business
                hours to respond.
              </h5>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
