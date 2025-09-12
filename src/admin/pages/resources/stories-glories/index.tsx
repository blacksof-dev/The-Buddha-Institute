import PopUpMessage from "admin/PopUpMessage";
import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import PlayIcon from "../../../assets/image/PlayIcon.svg";
// import TestimonialForm from "./testimonialForm";
import { toast } from "react-toastify";
import StoryForm from "./storyForm";
import { Icon } from "organisms/iconCommonent";

interface TestimonialProps {
  _id: string;
  video: string;
  thumbnailImg: File | null;
}
interface EditTestimonialProps {
  video: string;
  thumbnailImg: File | null;
}
export default function StoriesGlories() {
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
          `${process.env.REACT_APP_LOCAL_URL}/api/storyglory/show`
        );
        console.log(response.data.data);
        setData(response.data.data);
      } catch (error: any) {
        console.error(error.message);
      }
    };
    fetchNewDetails();
  }, []);

  const handleDeleteFromServer = async (id: string) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_LOCAL_URL}/api/storyglory/delete/${id}`
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

  const handleFormSubmitCreate = async (formData: EditTestimonialProps) => {
    // console.log(formData);
    try {
      await axios.post(
        `${process.env.REACT_APP_LOCAL_URL}/api/storyglory/create`,
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
      console.error(error.message);
      toast.success("Oops! Try again.", {
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
      <h2 className="font-lato-regular ">Section - 01</h2>
      <hr />
      <div className="flex justify-between items-center mt-10">
        <div className="border-b-[1px] w-full pb-4 flex justify-between">
          <h3 className="font-lato-regular">
            From moments to memories, from stories to glories
          </h3>

          <div>
            <button
              className="bg-darkCyan flex items center  text-white font-lato-regular rounded-md px-4 py-2"
              onClick={handleCreateFormData}
            >
              {/* <AddCircleOutlineIcon className="pe-2" /> */}
              <span className="text-2xl pr-2 relative top-0.5">
                <Icon icon={AiOutlinePlusCircle} />
              </span>{" "}
              <h4 className="text-nowrap"> Add new story</h4>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-8 mt-8">
        {data &&
          data.map((story) => (
            <div
              className="w-[21rem] h-[25rem]  mb-8 flex flex-col justify-between border-[2px] border-gray-200"
              key={story._id}
            >
              <div className="bg-white ">
                {/* <div className="mb-2 ">
                                    <video controls>
                                        <source className="w-full" src={`${process.env.REACT_APP_LOCAL_URL}/${story.video}`}></source>
                                    </video>

                                </div> */}

                <div className="flex gap-1 relative">
                  <div className="w-full h-full overflow-hidden border-[1px] border-gray-300">
                    <img
                      className="h-[15rem] object-cover"
                      src={`${process.env.REACT_APP_LOCAL_URL}/${story.thumbnailImg}`}
                      alt="Thumbnail"
                    />
                  </div>
                  <div>
                    {story.video && story.video !== "" && (
                      <Link target="_blank" to={`${story.video}`}>
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                          <img
                            className="w-14 h-14"
                            src={PlayIcon}
                            alt="Play Icon"
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
                  onClick={() => handleEditFormPopUpOpen(story)}
                >
                  <span className="inline-block mr-1">
                 
                     <Icon icon={FaRegEdit}  />
                  </span>{" "}
                  Edit
                </button>
                <button
                  className="text-red-500  font-lato-regular border-[1px] border-red-500 px-4 py-2 rounded"
                  onClick={() => handleCardDelete(story._id)}
                >
                  <span className="inline-block relative top-[2px] mr-1">
                   
                     <Icon icon={MdDelete}  />
                  </span>{" "}
                  Delete
                </button>
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
          <StoryForm
            onSubmit={handleFormSubmitCreate}
            initialData={editData}
            onClose={handleClose}
          />
        )}
      </div>
    </div>
  );
}
