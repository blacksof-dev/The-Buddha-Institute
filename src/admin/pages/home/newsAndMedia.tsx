import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { AiOutlinePlusCircle } from "react-icons/ai";
import FormPopUp from 'admin/formPopUp';
import News from './news';
import { toast } from 'react-toastify';
import { Icon } from 'organisms/iconCommonent';
const NewsAndMedia = ({ section }: { section: string }) => {

    const [news, setNews] = useState([]);

    const [formOpen, setFormOpen] = useState(false);

    const handleAddClick = () => {
        setFormOpen(true);
    }
    const handleAddClose = () => {
        setFormOpen(false);
    }
    useEffect(() => {
        const fetchNewDetails = async () => {
            try {
                const response = await axios.get(
                    `${process.env.REACT_APP_LOCAL_URL}/api/newsArticle/news`
                );
                // console.log(response.data);
                setNews(response.data.data);

            } catch (error: any) {
                // console.log(error.message);

            }
        };
        fetchNewDetails();
    }, []);

    return (
        <>
            <div className=' blade-top-padding-lg '>
                <div>
                    <h2 className='font-lato-regular '>Section - {section}</h2>
                    <hr />
                    <h3 className='font-lato-regular mt-4'>Updates at a glance</h3>
                    <h6 className='font-lato-regular text-red-500'>Note: Changes made to this section will be reflected across all pages where this section is used.</h6>
                </div>
                <div className="flex justify-between items-center mt-10 ">
                    <div className=' border-b-[1px] w-full pb-4 flex justify-between'>
                        <h3 className='font-lato-regular '>News and media</h3>
                        <div>
                            <button className="bg-darkCyan flex items center  text-white font-lato-regular rounded-md px-4 py-2" onClick={handleAddClick}>
                                {/* <AddCircleOutlineIcon className="pe-2" /> */}
                                <span className='text-2xl pr-2 relative top-0.5'><Icon icon={AiOutlinePlusCircle} /></span> <h4 className='text-nowrap'> Add new card</h4>
                            </button>
                        </div>
                    </div>

                </div>
                <FormPopUp
                    open={formOpen}
                    onClose={handleAddClose}
                    type={"news"}
                // setNews={setNews}
                />
                <div className='mt-4'>
                    {/* <News newsdata={news} setNews={setNews} /> */}
                    <News newsdata={news} setNews={setNews} />
                </div>
            </div>
        </>
    );
}

export default NewsAndMedia;