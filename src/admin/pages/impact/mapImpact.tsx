import PopUpMessage from 'admin/PopUpMessage';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { FaRegEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import MapForm from './mapForm'; // Renamed to MapForm
import { toast } from 'react-toastify';
import OurImpact from './ourImpact';
import { Icon } from 'organisms/iconCommonent';

interface ImpactProps {
    digit: string;
    description: string;
    _id: string;
}

export default function MapImpact({ section, title }: { section: string, title: string }) {  // Renamed to Impact
    const [data, setData] = useState<ImpactProps[]>();
    const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
    const [impactId, setImpactId] = useState<string>('');  // Renamed to impactId
    const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
    const [editData, setEditData] = useState<ImpactProps>();
    const [type, setType] = useState<string>('edit');

    const fetchImpacts = async () => {  // Renamed to fetchImpacts
        try {
            const response = await axios.get(`${process.env.REACT_APP_LOCAL_URL}/api/mapDetails/show`);  // Updated endpoint
            setData(response.data.data);
            // console.log(response.data)
        } catch (error: any) {
            // console.log(error.message);
        }
    };
    useEffect(() => {
        fetchImpacts();
    }, []);

    const handleDeleteFromServer = async (id: string) => {
        try {
            await axios.delete(`${process.env.REACT_APP_LOCAL_URL}/api/mapDetails/delete/${id}`);  // Updated endpoint
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
            toast.error(err.response.data.error, {
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

    const handleFormSubmitEdit = async (formData: any) => {
        try {
            await axios.patch(`${process.env.REACT_APP_LOCAL_URL}/api/mapDetails/edit/${formData._id}`, formData, {  // Updated endpoint
                headers: {
                    "Content-Type": "application/json",  // Adjusted content type for impact
                },
            });
            handleClose();
            fetchImpacts();
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

        } catch (error: any) {
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

    const handleFormSubmitCreate = async (formData: any) => {
        try {
            await axios.post(`${process.env.REACT_APP_LOCAL_URL}/api/mapDetails/create`, formData, {  // Updated endpoint
                headers: {
                    "Content-Type": "application/json",  // Adjusted content type for impact
                },
            });
            handleClose();
            fetchImpacts();
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
        } catch (error: any) {
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

    const handleImpactDelete = (id: string) => {  // Renamed to handleImpactDelete
        setIsPopupOpen(true);
        setImpactId(id);  // Renamed to impactId
    };

    const handleClose = () => {
        setIsPopupOpen(false);
        setIsFormOpen(false);
    };

    const handleEditFormPopUpOpen = (data: ImpactProps) => {  // Renamed to ImpactProps
        setIsFormOpen(true);
        setEditData(data);
        setType("edit");
    };

    const handleCreateFormData = () => {
        setIsFormOpen(true);
        setType("create");
    };

    return (
        <div className='blade-top-padding-lg p-4 pt-10'>
            <div>
                <h2 className='font-lato-regular '>Section - {section}</h2>
                <hr />
                <h3 className='font-lato-regular mt-4'>{title}</h3>
                <h6 className='font-lato-regular text-red-500'>Note: Changes made to this section will be reflected across all pages where this section is used.</h6>
            </div>
            <div className="flex justify-between items-center mt-10">
                <div className='border-b-[1px] w-full pb-4 flex justify-between'>
                    <h3 className='font-lato-regular'>Impact</h3>  {/* Renamed to Impact Section */}
                    <button
                        className="bg-darkCyan flex items-center text-white font-lato-regular rounded-md px-4 py-2"
                        onClick={handleCreateFormData}
                    >
                        <span className='text-2xl pr-2'><Icon icon={AiOutlinePlusCircle} /></span>
                        <h4>Add New Impact</h4>  {/* Renamed to Add New Impact */}
                    </button>
                </div>
            </div>

            <div className='flex flex-wrap gap-8 mt-8'>
                {data && data.map((obj: ImpactProps, index: number) => (  // Renamed to ImpactProps
                    <div className="w-[21rem] mb-8 border-[1px] border-gray-200" key={index}>
                        <div className="bg-white">
                            <div className="p-4">
                                <h4 className="font-lato-regular mb-2">{obj.digit}</h4>  {/* Displaying digit */}
                                <p className="font-lato-regular text-black/70 mb-4">{obj.description}</p>  {/* Displaying description */}
                            </div>
                            <div className="p-4 flex gap-6">
                                <button
                                    className="bg-blue-500 font-lato-regular text-white px-4 py-2 rounded"
                                    onClick={() => handleEditFormPopUpOpen(obj)}
                                >
                                    <Icon icon={FaRegEdit} className="inline-block mr-1"/>
                                    Edit
                                </button>
                                <button
                                    className="text-red-500 font-lato-regular border-[1px] border-red-500 px-4 py-2 rounded"
                                    onClick={() => handleImpactDelete(obj._id)}  // Renamed to handleImpactDelete
                                >
                                    
                                     <Icon icon={MdDelete} className="inline-block mr-1"/>Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
                {isPopupOpen && (
                    <PopUpMessage
                        open={isPopupOpen}
                        articleId={impactId}  // Renamed to impactId
                        onClose={handleClose}
                        type="impact"  // Renamed to impact
                        onDelete={handleDeleteFromServer}
                    />
                )}

                {isFormOpen && type === 'edit' && (
                    <MapForm  // Renamed to MapForm
                        onSubmit={handleFormSubmitEdit}
                        initialData={editData}
                        onClose={handleClose}
                    />
                )}

                {isFormOpen && type === 'create' && (
                    <MapForm  // Renamed to MapForm
                        onSubmit={handleFormSubmitCreate}
                        onClose={handleClose}
                    />
                )}
            </div>
        </div>
    );
}
