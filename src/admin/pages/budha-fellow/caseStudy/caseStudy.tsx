
// import { useMakrDown } from "hooks/markDown";
import { useMakrDown } from "../../../../hooks/markDown";
import { useEffect, useState } from "react";
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { CgClose } from "react-icons/cg";
import CaseStudyFrom from "./caseStudyForm";
import axios from "axios";
import { toast } from "react-toastify";
import PopUpMessage from "admin/PopUpMessage";
import { Icon } from "organisms/iconCommonent";
interface dataProps {
    cover: string;
    logo: string;
    title: string;
    subtitle: string;
    description: string;
    markdown: string;
    _id: string
}

export default function CaseStudy() {
    const [isEditFormOpen, setIsEditFormOpen] = useState<boolean>(false)
    const [isFormOpen, setIsFormOpen] = useState<boolean>(false)
    const [editData, setEditData] = useState<dataProps>()
    const [casStudy, setCaseStudyData] = useState<dataProps[]>([])
    const [deleteId, setDeleteId] = useState<string>('')
    const [isDeletePopupOpen, setIsDeletePopupOpen] = useState<boolean>(false)

    const { setCaseStudy } = useMakrDown();

    const fetchNewDetails = async () => {
        try {
            const response = await axios.get(
                `${process.env.REACT_APP_LOCAL_URL}/api/caseStudy/show`
            );
            // console.log(response.data.data);
            setCaseStudyData(response.data.data);
        } catch (error: any) {
            // console.log(error.message);
        }
    };

    useEffect(() => {
        fetchNewDetails();
    }, []);

    const handleCaseStudy = (data: string) => {
        setCaseStudy(data);
        // window.location.href = "/case-study";
    };

    const handleFormSubmitCreate = async (formData: any) => {
        console.log(formData)
        try {
            const res = await axios.request({
                method: "POST",
                url: `${process.env.REACT_APP_LOCAL_URL}/api/caseStudy/create`,
                data: formData,
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            console.log(res)
            fetchNewDetails();
            toast.success('Created successfully', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            // console.log("data", response.data.data);
            // setFormNews(response.data);
            setIsFormOpen(false)
        } catch (error: any) {
            // console.log(error.response.data);
            // console.log(error.message);

            toast.error("Something went wrong. Try again", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        // console.log("Form Data Submitted:", formData);
    };
    const handleFormSubmitEdit = async (formData: any) => {
        console.log(formData)
        try {
            const res = await axios.request({
                method: "PATCH",
                url: `${process.env.REACT_APP_LOCAL_URL}/api/caseStudy/edit/${formData._id}`,
                data: formData,
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            console.log(res)
            fetchNewDetails();
            toast.success('Updated successfully', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            // console.log("data", response.data.data);
            // setFormNews(response.data);
            setIsEditFormOpen(false)
        } catch (error: any) {
            // console.log(error.response.data);
            // console.log(error.message);

            toast.error("Something went wrong. Try again", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        // console.log("Form Data Submitted:", formData);
    };

    const handleDelete = (id: string) => {
        setDeleteId(id);
        setIsDeletePopupOpen(true)
    }
    const handleDeleteFromServer = async (id: string) => {
        try {
            const res = await axios.delete(
                `${process.env.REACT_APP_LOCAL_URL}/api/caseStudy/delete/${id}`
            );
            // console.log(res.data);
            setCaseStudyData((prevData: dataProps[]) => {
                if (!prevData) return prevData;
                return prevData.filter((obj) => obj._id !== id);
            });
            toast.success('Successfully Deleted', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } catch (err: any) {
            toast.error('Something went wrong. Try again', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    };

    const handleEditFormPopUpOpen = (obj: dataProps) => {
        setIsEditFormOpen(true);
        setEditData(obj)
    };


    return (
        <>
            <div className=" blade-top-padding-lg p-4 pt-10">
                <h2 className="font-lato-regular ">Section - 04 (Case Study)
                </h2>
                <hr />
                <div className="flex justify-between items-center mt-10 ">
                    <div className=" border-b-[1px] w-full pb-4 flex justify-between">
                        <div>
                            <h3 className="font-lato-regular ">From enterprising resilience to resilient enterprises</h3>
                        </div>
                        <div>
                            <button
                                className="bg-darkCyan flex items center  text-white font-lato-regular rounded-md px-4 py-2"
                                onClick={() => setIsFormOpen(true)}
                            >
                                <span className="text-2xl pr-2 relative top-0.5">
                                   
                                    <Icon icon={AiOutlinePlusCircle }  />
                                </span>{" "}
                                <h4 className="text-nowrap"> Add new card</h4>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-12">
                    {
                        casStudy.map((obj: dataProps, i: number) => {
                            return <div className="w-[24rem] border-[1px]  rounded-sm flex flex-col justify-between">
                                <div>
                                    <div>
                                        <img
                                            src={`${process.env.REACT_APP_LOCAL_URL}/${obj.cover.replace(
                                                /\\/g,
                                                "/"
                                            )}`}
                                            alt={obj.title}
                                            className="h-full lg:block  hidden w-full object-cover object-center sm:mt-0 relative left-[1px]"
                                        />
                                    </div>
                                    <div className=''>
                                        <div className="flex flex-col p-4 justify-center  gap-2 sm:gap-5  ">

                                            <div>
                                                <div className="">
                                                    <img
                                                        src={`${process.env.REACT_APP_LOCAL_URL}/${obj.logo.replace(
                                                            /\\/g,
                                                            "/"
                                                        )}`}
                                                        alt={obj.title} />
                                                </div>
                                                <h4 className="font-lato-bold ">{obj.title}</h4>
                                                <h6 className="font-lato-bold sm:text-[14.311px] ">
                                                    {obj.subtitle}
                                                </h6>
                                            </div>

                                            <h5 className="font-lato-regular  ">
                                                {obj.description}
                                            </h5>
                                            <div className="mt-2 sm:mt-0">
                                                <Link
                                                    onClick={() => handleCaseStudy(obj.markdown)}
                                                    to="/case-study"
                                                >
                                                    <button className="border-b-[1px] px-1 font-lato-regular border-black">
                                                        Read case study
                                                    </button>
                                                    {/* <Button text={"Read case study"} /> */}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 flex  gap-6">
                                    <button
                                        className="bg-blue-500 font-lato-regular text-white px-4 py-2 rounded"
                                        onClick={() => handleEditFormPopUpOpen(obj)}
                                    >
                                        <span className="inline-block mr-1">
                                         
                                             <Icon icon={FaRegEdit }  />
                                        </span>{" "}
                                        Edit
                                    </button>
                                    <button
                                        className="text-red-500  font-lato-regular border-[1px] border-red-500 px-4 py-2 rounded"
                                        onClick={() => handleDelete(obj._id)}
                                    >
                                        <span className="inline-block relative top-[2px] mr-1">
                                            
                                              <Icon icon={MdDelete }  />
                                        </span>{" "}
                                        Delete
                                    </button>
                                </div>
                            </div>
                        })
                    }
                </div>

            </div>
            {
                isFormOpen && <CaseStudyFrom onSubmit={handleFormSubmitCreate} onClose={() => setIsFormOpen(false)} />
            }
            {
                isEditFormOpen && <CaseStudyFrom onSubmit={handleFormSubmitEdit

                } onClose={() => setIsEditFormOpen(false)} initialData={editData} />
            }
            {
                isDeletePopupOpen && (
                    <PopUpMessage
                        open={isDeletePopupOpen}
                        onClose={() => setIsDeletePopupOpen(false)}
                        articleId={deleteId}
                        onDelete={handleDeleteFromServer}
                        type="userData"
                    />
                )
            }

        </>
    )
}


const cardData = [
    {
        id: "",
        img: "/Buddha-Fellows/ecowrap-new.jpg",
        alt: "A woman skillfully weaving fabric.",
        logo: "/Buddha-Fellows/01-new.png",
        title: "Angraj Swami",
        subTitle: "Founder, Ecowrap",
        desc: "Revolutionising waste management for a zero-waste India",

        caseStudyData: `
  ![Minion](/mark-down/ecowrap-logo.png)
  ![Minion](/mark-down/ecowrap.png)
  
  
  ### Personal Journey
  Angraj's journey, from ideation in 2015-16 to establishing a commercial enterprise in 2020, is fueled by a profound commitment to tackling India's waste management challenges. As a Delhi University student (2011-2014), a pivotal moment occurred during a trip to Murthal, where he observed dump yards and recognized the gravity of waste disposal. Recognizing that 50% of Indian municipalities faced this challenge, Angraj's key insight emerged: the issue lies in the process of waste segregation, not at the dumpsite. With an attempt to make India dump free, Angraj set out to set up **Ecowrap** with the mantra &nbsp;“Mera Desh, Zero waste”
  
  ### Approach to Waste Management
  Through market research and spending time in the field to understand the challenge of dumping, Angraj recognized the Indian market's affinity for financial rewards and value for money. In his first pilot involving 287 households in Jaipur, Angraj strategically introduced financial incentives for waste segregation, a strategy that proved to be immensely successful. However, this form of waste collection proved to be expensive and he didn’t have the team to scale this work. As a result, Angraj decided to approach the HORECA sector and started his first partnership with OYO rooms.
  
  ### Angraj’s first business model
  In this model, the OYO room staff would be required to segregate hotel waste, a task they hesitated in taking up due to increased workload and poor motivation driven by social concerns. Angraj addressed this by introducing a cash incentive system to incentivise OYO room staff to segregate three types of waste: glass, hard plastics/pet bottles, and low-density plastics, specifically those suitable for municipal truck disposal. An intricate system was established, involving parameters for each dustbin, with collectors assessing and awarding stars based on segregation quality. Cash rewards, set at 16 rupees per kilogram for high-rated segregation, were implemented. 
  
  Despite scaling to 173 hotels, capacity constraints led to a decline in service quality and motivation. This experience highlighted the importance of combining cash incentives with excellent service. With the incentive model proving effective, Angraj shifted focus to business optimization. He assembled a tech team to streamline operations, addressing inefficiencies in manual tasks like calling and logistics.
  
  ### Introducing an API-based App to improve business efficiency
  
  Angraj's refined business model, incorporating a user-friendly app, has streamlined the waste management process. The procedure commences with hotels applying for "Dustin," the waste management service, triggering a verification process followed by a signed agreement. Once approved, bins are dispatched to hotels engaged in effective waste segregation. Hotels, in turn, utilise the app to schedule waste pick-ups, choosing specific times and dates. Through an API, these requests are seamlessly transferred to the nearest truck, with the API efficiently mapping out the route and providing real-time location updates to the hotel. The collector, equipped with the app, assesses waste collection parameters, generating a rating that determines cash rewards. Additionally, hotels receive comprehensive waste audit reports through the app. The segregated waste is subsequently sold to recyclers.
  
  The business now caters to approximately 1400 hotels, primarily focusing on collecting dry waste from select establishments. In specific cases where wet waste is collected, it is repurposed, contributing to piggeries for food production at a rate of 1.5 rupees per kilogram, underscoring Angraj's commitment to sustainability and innovative waste management practices.
  
  ### Impact and way forward
  
  Between March 22-Jun 23, Angraj has collected waste worth 1.4 cr. This equals 50,000 kg of waste including wood, glass, paper, plastics and metal that has not reached the dumpsite. The improved business model has helped reduce his loss to INR 2 lakhs compared to the previous INR 10 lakhs. Ecowrap is now almost at breakeven, after 3 years of operations and has already got angel investors on board, who have invested **xx** amount in the organisation. In a bid to expand their business, Angraj has started to partner with the government, and has already signed an MoU with **xyz** municipality, and is exploring potential tie-ups in Dehradun, CH, Jodhpur, Salambur, Gudda Godh, Mandava, Keelwada and Kumbhalgarh. These partnerships will allow Angraj to expand the geographical reach of Ecowrap and reach a larger number of waste producers.
  
  A critical impact that Angraj has been able to achieve through his work has been on the environment. By preventing waste from reaching dumpsites, Ecowrap has successfully helped reduce 9760 metric tons of CO2 emissions. In an effort to support ragpickers, Angraj has considered implementing a Minimum Guaranteed Income program along with assistance in purchasing trucks. Unfortunately, this initiative has faced challenges, particularly with migrant ragpickers expressing fear of potential legal consequences. Additionally, Angraj has ventured into a side project named Muskaan, aiming to empower women in villages by teaching them to craft products like tables, bangle boxes, and trays using recycled plastic. So far 24 women have been trained as a part of this endeavour. While the viability of this project is still being explored, it represents a meaningful endeavour to create sustainable opportunities and support local communities.
  `,
    },]