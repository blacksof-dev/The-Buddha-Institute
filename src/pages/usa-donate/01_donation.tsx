import React from "react";
import Button from "atoms/borderedButton";
import MyButton from "atoms/borderedButton";
export default function DonationUsa() {
  return (
    <>
      <section className="blade-top-padding-lg blade-bottom-padding-lg bg-[#FAF9F5] gsap-fade-in">
        <h1 className="text-[#07393C] font-lato-bold  w-container-xl">
          For donation from the USA
        </h1>

        <div className="border-b border-[#848484] sm:w-[90%] 2xl:max-w-[85%] 2xl:ml-[8%] lg:ml-[5%] xl:ml-[6%] sm:ml-[1%] sm:mx-0 mx-[3%]"></div>

        <div className=" w-container-xl font-lato-regular mt-6  ">
          <div className="w-full md:w-[85%]">
            <h4 className="">
              Friends of Buddha Fellowship, Inc., is the tax exempt US 501(c)(3)
              entity (Federal Tax ID: 87-3774362) that supports The Buddha
              Institute's mission of helping Development Entrepreneurs (Buddha
              Fellows) scale and build sustainable profitable enterprises.
            </h4>
          </div>
          <div className="w-full md:w-[85%]">
            <h4 className="my-4">
              Our goal is to have 1000 Buddha Enterprises functioning across
              India, employing 100,000 youth, uplifting 25 million poor, and
              adding $ 1 B to India's rural economy by 2030. For additional
              information please email us at{" "}
              <a
                href="mailto:bfpusa@thebuddhainstitute.org"
                className="text-teal cursor-pointer text-nowrap "
              >
                bfpusa@thebuddhainstitute.org.&nbsp;
              </a>
              Thank you for donating.
            </h4>
          </div>
        </div>

        <div className="sm:flex gap-4  w-container-xl blade-top-margin sm:flex-wrap 2xl:items-center justify-center ">
          <div className="bg-pear flex flex-col 2xl:w-[530px] 2xl:h-[373px] lg:h-[22rem] lg:w-[25rem] sm:h-[18rem] sm:w-[18rem] sm:mt-0 mt-4 h-[15rem] p-3 sm:p-5">
            <h3 className="font-lato-bold text-black mt-3 sm:mt-6  lg:max-w-[50%] ">
              Donate by credit card/ApplePay
            </h3>
            <h5 className="font-lato-regular text-black mt-2  ">
              Please note that Stripe <br /> charges a 2% processing fee.
            </h5>
            <div className="blade-top-margin-lg  mt-auto mb-10">
              <a href="https://donate.stripe.com/28oaG99X8eKzdZC7ss">
                {" "}
                <Button text={"Donate with Stripe"} />
              </a>
            </div>
          </div>
          <div className="bg-pear flex flex-col 2xl:w-[509px] 2xl:h-[373px] lg:h-[22rem] lg:w-[25rem] sm:h-[18rem] sm:w-[18rem] sm:mt-0 mt-4 h-[15rem] p-3 sm:p-5">
            {" "}
            <h3 className="font-lato-bold text-black  mt-3 sm:mt-6">
              Donate stock
            </h3>
            <div className="blade-top-margin-lg  mt-auto mb-10">
              <a href="https://stockdonator.com/donate-stock-online-now/">
                <Button text={"Stock donator"} />
              </a>
            </div>
          </div>
          <div className="bg-pear flex flex-col 2xl:w-[509px] 2xl:h-[373px] lg:h-[22rem] lg:w-[25rem] h-auto sm:w-[18rem] sm:mt-0 mt-4  p-3 sm:p-5">
            <h3 className="font-lato-bold mt-3 sm:mt-6">Donate by check</h3>
            <h6 className="font-lato-bold  mt-6 ">
              Make check payable to: <br />
              <span className="font-lato-regular">
                Friends of Buddha Fellowship, Inc.
              </span>
            </h6>
            <h6 className="font-lato-bold mt-6  lg:max-w-[70%] 2xl:max-w-[60%]">
              Mail check to: <br />
              <span className="font-lato-regular">
                Friends of Buddha Fellowship, Inc.{" "}
                <br className="block md:hidden"></br> (Rajeev Agarwal -
                Treasurer) <br />
                48 Clifton Road Newton, MA 02459
              </span>
            </h6>
          </div>
          <div className="bg-pear flex flex-col 2xl:w-[530px] 2xl:h-[373px] lg:h-[22rem] lg:w-[25rem] h-auto sm:w-[18rem] sm:mt-0 mt-4  p-3 sm:p-5">
            <h3 className="font-lato-bold mt-3 sm:mt-6 ">Domestic wires</h3>
            <h6 className="font-lato-bold mt-6  ">
              Account name:{" "}
              <span className="font-lato-regular ">
                Friends of Buddha Fellowship (FOBF)
              </span>
            </h6>
            <h6 className="font-lato-bold mt-4 ">
              Bank:{" "}
              <span className="font-lato-regular">Middlesex Savings Bank</span>{" "}
            </h6>
            <h6 className="font-lato-bold mt-4">
              Address:{" "}
              <span className="font-lato-regular">
                {" "}
                P O Box 5210 Westborough, MA 01581
              </span>
            </h6>
            <h6 className="font-lato-bold mt-4 ">
              Routing number:{" "}
              <span className="font-lato-regular">211371227</span>{" "}
            </h6>
            <h6 className="font-lato-bold mt-4">
              Account number:{" "}
              <span className="font-lato-regular">167092023</span>{" "}
            </h6>
          </div>
          <div className="bg-pear flex flex-col 2xl:w-[509px] 2xl:h-[373px] lg:h-[22rem] lg:w-[25rem] h-auto sm:w-[18rem] sm:mt-0 mt-4  p-3 sm:p-5">
            <h3 className="font-lato-bold mt-3 sm:mt-6">International wires</h3>
            <h6 className="font-lato-bold mt-8  ">
              Account name:{" "}
              <span className="font-lato-regular 2xl:text-nowrap">
                Friends of Buddha Fellowship (FOBF)
              </span>
            </h6>
            <h6 className="font-lato-bold mt-4 ">
              Bank:{" "}
              <span className="font-lato-regular">Middlesex Savings Bank</span>
            </h6>
            <h6 className="font-lato-bold mt-4 ">
              SWIFT code: <span className="font-lato-regular"> MDSXUS3N</span>
            </h6>
            <h6 className="font-lato-bold mt-4 ">
              Account number:{" "}
              <span className="font-lato-regular">167092023</span>
            </h6>
          </div>
          <div className="bg-pear flex flex-col 2xl:w-[509px] 2xl:h-[373px] lg:h-[22rem] lg:w-[25rem] h-auto sm:w-[18rem] sm:mt-0 mt-4  p-3 sm:p-5">
            <h3 className="font-lato-bold mt-3 sm:mt-6">
              For Foreign Donation (FCRA)
            </h3>
            <h6 className="font-lato-bold mt-8  ">
              Account name:{" "}
              <span className="font-lato-regular">
                Education for Employability <br className="lg:block hidden" />{" "}
                Foundation E2 Foundation
              </span>
            </h6>
            <h6 className="font-lato-bold mt-4 ">
              Bank:{" "}
              <span className="font-lato-regular"> State Bank of India</span>{" "}
            </h6>
            <h6 className="font-lato-bold mt-4 ">
              Account number:{" "}
              <span className="font-lato-regular">40465604212</span>
            </h6>
            <h6 className="font-lato-bold mt-4 ">
              Branch:{" "}
              <span className="font-lato-regular">
                Main Branch, Parliament Street, New Delhi{" "}
                <br className="lg:block hidden" />
                IFSC- SBIN0000691
              </span>
            </h6>
          </div>
        </div>

        <div className="w-container flex flex-col justify-center items-center blade-top-margin">
          <h1 className="font-lato-bold text-[#07393C]">
            For donation from India
          </h1>
          <div className="mt-8 group">
            <a href="/donate-india" target="" rel="noopener noreferrer">
              <button className="bg-pear flex gap-2 group-hover:bg-teal transition-all duration-500 group-hover:text-white text-black px-16 py-3 text-2xl font-lato-bold">
                Donate
                <svg
                  className="2xl:h-9 xl:h-8 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  width="9"
                  height="15"
                  viewBox="0 0 9 15"
                  fill="none"
                >
                  <path
                    d="M1.80605 14.4862L8.92197 7.37031L1.80605 0.254395L0.0429688 2.01748L5.39581 7.37031L0.0429688 12.7232L1.80605 14.4862Z"
                    fill="#000"
                    className="group-hover:fill-white transition-all duration-500"
                  />
                </svg>
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
