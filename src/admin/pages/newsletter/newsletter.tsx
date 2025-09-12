import PopUpMessage from "admin/PopUpMessage";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { GrFormNext, GrFormPrevious, GrNext, GrPrevious } from "react-icons/gr";
import { ImSpinner2 } from "react-icons/im";
import ExportCSV from "./exportCSV";
import { toast } from "react-toastify";
import { Icon } from "organisms/iconCommonent";
interface Contact {
  _id: string;
  fullName: string;
  contactNumber: string;
  email: string;
  industry: string;
  howDidYouGetToKnowUs: string;
  queryRelatedTo: string;
  query: string;
}
interface userDataPropes {
  _id: string;
  name?: string;
  email: string;
  source: string;
}


const NewsLetter = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [deleteAllPopupOpen, setDeleteAllPopupOpen] = useState<boolean>(false);
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(
    null
  );

  const [userData, setUserData] = useState<userDataPropes[]>([]);

  // const [openEditForm, setOpenEditForm] = useState<boolean>(false);
  // const [editcontactdata, seteditcontactdata] = useState<Contact | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [totalPages, setTotalPages] = useState<number>(1)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [limit, setLimit] = useState<number>(20)



  useEffect(() => {
    const fetchContactDetails = async () => {
      setIsLoading(true)
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_LOCAL_URL}/api/newsletter/show?page=${currentPage}&limit=${limit}`
        );
        setUserData(response.data.message);
        // console.log(response.data)
        setTotalPages(response.data.totalPages);
        setIsLoading(false)
      } catch (error: any) {
        console.error("Error fetching data:", error.message);
      }
    };
    fetchContactDetails();
  }, [currentPage]);



  const handleClickOpen = (articleId: string) => {
    setSelectedArticleId(articleId);
    setOpen(true);
  };

  const handleDeleteUserData = (articleId: string) => {
    handleClickOpen(articleId);
    // setOpen((state) => !state)
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedArticleId(null);
  };

  

  const handleDeleteUserDataServer = async (id: string) => {

    try {

      const res = await axios.delete(
        `${process.env.REACT_APP_LOCAL_URL}/api/newsletter/delete/${id}`
      );
      setUserData((prevContacts) =>
        prevContacts.filter((contact) => contact._id !== id)
      );

    } catch (err: any) {
      // console.log(err.message);
    }
  };

  const handleDeleteAll = async () => {
    try {
      const res = await axios.delete(`${process.env.REACT_APP_LOCAL_URL}/api/newsletter/delete`);
      toast.success("All data has been deleted successfully", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setDeleteAllPopupOpen(false)
    } catch (err: any) {
      toast.error("Something went wrong. Try again", {
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

  return (
    <>
      <div>
        <div>
          <h3 className='font-lato-bold mt-10 mb-3'>Newsletter</h3>
          <hr />
        </div>
        <div className="  overflow-auto w-full ">
          <div className=" flex-col flex   w-full pb-20 overflow-auto">
            <table className="h-14 w-full  gap-8  px-12 overflow-auto ">
              <tr className="bg-gray-300/10  px-12 border-b-[1px] border-b-gray-400/70 ">
                <th className="w-[20rem] py-5">
                  <h6 className="font-lato-bold text-left px-4 ">Name</h6>
                </th>
                <th className="">
                  <h6 className="font-lato-bold text-left px-4 ">Email</h6>
                </th>
                <th className="">
                  <h6 className="font-lato-bold text-left px-4">Source</h6>
                </th>
                <th className="">
                  <h6 className="font-lato-bold  px-4">Delete</h6>
                </th>
              </tr>

              {!isLoading &&
                userData.map((user: userDataPropes, index: number) => (
                  <tr className="border-b-[1px] border-b-gray-400/40 ">
                    <td className="">
                      <h6 className="font-lato-regular text-base py-4 text-left px-4 ">{user.name}</h6>
                    </td>
                    <td className="">
                      <h6 className="font-lato-regular text-base py-4 text-left px-4">{user.email}</h6>
                    </td>
                    <td className="">
                      <h6 className="font-lato-regular text-base py-4 text-left px-4">{user.source}</h6>
                    </td>
                    <td className="text-center">
                      <button
                        // onClick={() => handleDeleteUserData(user._id.toString())}
                        onClick={() => handleDeleteUserData(user._id.toString())}
                        className="text-red-500  text-2xl  font-lato-regula "
                      >
                        <span className="inline-block relative top-[2px] mr-1">
                          <Icon icon={MdDelete}  />
                       
                        </span>{" "}
                        {/* Delete */}
                      </button>
                    </td>
                  </tr>


                ))
              }

            </table>
            {
              isLoading && <div className="w-full flex justify-center  text-4xl text-teal  my-20"> <span className="spin"> <Icon icon={ImSpinner2}  /></span> </div>
            }
          </div>


          {open && (
            <PopUpMessage
              open={open}
              onClose={handleClose}
              articleId={selectedArticleId}
              onDelete={handleDeleteUserDataServer}
              type="userData"
            />
          )}

        </div>
        <div className="flex  justify-center items-center w-full mt-10">
          <button
            disabled={currentPage <= 1}
            onClick={() => setCurrentPage(page => page - 1)}
            className=" flex justify-center"><span className={`${currentPage <= 1 ? "opacity-40" : ""} bg-teal/20 w-8 h-8 rounded-full text-xl flex items-center -z-10 justify-center`}>
              <Icon icon={GrPrevious}  />
         
            </span>
          </button>
          <div className="flex gap-2 px-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <span key={i} onClick={() => setCurrentPage(i + 1)} className={`${currentPage === i + 1 ? '' : 'opacity-40'} font-lato-regular inline-block cursor-pointer`}>{i + 1}</span>
            ))}
          </div>
          <button
            disabled={currentPage >= totalPages}
            onClick={() => setCurrentPage(page => page + 1)}
            className=" flex justify-center"><span className={`${currentPage >= totalPages ? "opacity-40" : ""} bg-teal/20 w-8 h-8 rounded-full text-xl flex items-center -z-10 justify-center`}>
            
              <Icon icon={GrNext}  />
            </span>
          </button>

        </div>
        <div className=" w-full mt-10 mb-5 flex gap-12 justify-center">
         
          <Icon icon={ExportCSV}  />
          <button
            className="text-red-500 font-lato-regular border-[1px] border-red-500  py-2 rounded px-12 shadow-lg"
            onClick={() => setDeleteAllPopupOpen(true)}  // Renamed to handleImpactDelete
          >
            
            <Icon icon={MdDelete }  className="inline-block mr-1" />Delete All Data
          </button>
        </div>
      </div>

      <div
        className={` top-0 bg-black/40 backdrop-blur-md inset-0 flex items-center justify-center  z-[999] ${deleteAllPopupOpen ? 'fixed' : 'hidden'} `}
      >
        <div className="bg-white  rounded-lg shadow-lg p-6">
          <div className="flex justify-center py-4">
            <svg
              className="w-10  h-10 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <p className="font-lato-regular text-center p-3">
            Are you sure you want to delete All the data?
          </p>
          <div className="flex justify-center my-5">
            <button
              className="bg-red-500 hover:bg-red-700 transition-all duration-300 text-white font-lato-bold text-sm  rounded-lg mx-2 px-4 py-2"
              onClick={handleDeleteAll}
            >
              Confirm
            </button>
            <button
              className="border-[1px] hover:bg-black/20 transition-all duration-300 border-black text-black font-lato-bold text-sm  rounded-lg mx-2 px-4 py-2"
              onClick={() => setDeleteAllPopupOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;

