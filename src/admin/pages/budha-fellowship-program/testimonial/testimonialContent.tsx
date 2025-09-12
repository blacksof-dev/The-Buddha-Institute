import PopUpMessage from "admin/PopUpMessage";
import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

import { toast } from "react-toastify";
import TestimonialContentForm from "./testimonialContentForm";
import { Icon } from "organisms/iconCommonent";

interface TestimonialProps {
  _id: string;
  title: string;
  logo: File | null;
  desc: string;
}
interface EditTestimonialProps {
  title: string;
  logo: File | null;
  desc: string;
}
export default function TestimonialContent({
  section,
  title,
}: {
  section: string;
  title: string;
}) {
  const [data, setData] = useState<TestimonialProps[]>();
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<string>("");
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const [editData, setEditData] = useState<TestimonialProps>();
  const [formType, setFormType] = useState<string>("edit");
  const [editId, setEditId] = useState<string>("");

  const fetchNewDetails = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_LOCAL_URL}/api/testimonialContent/show`
      );
      setData(response.data.message);
      // console.log(response.data.message)
    } catch (error: any) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    fetchNewDetails();
  }, []);

  const handleDeleteFromServer = async (id: string) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_LOCAL_URL}/api/testimonialContent/delete/${id}`
      );
      setData((prevData) => prevData?.filter((obj) => obj._id !== id));
      // alert("successfully deleted...")
      toast.success("Deleted successfully!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error: any) {
      console.error(error.message);
      toast.error(error.response.data.error, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const handleFormSubmitEdit = async (formData: EditTestimonialProps) => {
    try {
      // console.log(formData)
      await axios.put(
        `${process.env.REACT_APP_LOCAL_URL}/api/testimonialContent/edit/${editId}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      handleClose();
      fetchNewDetails();
      toast.success("Edited successfully!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error: any) {
      console.error(error.message);
      toast.error("Something went wrong! Try again", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const handleFormSubmitCreate = async (formData: EditTestimonialProps) => {
    // console.log(formData);
    try {
      await axios.post(
        `${process.env.REACT_APP_LOCAL_URL}/api/testimonialContent/create`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      handleClose();
      fetchNewDetails();
      toast.success("Created successfully!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error: any) {
      console.error(error.message);
      toast.error("Oops! Try again.", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const handleCardDelete = (id: string) => {
    setIsPopupOpen(true);
    setSelectedId(id);
  };

  const handleClose = () => {
    setIsPopupOpen(false);
    setIsFormOpen(false);
  };

  const handleEditFormPopUpOpen = (data: TestimonialProps) => {
    setEditId(data._id);
    setIsFormOpen(true);
    setEditData(data);
    setFormType("edit");
  };

  const handleCreateFormData = () => {
    setEditData(undefined);
    setIsFormOpen(true);
    setFormType("create");
  };

  return (
    <div className="blade-top-padding-lg p-4 pt-10">
      <h2 className="font-lato-regular ">
        Section - {section} (Content Testimonial)
      </h2>
      <h6 className="font-lato-regular text-red-500">
        Note: Changes made to this section will be reflected across all pages
        where this section is used.
      </h6>

      <hr />
      <div className="flex justify-between items-center mt-10">
        <div className="border-b-[1px] w-full pb-4 flex justify-between">
          <h3 className="font-lato-regular">{title}</h3>
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
      <div className="flex flex-wrap gap-8 mt-8">
        {data &&
          data.map((testimonial) => (
            <div
              className="w-[28rem] mb-8 border-[1px] border-gray-200"
              key={testimonial._id}
            >
              <div className="bg-white  h-full flex flex-col justify-between">
                <div>
                  <div className=" flex gap-1 bg-slate-200 justify-center items-center pt-8">
                    <div className="w-[10rem] h-[10rem]  overflow-hidden   border-gray-300">
                      <img
                        className="flex   w-full "
                        src={`${process.env.REACT_APP_LOCAL_URL}/${testimonial.logo}`}
                        alt="logo"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-lato-regular text-teal py-6 px-4">
                      {testimonial.title}
                    </h4>
                    <p className="font-lato-regular  px-4 ">
                      {testimonial.desc}
                    </p>
                  </div>
                </div>
                <div className="p-4 flex  gap-6">
                  <button
                    className="bg-blue-500 font-lato-regular text-white px-4 py-2 rounded"
                    onClick={() => handleEditFormPopUpOpen(testimonial)}
                  >
                     <span className="inline-block mr-1">
                    <Icon icon={FaRegEdit} />
                    </span>{" "}
                    Edit
                  </button>
                  <button
                    className="text-red-500  font-lato-regular border-[1px] border-red-500 px-4 py-2 rounded"
                    onClick={() => handleCardDelete(testimonial._id)}
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
            articleId={selectedId}
            onClose={handleClose}
            type="delete"
            onDelete={handleDeleteFromServer}
          />
        )}

        {isFormOpen && (
          <TestimonialContentForm
            onSubmit={
              formType === "edit"
                ? handleFormSubmitEdit
                : handleFormSubmitCreate
            }
            initialData={editData}
            role="bfp"
            onClose={handleClose}
          />
        )}
      </div>
    </div>
  );
}
