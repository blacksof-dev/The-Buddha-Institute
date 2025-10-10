import React, { useEffect, useState } from "react";
import axios from "axios";

interface ApiResponse {
  _id: string;
  image: string[];
  heading: string;
  description: string;
}

export default function MouGovernment() {
  const [data, setData] = useState<ApiResponse | null>(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/common-layout/68e8e64f3bccc7a566e4942d");
        const apiData: ApiResponse = response.data.data;

        console.log("Fetched data:", apiData);
        setData(apiData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDetails();
  }, []);

  return (
    <section className="lg:bg-teal bg-white blade-top-padding-lg blade-bottom-padding-lg">
      <div className="w-container-xl">
        <div>
          <h1 className="font-lato-bold lg:text-white text-darkGreen">
            {data?.heading}
          </h1>
        </div>

        <hr className="border-b border-white border-opacity-[28%]" />

        {/* Dynamic Images Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 mt-8">
          {/* Image 1 - Left (only visible on large screens) */}
          {data?.image?.[0] && (
            <div className="lg:col-span-1 lg:block hidden">
              <img
                className="h-full w-full object-cover object-center"
                src={`http://localhost:3000/${data.image[0].replace(/\\/g, "/")}`}
                alt="MOU Left"
              />
            </div>
          )}

          {/* Image 2 - Right large image */}
          {data?.image?.[1] && (
            <div className="lg:col-span-3">
              <img
                className="h-full w-full object-cover"
                src={`http://localhost:3000/${data.image[1].replace(/\\/g, "/")}`}
                alt="MOU Right"
              />
            </div>
          )}

          {/* Image 3 - Mobile-only image */}
          {data?.image?.[2] && (
            <div className="lg:hidden sm:mt-4 block">
              <img
                src={`http://localhost:3000/${data.image[2].replace(/\\/g, "/")}`}
                className="h-full w-[40%]"
                alt="MOU Mobile"
              />
            </div>
          )}
        </div>

        {/* Description */}
        <h4 className="font-lato-regular lg:blade-top-margin-sm blade-top-margin lg:text-white text-black/80 sm:max-w-[90%] opacity-80">
          {data?.description}
        </h4>
      </div>
    </section>
  );
}
