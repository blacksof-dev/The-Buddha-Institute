import PopUpMessage from 'admin/PopUpMessage';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { FaRegEdit } from 'react-icons/fa';
import { GoPlusCircle } from 'react-icons/go';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import UpdatesForm from './NewsletterForm';
import { toast } from 'react-toastify';
import { Icon } from 'organisms/iconCommonent';
// import UpdatesForm from './updatesForm';

interface dataProps {
    cover: any,
    tag: string,
    title: string,
    description: string,
    targetpdf: any,
    _id: string
}

// interface UpdatesFormData {
//     cover: File | null;
//     tag?: string;
//     title: string;
//     description: string;
//     targetpdf: File | null;
//     _id: string
// }
export default function Newsletter() {
    const [data, setData] = useState<dataProps[]>();
    const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
    const [updatesId, setUpdatesId] = useState<string>('');
    const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
    const [editData, setEditData] = useState<dataProps>();
    const [type, setType] = useState<string>('edit');

    const fetchNewDetails = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_LOCAL_URL}/api/updates/allupdates`);
            setData(response.data.data);
        } catch (error: any) {
            // console.log(error.message);
        }
    };
    useEffect(() => {
        fetchNewDetails();
    }, []);


    const handleFormSubmitCreate = async (formData: any) => {
        try {
            await axios.request({
                method: 'POST',
                url: `${process.env.REACT_APP_LOCAL_URL}/api/updates/create`,
                data: formData,
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            handleClose();
            fetchNewDetails();
            toast.success('Uploaded successfully', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } catch (error: any) {
            // console.log(error.message);
        }
    };



    const handleDeleteFromServer = async (id: string) => {
        try {
            await axios.delete(`${process.env.REACT_APP_LOCAL_URL}/api/updates/delete/${id}`);
            setData((prevData) => prevData?.filter((obj) => obj._id !== id));
        } catch (err: any) {
            // console.log(err.message);
        }
    };

    const handleFormSubmitEdit = async (formData: any) => {
        // console.log(formData._id)
        try {
            const res = await axios.request({
                method: 'PATCH',
                url: `${process.env.REACT_APP_LOCAL_URL}/api/updates/edit/${formData._id}`,
                data: formData,
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            // console.log(res.data.data)
            fetchNewDetails();
            handleClose();
            toast.success('Uploaded successfully', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } catch (error: any) {
            // console.log(formData)
            // console.log(error.message);
            toast.error(error.response.data.error, {
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

    const handleUpdatesDelete = (id: string) => {
        setIsPopupOpen(true);
        setUpdatesId(id);
    };

    const handleClose = () => {
        setIsPopupOpen(false);
        setIsFormOpen(false);
    };

    const handleEditFormPopUpOpen = (data: dataProps) => {
        setIsFormOpen(true);
        setEditData(data);
        setType("edit");
    };

    const handleCreateFormData = () => {
        setIsFormOpen(true);
        setType("create");
    };

    return (
        <>
            <div className='blade-top-padding-lg p-4 pt-10'>
                <div>
                    <h2 className='font-lato-regular '>Section - 12</h2>
                    <hr />
                    <h3 className='font-lato-regular mt-4'>Updates at a glance</h3>
                    {/* <h6 className='font-lato-regular text-red-500'>Note: Changes made to this section will be reflected across all pages where this section is used.</h6> */}
                </div>
                <div className="flex justify-between items-center mt-10">
                    <div className='border-b-[1px] w-full pb-4 flex justify-between'>
                        <h3 className='font-lato-regular'>Newsletter</h3>
                        <div>
                            <button
                                className="bg-darkCyan flex items-center text-white font-lato-regular rounded-md px-4 py-2"
                                onClick={handleCreateFormData}
                            >
                                <span className='text-2xl pr-2 relative top-0.5'><Icon icon={AiOutlinePlusCircle} /></span>
                                <h4 className='text-nowrap'>Add New Update</h4>
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex flex-wrap gap-8 mt-4'>
                        {data && data.map((obj: dataProps, index: number) => (
                            <div className="w-[21rem] mb-8 border-[1px] border-gray-200" key={index}>
                                <div className="bg-white">
                                    <img
                                        className="w-full h-64 object-cover"
                                        src={`${process.env.REACT_APP_LOCAL_URL}/${obj.cover.replace(/\\/g, '/')}`}
                                        alt="Update Cover"
                                    />
                                    <div className="p-4">
                                        <h4 className="font-lato-regular mb-2">{obj.tag}</h4>
                                        <p className="font-lato-bold text-black/50 mb-2">{obj.title}</p>
                                        <p className="font-lato-regular text-black/70 mb-4">{obj.description}</p>
                                        <Link to={`${process.env.REACT_APP_LOCAL_URL}/${obj.targetpdf.replace(/\\/g, '/')}`} target='_blank' className="text-darkCyan font-lato-bold">
                                            Read more <span className="inline-block transform relative top-1"><Icon icon={GoPlusCircle} /></span>
                                        </Link>
                                    </div>
                                    <div className="p-4 flex gap-6">
                                        <button
                                            className="bg-blue-500 font-lato-regular text-white px-4 py-2 rounded"
                                            onClick={() => handleEditFormPopUpOpen(obj)}
                                        >
                                            <span className="inline-block mr-1"><Icon icon={FaRegEdit} /></span>Edit
                                        </button>
                                        <button
                                            className="text-red-500 font-lato-regular border-[1px] border-red-500 px-4 py-2 rounded"
                                            onClick={() => handleUpdatesDelete(obj._id)}
                                        >
                                            <span className="inline-block relative top-[2px] mr-1"><Icon icon={MdDelete} /></span>Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {
                            isPopupOpen && <PopUpMessage open={isPopupOpen} articleId={updatesId} onClose={handleClose} type="updates" onDelete={handleDeleteFromServer} />
                        }
                        {
                            (isFormOpen && type === 'edit') && <UpdatesForm onSubmit={handleFormSubmitEdit} initialData={editData} onClose={handleClose} />
                        }
                        {
                            (isFormOpen && type === 'create') && <UpdatesForm onSubmit={handleFormSubmitCreate} onClose={handleClose} />
                        }
                    </div>
                </div>
            </div>
        </>
    );
}
