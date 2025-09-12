
import React, {  useEffect, useState } from "react";
import ResourcesCarousel from "./resourcesCarousel";
import axios from "axios";


type Category = "Buddha Times" | "News & Media" | "Brochures";
type Brochures = {
    cover:string;
    title:string;
    tag:string;
    targetpdf:string;
    titlebrochures:string;
    targetLink?:string
    description?:string
}

const Resources = () => {
  const [activeCategory, setActiveCategory] =
    useState<Category>("Buddha Times");
  const [fade, setFade] = useState(true);
  const [brochuresData,setbrochuresData] = useState<Brochures[]>([]);


  const fetchAllDetails = async(datacategory:any)=>{
    setActiveCategory(datacategory);
    try
    {
      let response;
      if(datacategory==='News & Media'){
        response = await axios.get(`${process.env.REACT_APP_LOCAL_URL}/api/newsArticle/news`);
      }
      else if(datacategory==='Buddha Times'){
        response = await axios.get(`${process.env.REACT_APP_LOCAL_URL}/api/updates/allupdates`);
      }
      else{
         response = await axios.get(`${process.env.REACT_APP_LOCAL_URL}/api/brochure/allbroucher`);
      }
      setbrochuresData(response.data.data);
    }
    catch(error:any){
      console.error("Error fetching data:", error.message);
    }
    
  }


  useEffect(() => {
    setFade(false);
    const timer = setTimeout(() => {
      setFade(true);
    }, 300);
    fetchAllDetails("Buddha Times");

    return () => clearTimeout(timer);
  },[]);

  return (
    <section className="gsap-fade-in blade-top-padding-lg blade-bottom-padding-lg bg-[#FAF9F5]">
      <div className="w-container">
        <div className="md:flex items-end justify-between border-b pb3 border-[#84848480]">
          <h1 className="pb-3 font-lato-bold text-[#07393C]">
            Buddha Times & updates
          </h1>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-3">
        <div className="font-lato-regular blade-top-padding-sm flex md:flex-col flex-row sm:gap-5 border-[#84848480] md:border-r items-start">
            {[ "Buddha Times","News & Media", "Brochures"].map((category) => (
              <h4
                key={category}
                className={`text-md sm:text-2xl justify-between cursor-pointer text-nowrap w-fit xl:min-w-52 px-4  py-1 transition-colors duration-300 ${
                  activeCategory === category
                    ? "text-[#07393C] bg-[#D6DF20]"
                    : ""
                }`}
                onClick={() => fetchAllDetails(category as Category)}
              >
                {category}
              </h4>
            ))}
          </div>
          <div
            className={` md:col-span-2 transition-opacity duration-300 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
           
            <ResourcesCarousel cardData={brochuresData} />
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;