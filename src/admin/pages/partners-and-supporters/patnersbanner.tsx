import { useEffect, useState } from "react"
import bannerImg from '../../../assets/partnersSupporters/mou-awards.jpg'
import { Icon } from "organisms/iconCommonent";
import { AiOutlinePlusCircle } from "react-icons/ai";
import axios from "axios";
import FormData from './bannerForm'



interface ApiResponseItem {
    _id: string;
    bannerImage: string;
    heading: string;
    description: string;
}

interface ApiResponseWrapper {
    success: boolean;
    data: ApiResponseItem;
}




export default function Banner({ section, sectionTitle }: { section: string; sectionTitle: string; }) {


    const [data, setData] = useState<ApiResponseItem | null>(null);
    const [isPopUpOpen, setIsPopupOpen] = useState<boolean>(false);




    const fetchBannerDetails = async (id: string) => {
        try {
            const banner = await axios.get<ApiResponseWrapper>(`http://localhost:3000/api/banner-data/${id}`);
            const apiData = banner.data.data;
            setData(apiData)
        }
        catch (error: any) {
            console.log(error.message)
        }
    }

    const handleUpdateClick = async (id: string) => {
        setIsPopupOpen(true)
    }

    useEffect(() => {
        fetchBannerDetails("68dd025f892b6cb218f96f55")
    }, [])


    const handleSuccess = async () => {
  await fetchBannerDetails("68dd025f892b6cb218f96f55");
};

    return (
        <>
            <div className="">
                <h2 className="font-lato-regular ">Section - {section}</h2>
                <hr />
                <div className="flex justify-between pt-6 pb-4">
                    <div>
                        <h3 className="font-lato-regular ">{sectionTitle}</h3>
                    </div>
                    <div>
                        <button
                            className="bg-darkCyan flex items center  text-white font-lato-regular rounded-md px-4 py-2"
                            onClick={() => handleUpdateClick("68dd025f892b6cb218f96f55")}
                        >

                            <span className="text-2xl pr-2 relative top-0.5">

                                <Icon icon={AiOutlinePlusCircle} />
                            </span>{" "}
                            <h4 className="text-nowrap">Update Banner</h4>
                        </button>
                    </div>
                </div>
                <hr />
                <div className="blade-top-margin-sm w-[75%] h-auto ">
                    <div className="w-[80%] h-[20rem] ">
                        {data?.bannerImage && (
                            <img
                                src={`http://localhost:3000/${data.bannerImage.replace(/\\/g, '/')}`}
                                alt="Banner Img"
                                className="w-full h-full object-cover rounded-md"
                            />
                        )}
                    </div>

                    <div className="p-3">
                        <>
                            <h2 className="font-lato-regular text-4xl py-2">{data?.heading}</h2>
                            <h4 className="font-lato-regular text-lg max-w-4xl">{data?.description}</h4>
                        </>
                    </div>
                </div>

                {isPopUpOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
                        <div className="bg-white rounded-lg shadow-lg p-2 w-[25rem] h-auto">
                            <FormData role="update" onclose={() => setIsPopupOpen(false)} onSuccess={() => handleSuccess} />
                        </div>
                    </div>

                )}

            </div>

        </>
    )
}