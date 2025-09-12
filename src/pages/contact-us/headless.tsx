import React, { useEffect, useRef, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Listbox } from "@headlessui/react";
import Button from "atoms/button";
import axios from "axios";
type FormProps = {
  formTitle?: string;
};

const formSchema = z.object({
  fullName: z
    .string()
    .min(1, "Full name is required.")
    .max(30, "Name cannot exceed 30 characters."),
  email: z
    .string()
    .email("Invalid email address.")
    .min(1, "Email is required."),
  contactNumber: z
    .string()
    .min(10, "Contact number is required.")
    .regex(/^\d{10}$/, "Enter valid contact."),
  industry: z.string().min(1, "Industry is required."),
  howDidYouGetToKnowUs: z.string().min(1, "Please choose any option."),
  queryRelatedTo: z.string().min(1, "Please choose any option."),
  query: z.string().optional(),
});

type FormFieldSchema = z.infer<typeof formSchema>;

export default function DetailedForm({ formTitle = "Contact Us" }: FormProps) {
  const [isLoading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [scrollY, setscrollY] = useState(0);
  const [dropdownPosition, setdropdownPosition] = useState("top-full");
  const formRef = useRef<HTMLFormElement>(null);
  const [selectedHowDidYouGetToKnowUs, setSelectedHowDidYouGetToKnowUs] =
    useState("");
  const [selectedQueryRelatedTo, setSelectedQueryRelatedTo] = useState("");
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FormFieldSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormFieldSchema> = async (data) => {
    setLoading(true);
    try {
      // console.log("Form submitted:", data);
      const res = await axios.post(
        `${process.env.REACT_APP_LOCAL_URL}/api/contact/create/`,
        data
      );

      // console.log(res);

      if (res.status === 201) {
        console.log(res.status, "Status")
        setSuccess(true);
        setPopupVisible(true);
        // console.log(success, isPopupVisible);
        reset();
      }
      // if (res.data.status === "fail") {
      //   setSuccess(false);
      //   setPopupVisible(true);
      // }
    } catch (error: any) {
      setSuccess(false);
      setPopupVisible(true);
    } finally {
      // setSuccess(false);
      setLoading(false);
    }
  };

  const handleHowDidYouGetToKnowUsChange = (value: string) => {
    setSelectedHowDidYouGetToKnowUs(value);
    setValue("howDidYouGetToKnowUs", value);
  };

  const handleQueryRelatedToChange = (value: string) => {
    setSelectedQueryRelatedTo(value);
    setValue("queryRelatedTo", value);
  };

  const ClosePopup = () => {
    setPopupVisible(false);
  };

  useEffect(() => {
    const handlescroll = () => {
      setscrollY(window.scrollY);
    };

    window.addEventListener("scroll", handlescroll);

    return () => {
      window.removeEventListener("scroll", handlescroll);
    };
  }, [success]);

  useEffect(() => {
    if (buttonRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const isEnoughSpaceBelow = window.innerHeight - buttonRect.bottom > 200;

      if (scrollY > 200 || !isEnoughSpaceBelow) {
        setdropdownPosition("top-full");
      } else {
        setdropdownPosition("bottom-full");
      }
    }
  }, [scrollY]);

  return (
    <section className="ml-1 mt-3 w-full sm:mt-1 ">
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
        {/* Full name */}
        <div className="relative">
          <input
            className={`w-full sm:pb-2 pb-2 sm:leading-[2rem] leading-[1.75rem] sm:border-b-2 border-b border-teal border-opacity-30 text-black bg-transparent focus-visible:outline-none text-input ${errors.fullName ? "border-rose-500" : "text-[#646464]"
              }`}
            placeholder="Full name"
            {...register("fullName")}
          />
          {errors.fullName && (
            <span className="text-sm text-red-500">
              {errors.fullName.message}
            </span>
          )}
        </div>
        {/* Contact number */}
        <div className="relative">
          <input
            type="number"
            className={`w-full sm:pb-2 pb-2 sm:leading-[2rem] leading-[1.75rem] sm:border-b-2 border-b border-teal border-opacity-30 text-black bg-transparent focus-visible:outline-none text-input ${errors.contactNumber ? "border-rose-500" : "text-[#646464]"
              }`}
            placeholder="Contact number"
            {...register("contactNumber")}
          />
          {errors.contactNumber && (
            <span className="text-sm text-red-500">
              {errors.contactNumber.message}
            </span>
          )}
        </div>

        {/* email */}
        <div className="relative mt-4">
          <input
            className={`w-full sm:pb-2 pb-2 sm:leading-[2rem] leading-[1.75rem] sm:border-b-2 border-teal border-b border-opacity-30 text-black bg-transparent focus-visible:outline-none text-input ${errors.email ? "border-rose-500" : "text-[#646464]"
              }`}
            placeholder="Email ID"
            type="email"
            {...register("email")}
          />
          {errors.email && (
            <span className="text-sm text-red-500">{errors.email.message}</span>
          )}
        </div>

        {/* industry */}
        <div className="relative mt-4">
          <input
            className={`w-full sm:pb-2 pb-2 sm:leading-[2rem] leading-[1.75rem]  sm:border-b-2 border-b border-teal border-opacity-30 text-black bg-transparent focus-visible:outline-none text-input ${errors.industry ? "border-rose-500" : "text-[#646464]"
              }`}
            placeholder="Industry"
            {...register("industry")}
          />
          {errors.industry && (
            <span className="text-sm text-red-500">
              {errors.industry.message}
            </span>
          )}
        </div>
        {/* How did you get to know about us? */}
        <div className="relative mt-4">
          <Listbox
            value={selectedHowDidYouGetToKnowUs}
            onChange={handleHowDidYouGetToKnowUsChange}
          >
            {({ open }) => (
              <>
                <Listbox.Button
                  ref={buttonRef}
                  className="w-full sm:border-b-2 text-left sm:pb-2 pb-2 text-black  border-b border-teal border-opacity-40 opacity-70  focus-visible:outline-none text-input flex items-center justify-between"
                >
                  {selectedHowDidYouGetToKnowUs || (
                    <span className="text-[#646464]">
                      How did you get to know about us?
                    </span>
                  )}
                  <span
                    className={`ml-2 transform transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"
                      }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#646464]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </Listbox.Button>
                <Listbox.Options className="absolute z-10 w-full mt-1 bg-white border border-opacity-40 shadow-lg rounded-lg max-h-48 overflow-y-auto">
                  {[
                    "Peers",
                    "Website",
                    "Fellows",
                    "College/University",
                    "Others",
                  ].map((option) => (
                    <Listbox.Option
                      key={option}
                      value={option}
                      className="px-4 py-2 cursor-pointer hover:bg-teal hover:text-white"
                    >
                      {option}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </>
            )}
          </Listbox>
          {errors.howDidYouGetToKnowUs && (
            <span className="text-sm text-red-500">
              {errors.howDidYouGetToKnowUs.message}
            </span>
          )}
        </div>

        {/* What is your query related to? */}
        <div className="relative mt-4">
          <Listbox
            value={selectedQueryRelatedTo}
            onChange={handleQueryRelatedToChange}
          >
            {({ open }) => (
              <>
                <Listbox.Button
                  ref={buttonRef}
                  className="w-full text-left  sm:pb-2 pb-2 sm:border-b-2 border-b border-teal border-opacity-40 text-black opacity-70 bg-transparent focus-visible:outline-none text-input flex items-center justify-between"
                >
                  {selectedQueryRelatedTo || (
                    <span className="text-[#646464]">
                      What is your query related to?
                    </span>
                  )}
                  <div
                    className={`transform transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"
                      }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#646464]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </Listbox.Button>
                <Listbox.Options className="absolute z-10 w-full mt-1 bg-white border rounded-lg max-h-48 overflow-y-auto">
                  {[
                    "Donation",
                    "Mentorship",
                    "Anchor",
                    "The Buddha Fellowship",
                    "The Buddha Anubhav Program",
                    "The Buddha Institute Global",
                    "Partnership",
                    "Media",
                    "Others",
                  ].map((option) => (
                    <Listbox.Option
                      key={option}
                      value={option}
                      className="px-4 py-2 cursor-pointer hover:bg-teal hover:text-white"
                    >
                      {option}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </>
            )}
          </Listbox>
          {errors.queryRelatedTo && (
            <span className="text-sm text-red-500">
              {errors.queryRelatedTo.message}
            </span>
          )}
        </div>

        {/* Query */}
        <div className="relative col-span-full mt-4">
          <textarea
            className={`w-full sm:border-b-2 border-b border-teal border-opacity-30 text-black bg-transparent focus-visible:outline-none text-input ${errors.query ? "border-rose-500" : "text-[#646464]"
              }`}
            placeholder="Query"
            {...register("query")}
          ></textarea>
        </div>
        <div className="blade-top-margin-sm sm:mt-4 2xl:w-[50%] sm:w-[60%] w-[50%]">
          <Button text={"Submit"} />
        </div>
      </form>
      {isPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm px-4">
          <div className="relative max-w-[705px] w-full h-[296px] rounded-lg shadow-lg bg-darkCyan overflow-hidden">
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
                className="xl:h-8 h-6 2xl:w-8 w-6 bg-[#7FCECD] text-[#1A8482] hover:scale-125 rounded"
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
              {success ? (
                <div className="">
                  <h5
                    className={`${success ? "opacity-100" : "opacity-0"
                      } 2xl:text-xl text-white font-lato-regular sm:leading-relaxed`}
                  >
                    Thank you for reaching out. We receive many inquiries daily
                    and our team is dedicated to addressing each one. Please
                    allow us up to 3 business days to respond.
                  </h5>
                </div>
              ) : (
                <div className="text-white/90 pb-2">
                  <svg
                    className="fill-lightGreen mx-auto 2xl:mb-4 mb-2"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    height="3em"
                    width="3em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"></path>
                    <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"></path>
                  </svg>

                  <h3 className="lg:text-3xl text-2xl">
                    Something went wrong!
                  </h3>

                  <h4 className="mt-3">Please try again </h4>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
