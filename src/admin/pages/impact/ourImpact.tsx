import React, { useEffect, useState } from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import MapForm from './mapForm';
import TabFrom from './tabFrom';
import SubtabFrom from './subtabForm';
import axios from 'axios';
import image from "../../../assets/Impact/job_created.png"
import { toast } from 'react-toastify';
import { FaRegEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import PopUpMessage from 'admin/PopUpMessage';
import { IoIosClose } from "react-icons/io";
import { Icon } from 'organisms/iconCommonent';

export default function OurImpact() {
    const [subTabFormOpen, setSubTabFormOpen] = useState<boolean>(false);
    const [subTabEditFormOpen, setSubTabEditFormOpen] = useState<boolean>(false);
    const [isDeletePopupOpen, setIsDeletePopupOpen] = useState<boolean>(false);
    const [isDeleteTabPopupOpen, setIsDeleteTabPopupOpen] = useState<boolean>(false);
    const [deleteId, setDeleteId] = useState<string>('');
    const [editSubtabData, setEditSubtabData] = useState<any>(false);
    const [tabFormOpen, setTabFormOpen] = useState(false);
    const [activeBtn, setActivebtn] = useState<string>("");
    const [activeTabId, setActiveTabId] = useState<string>('')
    const [type, setType] = useState<string>('');
    const [tabs, setTabs] = useState<string[]>([])
    const [data, setData] = useState<any>([])
    const [filteredData, setFilteredData] = useState<any>([]);

    const fetchImpacts = async () => {  // Renamed to fetchImpacts
        try {
            const response = await axios.get(`${process.env.REACT_APP_LOCAL_URL}/api/graphdata/show`);  // Updated endpoint
            setData(response.data.graphs);
            // console.log(response.data.graphs);
            // console.log(response.data.graphs.map((el: any) => ({ [el.tabName]: el._id })))
            setTabs(response.data.graphs.map((el: any) => ({ [el.tabName]: el._id })))
            setFilteredData(response.data.graphs.filter((el: any) => el.tabName === activeBtn));
            // console.log(response.data)

        } catch (error: any) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchImpacts();
        if (tabs.length > 0) {
            setActivebtn(Object.keys(tabs[0])[0])
            setActiveTabId(Object.values(tabs[0])[0])
        }
    }, []);

    const formClickOpens = () => {
        setSubTabFormOpen(true);
    };

    const handleFromOpen = () => {
        setSubTabFormOpen(false);
    };

    const handleActivebtn = (obj: string) => {
        // console.log(obj)
        setFilteredData(data.filter((el: any) => el.tabName === Object.keys(obj)[0]));
        // console.log(data.filter((el: any) => el.tabName === Object.keys(obj)[0]))
        setActivebtn(Object.keys(obj)[0]);
        setActiveTabId(Object.values(obj)[0])
    };

    const handleFrom = () => {
        setType(activeBtn);
        setSubTabFormOpen(true);
    }
    const handleNewTab = () => {
        setTabFormOpen(true)
    }

    const handleAddNewTab = async (newTab: any) => {
        // console.log(newTab)
        // setTabs(tabs => [...tabs, newTab.tabName])
        try {
            const res = await axios.post(`${process.env.REACT_APP_LOCAL_URL}/api/graphdata/create`, newTab);
            // console.log(res)
            fetchImpacts();
        } catch (error: any) {
            console.error(error)
        }
        setTabFormOpen(false)
    }



    const handleAddNewSubtab = async (formData: any) => {
        // console.log({ ...formData, tab: activeTabId });
        try {
            const res = await axios.post(`${process.env.REACT_APP_LOCAL_URL}/api/subtab/create`, { ...formData, tab: activeTabId }, {
                headers: { "Content-Type": "multipart/form-data" }
            })
            // console.log(res)
            toast.success('New subtab added')
            setSubTabFormOpen(false)
            fetchImpacts();
        }
        catch (error) {
            toast.error('Something went wrong. Try again.')
        }

    }

    const handleEditFormPopUpOpen = (obj: any) => {
        setSubTabEditFormOpen(true)
        // console.log({ images: obj["images"], title: obj["title"] })
        setEditSubtabData({ images: obj["images"], title: obj["title"], _id: obj["_id"] })
    }

    const handleEditSubTab = async (formData: any) => {
        // console.log(formData)
        try {
            const res = await axios.patch(`${process.env.REACT_APP_LOCAL_URL}/api/subtab/edit/${data._id}`, { ...formData, tab: activeTabId }, {
                headers: { "Content-Type": "multipart/form-data" }
            })
            // console.log(res)
            toast.success('Updated successfully')
            setSubTabEditFormOpen(false)
            fetchImpacts();
        }
        catch (error: any) {
            toast.error(error.message)
        }
    }

    const handleDelete = (id: string) => {
        setDeleteId(id);
        setIsDeletePopupOpen(true);
    }

    const handleDeleteFromServer = async (id: string) => {
        try {

            const res = await axios.delete(`${process.env.REACT_APP_LOCAL_URL}/api/subtab/delete/${id}`)
            // console.log(res)
            toast.success('Deleted successfully')
            setIsDeletePopupOpen(false)
            fetchImpacts();
        }
        catch (error) {
            // console.log(error)
            toast.error('Something went wrong. Try again')
        }
    }

    const handleDeleteTab = (id: string) => {
        setIsDeleteTabPopupOpen(true);
        setDeleteId(id);
    }

    const handleDeleteTabFromServer = async (id: string) => {
        // console.log(id);
        try {

            const res = await axios.delete(`${process.env.REACT_APP_LOCAL_URL}/api/graphdata/delete/${id}`)
            // console.log(res)
            toast.success('Deleted successfully')
            setIsDeleteTabPopupOpen(false)
            fetchImpacts();
        }
        catch (error) {
            // console.log(error)
            toast.error('Something went wrong. Try again')
        }
    }

    return (
        <div className=''>

            <div>
                <h2 className='font-lato-regular '>Section - 04</h2>
                <hr />
                <h3 className='font-lato-regular mt-4'>Our Impact</h3>
                {/* <h6 className='font-lato-regular text-red-500'>Note: Changes made to this section will be reflected across all pages where this section is used.</h6> */}
            </div>
            <div className="flex justify-between items-center mt-10">
                <div className='border-b-[1px] w-full pb-4 flex justify-between'>
                    <h3 className='font-lato-regular'>Total Tabs - {tabs.length}</h3>
                    <button
                        className="bg-darkCyan flex items-center text-white font-lato-regular rounded-md px-4 py-2"
                        onClick={handleNewTab}
                    >
                        <span className='text-2xl pr-2'><Icon icon={AiOutlinePlusCircle} /></span>
                        <h4>Add New Tab</h4>  {/* Renamed to Add New Impact */}
                    </button>
                </div>
            </div>
            <div className="flex border-b-[1px]  justify-between py-4">
                <div className="flex gap-8">
                    {tabs.map((obj, index) => {

                        return <div className='flex  items-center gap-2'>
                            <button key={index}
                                onClick={() => {
                                    handleActivebtn(obj);
                                }}
                                className={`font-lato-regular ${activeBtn === Object.keys(obj)[0]
                                    ? "bg-darkCyan text-white"
                                    : " bg-transparent border-[1px] border-pear text-black "
                                    } rounded-md px-4 py-2 text-lg `}
                            >
                                {Object.keys(obj)[0]}
                            </button>
                            <button
                                onClick={() => handleDeleteTab(Object.values(obj)[0])}
                                className='h-5 w-5 bg-red-500 text-white rounded-full text-xl'>
                                <Icon icon={IoIosClose} />
                            </button>
                        </div>
                    })}
                </div>
                <div>
                    <button
                        onClick={handleFrom}
                        className="bg-darkCyan flex items center  text-white font-lato-regular rounded-md px-4 py-2">

                        <span className="text-2xl pr-2 relative top-0.5">
                            <Icon icon={AiOutlinePlusCircle} />
                        </span>{" "}
                        <h4 className="text-nowrap"> Add New Subtab</h4>
                    </button>
                </div>
            </div>
            <div>
                {
                    filteredData.map((obj: any, ind: number) => {
                        return <div className=''>
                            <h4 className='mt-5 mb-5  font-lato-regular'>{obj.tabName}</h4>
                            <h5 className='mt-5 mb-5  font-lato-regular'>{obj.desc}</h5>

                            <div className=''>

                                {obj.graphdetails.map((el: string) => {
                                    return <h5 className='font-lato-regular leading-none'>{el}</h5>
                                })
                                }
                            </div>
                            <h2 className='mt-5 mb-5  font-lato-regular text-darkCyan'>Subtabs</h2>
                            <div className='flex gap-20'>
                                {obj.subtabs.map((tab: any) => {
                                    return <div className='flex flex-col'> <div className='w-[23rem]  h-[23rem] rounded-sm'>
                                        <h3 className='font-lato-regular my-2 border-b-4 border-b-pear w-fit mb-10'>{tab.title}</h3>
                                        {/* <img
                                            className="w-full  h-64 object-cover bg-teal"
                                            src={image}
                                            alt="TBI graph"
                                        /> */}
                                        <img
                                            className="w-full  h-64 object-cover"
                                            src={`${process.env.REACT_APP_LOCAL_URL}/${tab.images.replace(
                                                /\\/g,
                                                "/"
                                            )}`}
                                            alt="TBI graph"
                                        />
                                    </div>
                                        <div className="p-4 flex  gap-6">
                                            <button
                                                className="bg-blue-500 font-lato-regular text-white px-4 py-2 rounded"
                                                onClick={() => handleEditFormPopUpOpen(tab)}
                                            >
                                                <span className="inline-block mr-1">
                                                    <Icon icon={FaRegEdit} />
                                                </span>{" "}
                                                Edit
                                            </button>
                                            <button
                                                className="text-red-500  font-lato-regular border-[1px] border-red-500 px-4 py-2 rounded"
                                                onClick={() => handleDelete(tab._id)}
                                            >
                                                <span className="inline-block relative top-[2px] mr-1">
                                                
                                                      <Icon icon={MdDelete} />
                                                </span>{" "}
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                })}
                            </div>

                        </div>
                    })
                }
            </div>
            <div>
                {subTabFormOpen &&
                    // <SubtabFrom type={type} handleFromOpen={handleFromOpen} />
                    <SubtabFrom onClose={() => { setSubTabFormOpen(false) }} onSubmit={handleAddNewSubtab} />
                }
                {subTabEditFormOpen &&
                    // <SubtabFrom type={type} handleFromOpen={handleFromOpen} />
                    <SubtabFrom onClose={() => { setSubTabEditFormOpen(false) }} onSubmit={handleEditSubTab} initialData={editSubtabData} />
                }
                {
                    tabFormOpen && <TabFrom onClose={() => { setTabFormOpen(false) }} onSubmit={handleAddNewTab} />
                }
                {isDeletePopupOpen && (
                    <PopUpMessage
                        open={isDeletePopupOpen}
                        articleId={deleteId}
                        onClose={() => { setIsDeletePopupOpen(false) }}
                        type="delete"
                        onDelete={handleDeleteFromServer}
                    />
                )}
                {isDeleteTabPopupOpen && (
                    <PopUpMessage
                        open={isDeleteTabPopupOpen}
                        articleId={deleteId}
                        onClose={() => { setIsDeleteTabPopupOpen(false) }}
                        type="delete"
                        onDelete={handleDeleteTabFromServer}
                    />
                )}
            </div>
        </div>
    )
}




