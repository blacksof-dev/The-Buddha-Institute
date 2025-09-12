import React, { useState, } from "react";
import axios from "axios";
import { AiOutlinePlusCircle } from "react-icons/ai";

import ContactUsDataCard from "./contact";
import AddressCard from "../address/addressCard";
import { Icon } from "organisms/iconCommonent";


interface userDataPropes {
    _id: string;
    fullName: string;
    contactNumber: string;
    email: string;
    industry: string;
    howDidYouGetToKnowUs: string;
    queryRelatedTo: string;
    query: string;
}
const Contact = () => {
    // const [userData, setUserData] = useState<userDataPropes[]>([]);
    const [formOpen, setFormOpen] = useState<boolean>(false);
    const [activeBtn, setActivebtn] = useState<string>("userData")
    const [DeletePopUp, setDeletePopup] = useState<boolean>(false);
    const [deletePopupStatus, setDeletePopupStatus] = useState<boolean>(false)
    // const formClickOpens = () => {
    //     setFormOpen(true);
    // };

    // const formSubmits = () => {
    //     setFormOpen(false);
    // };

    const handleActivebtn = (btn: string) => {
        setActivebtn(btn)
    }

    const handleDeleteUserData = async (id: string) => {
        try {
            // console.log(id);
            setDeletePopup(true);
            const res = await axios.delete(`${process.env.REACT_APP_LOCAL_URL}/api/contact/delete/${id}`)
            // console.log(res);
        } catch (err: any) {
            // console.log(err.message)
        }
    }

    // useEffect(() => {
    //     const fetchContactDetails = async () => {
    //         try {
    //             const response = await axios.get(
    //                 `${process.env.REACT_APP_LOCAL_URL}/api/contact/show`
    //             );
    //             setUserData(response.data.data);
    //             // console.log(response.data);
    //         } catch (error: any) {
    //             console.error("Error fetching data:", error.message);
    //         }
    //     };
    //     fetchContactDetails();
    // }, []);


    const handleAddAddress = () => {
        setFormOpen(true);
    }


    return (
        <>
            <div className=' blade-top-padding-lg p-4 pt-10'>
                <div>
                    <h3 className="py-3 font-lato-bold">Contact Us</h3>
                    <hr />
                    <div className="flex border-b-[1px]  justify-between py-4">
                        <div className="flex gap-8">
                            <button onClick={() => { handleActivebtn("address") }} className={`font-lato-regular ${activeBtn === 'address' ? 'bg-darkCyan text-white' : " bg-transparent border-[1px] border-pear text-black "} rounded-md px-4 py-2 text-lg `}>Address</button>
                            <button onClick={() => { handleActivebtn("userData") }} className={`font-lato-regular ${activeBtn === 'userData' ? 'bg-darkCyan text-white' : " bg-transparent border-[1px] border-pear text-black "} rounded-md px-4 py-2 text-lg `}>User Data</button>
                        </div>
                        <div>
                            {activeBtn !== "userData" &&
                                <button
                                    onClick={handleAddAddress}
                                    className="bg-darkCyan flex items center  text-white font-lato-regular rounded-md px-4 py-2"  >
                                    {/* <AddCircleOutlineIcon className="pe-2" /> */}
                                    <span className='text-2xl pr-2 relative top-0.5'><Icon icon={AiOutlinePlusCircle} /></span> <h4 className='text-nowrap'> Add new card</h4>
                                </button>
                            }
                        </div>
                    </div>
                    <div className="flex gap-8 flex-wrap">
                        {
                            activeBtn === "userData" && <ContactUsDataCard />

                        }
                        {
                            activeBtn === 'address' &&
                            <AddressCard isCreateFormOpen={formOpen} handleCreateFormOpen={() => setFormOpen(val => !val)} />
                        }
                    </div>

                </div>

            </div >

        </>
    );
};

export default Contact;
