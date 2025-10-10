import axios from "axios";
import { ApiResponse } from "pages/partners-support/03_contributors";
import React, { useEffect, useState } from "react";

const Catalysing = () => {
   const [data, setData] = useState<ApiResponse| null>(null);
    useEffect(() => {
      const fetchDetails = async () => {
        try {
          const response = await axios.get("http://localhost:3000/api/content/68e8e4f33bccc7a566e49425");
          const apiData: ApiResponse = response.data.data;
         
          setData(apiData);
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchDetails();
    }, [data]);
  return (
    <>
      <section className="w-container-xl">
        <div className="blade-top-padding-lg blade-bottom-padding-lg">
          <h1 className="text-[#07393C] border-b pb-2 font-lato-bold border-[#84848480]">
           {data?.heading}
          </h1>
          <div>
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-36 blade-top-padding-sm">
              <div className="w-full ">
                <h4 className="text-black/80 font-lato-regular" dangerouslySetInnerHTML={{__html:data?.description ?? ""}}  />
             

              
              </div>
             
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Catalysing;
