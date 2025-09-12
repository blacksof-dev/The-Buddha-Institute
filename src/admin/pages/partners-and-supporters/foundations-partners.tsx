import PopUpMessage from 'admin/PopUpMessage';
import axios from 'axios';
import { Icon } from 'organisms/iconCommonent';
import React, { useEffect, useState } from 'react'
import { MdDelete } from 'react-icons/md';
import { toast } from 'react-toastify';


interface logoProps {
    logo: string
    _id: string
}

export default function FoundationsPartners() {
    const [data, setData] = useState<logoProps[]>();
    const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false)
    const [instituteId, setInstituteId] = useState<string | null>(null)
    useEffect(() => {
        const fetchContactDetails = async () => {
            try {
                const response = await axios.get(
                    `${process.env.REACT_APP_LOCAL_URL}/api/foundation/show`
                );
                setData(response.data.data);
                // console.log(response.data.data);
            } catch (error: any) {
                console.error("Error fetching data:", error.message);
            }
        };
        fetchContactDetails();
    }, []);

    const handleInstituteDelete = (id: string) => {
        setIsPopupOpen(true)
        setInstituteId(id);
    }
    const handleClose = () => {
        setIsPopupOpen(val => !val)
    }

    const handleDeleteFromServer = async (id: string) => {
        try {
            const res = await axios.delete(`${process.env.REACT_APP_LOCAL_URL}/api/foundation/delete/${id}`);
            // console.log(res.data);
            setData((prevData) => {
                if (!prevData) return prevData;
                return prevData.filter((obj) => obj._id !== id);
            });
            toast.success('Successfully deleted', {
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
            // console.log(err.message);
        }
    }
    const handleFormPopup = () => {
        setIsPopupOpen(val => !val)
    }

    return (
        <div className='flex flex-wrap gap-8 pt-8'>
            {
                data && data.map((object: logoProps, index) => (
                    <div className='w-[20rem] d h-[20rem] p-4 flex flex-col  rounded-md justify-between  border-[1px] border-gray-200' key={index}>
                        <div className='flex max-h-[15rem] justify-center'>
                            <img
                                className="object-cover"
                                src={`${process.env.REACT_APP_LOCAL_URL}/${object.logo.replace(/\\/g, '/')}`}
                                alt="institution Image"
                            // onError={(e) => { e.currentTarget.src = 'fallback-image-url.jpg'; }}
                            />
                        </div>
                        <div className='flex justify-end'>
                            <button
                                className="text-red-500  font-lato-regular border-[1px] border-red-500 px-4 py-2 rounded"
                                onClick={() => handleInstituteDelete(object._id)}
                            >
                                <span className="inline-block relative top-[2px] mr-1"><Icon icon={MdDelete }  /></span>   Delete
                            </button>
                        </div>
                    </div>
                ))}
            {
                isPopupOpen && <PopUpMessage open={isPopupOpen} articleId={instituteId} onClose={handleClose} type={"institutions"} onDelete={handleDeleteFromServer} />
            }
        </div>
    )
}
