import PopUpMessage from 'admin/PopUpMessage';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { FaRegEdit } from 'react-icons/fa';
import { GoPlusCircle } from 'react-icons/go';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import CaseStudyForm from './caseStudyForm';
import { Icon } from 'organisms/iconCommonent';
// import CaseStudyForm from './CaseStudyForm';

interface CaseStudyProps {
    cover: string;
    logo: string;
    title: string;
    subtitle: string;
    description: string;
    casestudyPdf?: string;
    casestudyLink?: string;
    _id: string;
}

export default function CaseStudies() {
    const [data, setData] = useState<CaseStudyProps[]>();
    const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
    const [caseStudyId, setCaseStudyId] = useState<string>('');
    const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
    const [editData, setEditData] = useState<CaseStudyProps>();
    const [type, setType] = useState<string>('edit');

    useEffect(() => {
        const fetchCaseStudies = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_LOCAL_URL}/api/caseStudy/allcaseStudy`);
                setData(response.data.data);
            } catch (error: any) {
                // console.log(error.message);
            }
        };
        fetchCaseStudies();
    }, []);

    const handleDeleteFromServer = async (id: string) => {
        try {
            await axios.delete(`${process.env.REACT_APP_LOCAL_URL}/api/caseStudy/delete/${id}`);
            setData((prevData) => {
                if (!prevData) return prevData;
                return prevData.filter((obj) => obj._id !== id);
            });
        } catch (err: any) {
            // console.log(err.message);
        }
    };

    const handleFormSubmitEdit = async (formData: any) => {
        try {
            await axios.patch(`${process.env.REACT_APP_LOCAL_URL}/api/caseStudy/edit/${formData._id}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            handleClose();
        } catch (error: any) {
            // console.log(error.message);
        }
    };

    const handleFormSubmitCreate = async (formData: any) => {
        try {
            await axios.post(`${process.env.REACT_APP_LOCAL_URL}/api/caseStudy/create`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            handleClose();
        } catch (error: any) {
            // console.log(error.message);
        }
    };

    const handleCaseStudyDelete = (id: string) => {
        setIsPopupOpen(true);
        setCaseStudyId(id);
    };

    const handleClose = () => {
        setIsPopupOpen(false);
        setIsFormOpen(false);
    };

    const handleEditFormPopUpOpen = (data: CaseStudyProps) => {
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
            <h2 className='font-lato-regular'>Case Studies</h2>
            <hr />
            <div className="flex justify-between items-center mt-10">
                <div className='border-b-[1px] w-full pb-4 flex justify-between'>
                    <h3 className='font-lato-regular'>Case Studies Section</h3>
                    <button
                        className="bg-darkCyan flex items-center text-white font-lato-regular rounded-md px-4 py-2"
                        onClick={handleCreateFormData}
                    >
                        <span className='text-2xl pr-2'><Icon icon={AiOutlinePlusCircle}  /></span>
                        <h4>Add New Case Study</h4>
                    </button>
                </div>
            </div>

            <div className='flex flex-wrap gap-8 mt-8'>
                {data && data.map((obj: CaseStudyProps, index: number) => (
                    <div className="w-[21rem] mb-8 border-[1px] border-gray-200" key={index}>
                        <div className="bg-white">
                            <img
                                className="w-full h-64 object-cover"
                                src={`${process.env.REACT_APP_LOCAL_URL}/${obj.cover.replace(/\\/g, '/')}`}
                                alt="Case Study Cover"
                            />
                            <div className="p-4">
                                <img
                                    className="w-16 h-16 object-contain mb-4"
                                    src={`${process.env.REACT_APP_LOCAL_URL}/${obj.logo.replace(/\\/g, '/')}`}
                                    alt="Logo"
                                />
                                <h4 className="font-lato-regular mb-2">{obj.title}</h4>
                                <p className="font-lato-bold text-black/50 mb-4">{obj.subtitle}</p>
                                <p className="font-lato-regular text-black/70 mb-4">{obj.description}</p>
                                <div className='flex flex-col'>
                                    {obj.casestudyLink && (
                                        <Link to={obj.casestudyLink} className="text-darkCyan font-lato-bold">
                                            Read More Link <span className="inline-block transform relative top-1"><Icon icon={GoPlusCircle} />
                                            </span>
                                        </Link>
                                    )}
                                    {
                                        obj.casestudyPdf && (
                                            <Link to={`${process.env.REACT_APP_LOCAL_URL}/${obj.casestudyPdf.replace(/\\/g, '/')}`} className="text-darkCyan font-lato-bold">
                                                Read more PDF<span className="inline-block transform relative top-1">  <Icon icon={GoPlusCircle} />
                                                </span>
                                            </Link>
                                        )
                                    }
                                </div>
                            </div>
                            <div className="p-4 flex gap-6">
                                <button
                                    className="bg-blue-500 font-lato-regular text-white px-4 py-2 rounded"
                                    onClick={() => handleEditFormPopUpOpen(obj)}
                                >
                                   
                                    <Icon icon={FaRegEdit} className="inline-block mr-1" /> Edit
                                </button>
                                <button
                                    className="text-red-500 font-lato-regular border-[1px] border-red-500 px-4 py-2 rounded"
                                    onClick={() => handleCaseStudyDelete(obj._id)}
                                >
                                    <Icon icon={MdDelete} className="inline-block mr-1" /> 
                                   Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
                {isPopupOpen && (
                    <PopUpMessage
                        open={isPopupOpen}
                        articleId={caseStudyId}
                        onClose={handleClose}
                        type="caseStudy"
                        onDelete={handleDeleteFromServer}
                    />
                )}

                {isFormOpen && type === 'edit' && (
                    <CaseStudyForm
                        onSubmit={handleFormSubmitEdit}
                        initialData={editData}
                        onClose={handleClose}
                    />
                )}

                {isFormOpen && type === 'create' && (
                    <CaseStudyForm
                        onSubmit={handleFormSubmitCreate}
                        onClose={handleClose}
                    />
                )}
            </div>
        </div>
    );
}
