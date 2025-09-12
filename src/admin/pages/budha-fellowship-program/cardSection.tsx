import PopUpMessage from "admin/PopUpMessage";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { GoPlusCircle } from "react-icons/go";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import CardForm from "./form";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { toast } from "react-toastify";
import { Icon } from "organisms/iconCommonent";

interface dataProps {
  cover: any;
  fullName: string;
  role: string;
  linkedinLink: string;
  designation?: string;
  description?:string;
  address?: string
  _id: string;
}

export default function CardSection({
  role,
  section,
  sectionTitle,
  note,
}: {
  role: string;
  section: string;
  sectionTitle: string;
  note?: string;
}) {
  const [data, setData] = useState<dataProps[]>();
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [brochuresId, setBrochresId] = useState<string>("");
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const [editData, setEditData] = useState<dataProps>();
  const [type, setType] = useState<string>("edit");

  const fetchNewDetails = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_LOCAL_URL}/api/card/show/?role=${role}`
      );
      // console.log(response.data);
      setData(response.data.data);
    } catch (error: any) {
      // console.log(error.message);
    }
  };

  useEffect(() => {
    fetchNewDetails();
  }, []);

  const handleDeleteFromServer = async (id: string) => {
    try {
      const res = await axios.delete(
        `${process.env.REACT_APP_LOCAL_URL}/api/card/delete/${id}`
      );
      // console.log(res.data);
      setData((prevData) => {
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
      // console.log(err.message);
    }
  };
  const handleFormSubmitEdit = async (formData: any) => {
    try {
      await axios.request({
        method: "PATCH",
        url: `${process.env.REACT_APP_LOCAL_URL}/api/card/edit/${formData._id}`,
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // console.log("data", response.data.data);
      // setFormNews(response.data);
      handleClose();
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
    } catch (error: any) {
      // console.log(error.message);
    }
    // console.log("Form Data Submitted:", formData);
  };

  const handleFormSubmitCreate = async (formData: any) => {
    try {
      await axios.request({
        method: "POST",
        url: `${process.env.REACT_APP_LOCAL_URL}/api/card/create`,
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

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
      // console.log("data", response.data.data);
      // setFormNews(response.data);
      handleClose();
    } catch (error: any) {
      // console.log(error.response.data);
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
    // console.log("Form Data Submitted:", formData);
  };

  const handleCardDelete = (id: string) => {
    setIsPopupOpen(true);
    setBrochresId(id);
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
      <div className=" blade-top-padding-lg p-4 pt-10">
        <h2 className="font-lato-regular ">Section - {section}</h2>
        <hr />
        <div className="flex justify-between items-center mt-10 ">
          <div className=" border-b-[1px] w-full pb-4 flex justify-between">
            <div>
              <h3 className="font-lato-regular ">{sectionTitle}</h3>
              <h6 className="font-lato-regular text-red-500">{note}</h6>
            </div>
            <div>
              <button
                className="bg-darkCyan flex items center  text-white font-lato-regular rounded-md px-4 py-2"
                onClick={handleCreateFormData}
              >
                {/* <AddCircleOutlineIcon className="pe-2" /> */}
                <span className="text-2xl pr-2 relative top-0.5">
                 
                  <Icon icon={AiOutlinePlusCircle} />
                </span>{" "}
                <h4 className="text-nowrap"> Add new card</h4>
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-wrap gap-8">
            {data &&
              data.map((obj: dataProps, index: number) => (
                <div
                  className="  w-[21rem] mb-8 mt-8 border-[1px] border-gray-200"
                  key={index}
                >
                  <div className="bg-white   h-full flex flex-col justify-between ">
                    <div>
                      <img
                        className="w-full  h-64 object-cover"
                        src={`${process.env.REACT_APP_LOCAL_URL}/${obj.cover.replace(
                          /\\/g,
                          "/"
                        )}`}
                        // src='/aboutUs/banner.png'
                        alt="Article"
                      // onError={(e) => { e.currentTarget.src = 'fallback-image-url.jpg'; }}
                      />
                    
                   
                    <div className="p-4">
                      <h4 className="  font-lato-bold text-teal mb-2">
                        {obj.fullName}
                      </h4>
                      <h5 className="font-lato-bold text-black/50 mb-4">
                        {obj.designation}
                      </h5>
                       <h5 className="font-lato-bold text-black/50 mb-4">
                        {obj.description}
                      </h5>
                     
                      
                      <h5 className="font-lato-regular text-black mb-4">
                        {obj.address}
                      </h5>
                      <Link
                        to={obj.linkedinLink}
                        target="_blank"
                        className=" font-lato-bold text-black/80 underline flex items-center"
                      >
                        <span className="inline-block text-blue-500 transform relative text-2xl mr-2">
                       
                          <Icon icon={IoLogoLinkedin} />
                        </span>{" "}
                        Linkedin
                      </Link>
                    </div>

                    </div>
                    <div className="p-4 flex  gap-6  mt-auto">
                      <button
                        className="bg-blue-500 font-lato-regular text-white px-4 py-2 rounded"
                        onClick={() => handleEditFormPopUpOpen(obj)}
                      >
                        <span className="inline-block mr-1">
                          <Icon icon={FaRegEdit} />
                        </span>{" "}
                        Edit
                      </button>
                      <button
                        className="text-red-500  font-lato-regular border-[1px] border-red-500 px-4 py-2 rounded"
                        onClick={() => handleCardDelete(obj._id)}
                      >
                        <span className="inline-block relative top-[2px] mr-1">
                         <Icon icon={MdDelete} />
                        </span>{" "}
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            {isPopupOpen && (
              <PopUpMessage
                open={isPopupOpen}
                articleId={brochuresId}
                onClose={handleClose}
                type={"socialcard"}
                onDelete={handleDeleteFromServer}
              />
            )}
            {isFormOpen && type == "edit" && (
              <CardForm
                onSubmit={handleFormSubmitEdit}
                initialData={editData}
                role={role}
                onClose={handleClose}
              ></CardForm>
            )}
            {isFormOpen && type == "create" && (
              <CardForm
                onSubmit={handleFormSubmitCreate}
                role={role}
                onClose={handleClose}
              ></CardForm>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
