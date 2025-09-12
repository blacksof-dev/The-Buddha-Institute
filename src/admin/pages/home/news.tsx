
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import PopUpMessage from "../../component/delatepopup/PopUpMessage";
import FormPopUp from "../../formPopUp";
import PopUpMessage from "admin/PopUpMessage";
import { FaRegEdit } from "react-icons/fa";
import { GoPlusCircle } from "react-icons/go";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { toast } from "react-toastify";
import { Icon } from "organisms/iconCommonent";
interface NewsProps {
    newsdata: Array<{
        _id: string;
        cover: string;
        tag: string;
        title: string;
        targetLink: string;
    }>;
    setNews: any;
}

const News: React.FC<NewsProps> = ({ newsdata, setNews }) => {
    const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);
    const [open, setOpen] = useState(false);
    const [editFormPopUp, setEditFormPopUp] = useState(false);
    const [editNewsData, setEditNewsData] = useState<any>(null);


    const handleNewsDelete = (articleId: string) => {
        setOpen(true);
        setSelectedArticleId(articleId);
    };

    const handleNewsPopUpClose = () => {
        setOpen(false);
        setSelectedArticleId(null);
    };

    const handleDeleteFromServer = async (id: string) => {
        try {
            const res = await axios.delete(`${process.env.REACT_APP_LOCAL_URL}/api/newsArticle/delete/${id}`);
            // console.log(res.data);
            setNews((prevData: any) => {
                if (!prevData) return prevData;
                return prevData.filter((obj: any) => obj._id !== id);
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
          
        }
    }


    const handleEditFormPopUpOpen = (newsData: any) => {
        setEditFormPopUp(true);
        setEditNewsData(newsData);
    };

    const handleEditFormPopUpClose = () => {
        setEditFormPopUp(false);
        setEditNewsData(null);
    };

    return (
        <div className="container mx-auto">
            <div className="flex flex-wrap gap-8 mx-4">
                {newsdata && newsdata.length > 0 ? (
                    newsdata.map((data, index) => (
                        <div className="  w-[21rem] mb-8  border-[1px] border-gray-200" key={index}>
                            <div className="bg-white   ">
                                <img
                                    className="w-full  h-64 object-cover"
                                    // src={`http://localhost:8080/${data.cover}`}
                                    src={`${process.env.REACT_APP_LOCAL_URL}/${data.cover.replace(/\\/g, '/')}`}
                                    alt="Article Image"
                                // onError={(e) => { e.currentTarget.src = 'fallback-image-url.jpg'; }}
                                />

                                <div className="h-full flex justify-between flex-col">
                                <div className="p-4 ">
                                    <h4 className=" font-lato-regular mb-2">{data.tag}</h4>
                                    <p className="font-lato-bold text-black/50 mb-4">{data.title}</p>
                                    <Link to={data.targetLink} className="text-darkCyan font-lato-bold">
                                        Read more <span className="inline-block transform relative top-1"><Icon icon={GoPlusCircle} />
                                        </span>
                                    </Link>
                                </div>
                                <div className="p-4 flex  gap-6 ">
                                    <button
                                        className="bg-blue-500 font-lato-regular text-white px-4 py-2 rounded"
                                        onClick={() => handleEditFormPopUpOpen(data)}
                                    >
                                        <span className="inline-block mr-1"><Icon icon={FaRegEdit} /></span>   Edit
                                    </button>
                                    <button
                                        className="text-red-500  font-lato-regular border-[1px] border-red-500 px-4 py-2 rounded"
                                        onClick={() => handleNewsDelete(data._id)}
                                    >
                                        <span className="inline-block relative top-[2px] mr-1"><Icon icon={MdDelete} /></span>   Delete
                                    </button>
                                </div>
                                </div>

                              
                            </div>
                            {open && (
                                <PopUpMessage
                                    open={open}
                                    onClose={handleNewsPopUpClose}
                                    articleId={selectedArticleId}
                                    type={"news"}
                                    onDelete={handleDeleteFromServer}
                                />
                            )}
                            {/* {
                                isPopupOpen && <PopUpMessage open={isPopupOpen} articleId={brochuresId} onClose={handleClose} type={"brochures"} onDelete={handleDeleteFromServer} />
                            } */}
                            <FormPopUp
                                open={editFormPopUp}
                                onClose={handleEditFormPopUpClose}
                                type={"news"}
                                editnewsdata={editNewsData}
                            />
                        </div>
                    ))
                ) : (
                    <p className="text-center font-lato-regular w-full">No News available.</p>
                )}
            </div>
        </div>
    );
};

export default News;