// backup for contact us page
import React, { useState } from "react";

const DetailForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    howDidYouGetToKnowUs: "",
    query: "",
    industry: "",
    queryRelatedTo: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // console.log(formData);
  };

  // Reusable floating label component
  const FloatingLabelInput = ({
    id,
    name,
    value,
    onChange,
    label,
    type = "text",
    isTextarea = false,
    isSelect = false,
    options = [],
    className = "",
  }: {
    id: string;
    name: string;
    value: string;
    onChange: (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => void;
    label: string;
    type?: string;
    isTextarea?: boolean;
    isSelect?: boolean;
    options?: { value: string; label: string; disabled?: boolean }[];
    className?: string;
  }) => {
    return (
      <div
        className={`relative w-full focus-within:border-blue-500 ${className}`}
      >
        {isTextarea ? (
          <textarea
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            className="peer w-full border-gray-300 p-2 pt-6 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-transparent"
            placeholder=" "
          />
        ) : isSelect ? (
          <select
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            className="peer w-full border-gray-300 p-2 pt-6 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-transparent"
          >
            <option value="" disabled></option>
            {options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ) : (
          <input
            type={type}
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            className="peer w-full text-xl border-gray-300 p-2 pt-6 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-transparent"
            placeholder=" "
          />
        )}
        <label
          htmlFor={id}
          className="absolute left-2 top-2 text-gray-500 text-[20px] transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xl peer-focus:text-gray-500"
        >
          {label}
        </label>
      </div>
    );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4  space-x-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <FloatingLabelInput
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          label="Full Name"
          className="border-b-2 sm:w-3/4 border-gray-300"
        />

        <FloatingLabelInput
          id="contactNumber"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
          label="Contact Number"
          className="border-b-2 sm:w-3/4 border-gray-300"
        />

        <FloatingLabelInput
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          label="Email ID"
          type="email"
          className="border-b-2 sm:w-3/4 border-gray-300"
        />

        <FloatingLabelInput
          id="industry"
          name="industry"
          value={formData.industry}
          onChange={handleChange}
          label="Industry"
          className="border-b-2 sm:w-3/4 border-gray-300"
        />

        <FloatingLabelInput
          id="howDidYouGetToKnowUs"
          name="howDidYouGetToKnowUs"
          value={formData.howDidYouGetToKnowUs}
          onChange={handleChange}
          label="How did you get to know about us?"
          isSelect={true}
          className="border-b-2 sm:w-[88%] border-gray-300"
          options={[
            { value: "Peers", label: "Peers" },
            { value: "Website", label: "Website" },
            { value: "Fellows", label: "Fellows" },
            { value: "College/University", label: "College/University" },
            { value: "Others", label: "Others" },
          ]}
        />

        <FloatingLabelInput
          id="queryRelatedTo"
          name="queryRelatedTo"
          value={formData.queryRelatedTo}
          onChange={handleChange}
          label="What is your query related to?"
          isSelect={true}
          className="border-b-2 sm:w-3/4 border-gray-300"
          options={[
            { value: "", label: "Select an option", disabled: true },
            { value: "Donation", label: "Donation" },
            { value: "Mentorship", label: "Mentorship" },
            { value: "Anchor", label: "Anchor" },
            { value: "The Buddha Fellowship", label: "The Buddha Fellowship" },
            {
              value: "The Buddha Anubhav Program",
              label: "The Buddha Anubhav Program",
            },
            {
              value: "The Buddha Institute Global",
              label: "The Buddha Institute Global",
            },
            { value: "Partnership", label: "Partnership" },
            { value: "Media", label: "Media" },
            { value: "Others", label: "Others" },
          ]}
        />

        <FloatingLabelInput
          id="query"
          name="query"
          value={formData.query}
          onChange={handleChange}
          label="Query"
          isTextarea={true}
          className=""
        />
      </div>
      <div className="border-b-2 border-gray-300"></div>
      <button
        type="submit"
        className="hover:bg-blueGreen d hover:text-white border-pear text-black sm:px-12 px-2 py-2 text-2xl font-lato-bold w-full sm:w-auto transition-all duration-300 ease-in-out"
      >
        Submit
      </button>
    </form>
  );
};

export default DetailForm;
