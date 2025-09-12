import PopUpMessage from "admin/PopUpMessage";
import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import PlayIcon from "../../../assets/image/PlayIcon.svg";
import TestimonialForm from "./testimonialVideoForm";
import { toast } from "react-toastify";
import { Icon } from "organisms/iconCommonent";

interface TestimonialProps {
  _id: string;
  video: string;
  thumbnailImg: File | null;
  title: string;
}
interface EditTestimonialProps {
  video: string;
  thumbnailImg: File | null;
  title: string;
  _id?: string;
}
export default function TestimonialVideo({
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
  useEffect(() => {
    const fetchNewDetails = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_LOCAL_URL}/api/testimonialVideo/show`
        );
        // console.log(response);
        setData(response.data.message);
      } catch (error: any) {
        console.error(error.message);
      }
    };
    fetchNewDetails();
  }, []);

  const handleDeleteFromServer = async (id: string) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_LOCAL_URL}/api/testimonialVideo/delete/${id}`
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
    // console.log(formData);
    try {
      await axios.put(
        `${process.env.REACT_APP_LOCAL_URL}/api/testimonialVideo/edit/${formData._id}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      handleClose();
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
      toast.error(error.response.data.message, {
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
        `${process.env.REACT_APP_LOCAL_URL}/api/testimonialVideo/create`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      handleClose();
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
      console.error(error);
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
        Section - {section} (Video Testimonial)
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
      <div className="flex flex-wrap gap-8 mt-8 ">
        {data &&
          data.map((testimonial) => (
            <div
              className="w-[21rem] mb-8 border-[1px] border-gray-200"
              key={testimonial._id}
            >
              <div className="bg-white ">
                <div className=" h-[19rem] flex flex-col gap-4">
                  <div className=" flex  relative">
                    <div className=" w-full  h-[15rem]  overflow-hidden ">
                      <img
                        className=""
                        src={`${process.env.REACT_APP_LOCAL_URL}/${testimonial.thumbnailImg}`}
                        alt="Thumbnail"
                      />
                    </div>

                    <div className="">
                      {testimonial.video && testimonial.video !== "" && (
                        <Link target="_blank" to={`${testimonial.video}`}>
                          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                            <img
                              src={PlayIcon}
                              alt="Play Icon"
                              className="w-20 h-20"
                            />
                          </div>
                        </Link>
                      )}
                    </div>
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
          <TestimonialForm
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
