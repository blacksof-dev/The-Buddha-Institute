import { Icon } from "organisms/iconCommonent";
import React, { useEffect, useState } from "react";
import { ImSpinner2 } from "react-icons/im";
import { MdOutlinePendingActions } from "react-icons/md";
import { toast } from "react-toastify";
import { z } from "zod";

const donationSchema = z.object({
  amount: z.string().min(1, "Please enter an amount."),
  fullname: z.string().min(1, "Name is required."),
  email: z.string().email("Invalid email address."),
});

interface ErrorProps {
  amount: string | null;
  fullname: string | null;
  email: string | null;
}

export default function IndiaDonation() {
  const [useramount, setAmount] = useState("");
  const [userfullname, setFullname] = useState("");
  const [useremail, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<ErrorProps>({
    amount: null,
    fullname: null,
    email: null,
  });

  const loadscript = (src: string) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  useEffect(() => {
    loadscript("https://checkout.razorpay.com/v1/checkout.js");
  }, []);

  const onPayment = async (price: string, name: string, email: string) => {
    try {
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: price, fullname: name, email }),
      };

      const response = await fetch(
        `${process.env.REACT_APP_LOCAL_URL}/api/payment/order`,
        options
      );
      
      const data = await response.json();

      const paymentObject = new window.Razorpay({
        key: "rzp_live_B4BKoD2wsuYZyV",
        order_id: data.order.id,
        amount: data.order.amount,
        currency: data.order.currency,
        handler: async function (response: any) {
          const verifyOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              payment_id: response.razorpay_payment_id,
              order_id: response.razorpay_order_id,
              signature: response.razorpay_signature,
              price,
              name,
              email,
            }),
          };

          const verifyResponse = await fetch(
            `${process.env.REACT_APP_LOCAL_URL}/api/payment/verify`,
            verifyOptions
          );
          const verifyResult = await verifyResponse.json();
          // console.log("Verification Result:", verifyResult);
          setAmount("");
          setEmail("");
          setFullname("");
          toast.success("Payment successful!", { position: "top-right" });
        },
        prefill: { name, email },
        modal: {
          ondismiss: function () {
            // console.log("Payment popup closed");
            setIsLoading(false); 
            setAmount("");
            setEmail("");
            setFullname("");
          },
        },
      });

      setIsLoading(false); 
      paymentObject.open();
    } catch (err) {
      toast.error("Error in payment process. Please try again.");
   
      console.error("Payment Error:", err);
      setIsLoading(false); 
    }
  };

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
  
    const amountInPaise = Math.round(Number(useramount) * 100).toString();
  
    const result = donationSchema.safeParse({
      amount: amountInPaise,
      fullname: userfullname,
      email: useremail,
    });
  
    if (!result.success) {
      const fieldErrors = result.error.formErrors.fieldErrors;
      setError({
        amount: fieldErrors.amount?.[0] || null,
        fullname: fieldErrors.fullname?.[0] || null,
        email: fieldErrors.email?.[0] || null,
      });
      return; 
  }
  
  
    setError({ amount: null, fullname: null, email: null });
    setIsLoading(true);
   
    onPayment(amountInPaise, userfullname, useremail);
  };
  

  return (
    <>
      <section className="bg-donate-gradient blade-top-padding-lg blade-bottom-padding-lg gsap-fade-in">
        <div className="w-container-xl">
          <h1 className=" font-lato-bold text-[#07393C]">
            For donation from India
          </h1>
        </div>

        <div className="border-b  border-[#848484] border-opacity-50 sm:w-[90%] 2xl:max-w-[85%] 2xl:ml-[8%] lg:ml-[5%] xl:ml-[6%] sm:ml-[1%] sm:mx-0 mx-[3%]"></div>
        <div className="w-container-xl my-10">
          <h4 className="w-full md:w-[90%] lg:w-[70%] font-lato-regular text-black/80">
            A vision needs active collaboration to succeed. Your donation will
            be crucial in catalyzing upliftment and dislodging unemployment,
            poverty and rural migration. Let’s create a more empowered and
            inclusive India together. For additional information, please email
            us at{" "}
            <a
              href="mailto:communications@thebuddhainstitute.org"
              className=" text-darkCyan border-darkCyan/70 border-b-[2px]"
            >
              communications@thebuddhainstitute.org.
            </a>{" "}
            Thank you for donating.
          </h4>
        </div>
        <div className="border-b border-[#848484] border-opacity-50 sm:w-[90%] 2xl:max-w-[85%] 2xl:ml-[8%] lg:ml-[5%] xl:ml-[6%] sm:ml-[1%] sm:mx-0 mx-[3%]"></div>

        <div className="lg:flex flex-row items-stretch w-container-xl ">
          <div className="flex flex-col lg:blade-top-margin-sm sm:min-w-[35%]  items-center lg:items-start  mt-12">
            <form onSubmit={handleDonate} className="sm:w-[80%] w-full">
              <div className="flex flex-col ">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <h5 className="font-lato-regular mr-2">Rs.</h5>
                    <input
                      type="number"
                      value={useramount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder=""
                      className=" bg-transparent focus:outline-none px-2 py-1 w-full font-lato-regular"
                    />
                  </div>

                  <h6 className="bg-teal font-lato-light group-hover:bg-[#28807D]   transition-all duration-500 cursor-pointer text-white px-3 py-2 mb-2">
                    INR
                  </h6>
                </div>

                <div className="border border-teal border-opacity-10"></div>
                {error.amount && (
                  <p className="font-lato text-red-500">{error.amount}</p>
                )}
              </div>

              <div className="flex flex-col ">
                <input
                  type="text"
                  value={userfullname}
                  onChange={(e) => setFullname(e.target.value)}
                  placeholder="Enter name"
                  className="border-b-[2px] border-[#848484] focus:outline-none border-opacity-40 text-xl mt-3 px-1 py-2 text-[#646464] font-lato-regular bg-transparent"
                />
                {error.fullname && (
                  <p className="font-lato-regular text-red-500">{error.fullname}</p>
                )}
              </div>

              <div className="flex flex-col ">
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={useremail}
                  placeholder="Enter email"
                  className="border-b-[2px] border-[#848484] focus:outline-none border-opacity-40 mt-3 px-1 py-2 text-xl  text-[#646464] font-lato-regular bg-transparent"
                />
                {error.email && (
                  <p className="font-lato-regular text-red-500">{error.email}</p>
                )}
              </div>

              <div className="sm:flex flex-col gap-4 sm:blade-top-margin-sm mt-4">
               <div>
                 {isLoading ? <h3 className="font-lato-regular text-[#646464] text-lg">Please wait,while we are redirecting you.</h3>:""}
                </div>
                <button className=" 2xl:text-2xl border-[1px] sm:mt-0 mt-4 font-lato-bold bg-teal text-white   transition-all duration-500 px-8 2xl:px-20 sm:py-4 py-2 ">
                  {isLoading ? (
                    <>
                    <div className=" flex justify-center  text-4xl text-white ">
                      <span className="spin">
                        <Icon icon={ImSpinner2}  />
                      </span>
                     
                    </div>
                  
                    </>
                  ) : (
                    "Donate"
                  )}
                </button>
               
              </div>
            </form>
          </div>

          {/* Center vertical border */}
          <div className="border-r border-[#848484] border-opacity-50 ml-4"></div>
          <div className=" w-full h-full p-6 flex flex-wrap md:flex-nowrap gap-4  justify-center lg:justify-start mt-12 lg:mt-0 ">
            <div className="xl:h-96 w-fit p-6 bg-teal  pt-10 pb-8">
              <h3 className="font-lato-regular text-white ">
                For individual Indian donation
              </h3>
              <h6 className="font-lato-light text-white mt-8">
                <span className="font-lato-regular">Account:</span> Education
                for Employability Foundation
              </h6>
              <h6 className="font-lato-light text-white mt-4">
                <span className="font-lato-regular">Bank:</span> AXIS Bank
              </h6>
              <h6 className="font-lato-light text-white mt-4">
                <span className="font-lato-regular">Account number:</span>{" "}
                920010058062076
              </h6>
              <h6 className="font-lato-light text-white mt-4">
                <span className="font-lato-regular">IFSC: </span> UTIB0000160
              </h6>
              <h6 className="font-lato-light text-white mt-4">
                <span className="font-lato-regular">Branch: </span> Saket, New
                Delhi
              </h6>
            </div>
            <div className="xl:h-96 w-fit p-6 bg-teal  pt-10 pb-8">
              <h3 className="font-lato-regular text-white ">For CSR grants</h3>
              <h6 className="font-lato-light text-white mt-8">
                <span className="font-lato-regular">Account: </span> Education
                for Employability Foundation
              </h6>
              <h6 className="font-lato-light text-white mt-4">
                <span className="font-lato-regular">Bank:</span> AXIS Bank
              </h6>
              <h6 className="font-lato-light text-white mt-4">
                <span className="font-lato-regular">Account number: </span>{" "}
                920010024561314
              </h6>
              <h6 className="font-lato-light text-white mt-4">
                <span className="font-lato-regular">IFSC: </span> UTIB0000160
              </h6>
              <h6 className="font-lato-light text-white mt-4">
                <span className="font-lato-regular">Branch: </span> Saket, New
                Delhi
              </h6>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
