import React, { useEffect, useState } from "react";
import axios from "axios";

export default function FooterForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage("");
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [successMessage]);


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccessMessage("");
    if (!email) {
      setError("Email is required.");
      return;
    } else if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_LOCAL_URL}/api/newsletter/create`,
        { email }
      );

      console.log("Response received:", response.data);

      setSuccessMessage("Thank you for subscribing!");

      setEmail("");
    } catch (error: any) {
      console.error(
        "Error submitting form:",
        error.response?.data || error.message
      );
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-11/12 md:ml-auto">
      <form onSubmit={handleSubmit} className="mt-4 md:mt-0">
        <label htmlFor="email" className="font-lato-regular text-[15.5px]">
          Your email address (required)
        </label>
        <div className="sm:flex pt-2">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder=""
            className={`flex-1 sm:p-3 p-2 bg-transparent border ${
              error ? "border-rose-500" : "border-x-gray-50"
            } text-white placeholder-white rounded-l-md rounded-r-md sm:rounded-r-none w-full sm:border-r-0 md:w-96 focus:outline-none  ${
              error ? "focus:ring-rose-500" : ""
            }`}
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-[#D7DF23] text-nowrap text-black text-base relative right-1 font-lato-bold 2xl:px-8 sm:px-2 px-9 py-2  hover:text-darkGreen transition-all duration-300 ease-in-out sm:mt-0 mt-4"
          >
            {loading ? "Submitting..." : "Subscribe"}
          </button>
        </div>

        {error && <p className="text-rose-500 text-sm mt-2">{error}</p>}

        {successMessage && (
          <p className="text-green-500 text-sm mt-2">{successMessage}</p>
        )}

        <div className="w-full xl:w-[75%]">
          <h6 className="font-lato-regular text-[14.38px] opacity-60 mt-4">
            By submitting your email address, you agree to our Privacy Policy
            and Terms of Service. You can unsubscribe anytime via the link in
            your email.
          </h6>
        </div>
      </form>
    </div>
  );
}
