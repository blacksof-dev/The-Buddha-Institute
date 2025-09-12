import { useAuth } from "admin/hooks/authProvider";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { LuUserRoundPlus } from "react-icons/lu";
import { TbLockPassword } from "react-icons/tb";
import AdminForm from "./adminForm";
import PopUpMessage from "admin/PopUpMessage";
import EditAdminForm from "./editAdminForm";
import ResetPasswordForm from "./resetPassForm";
import { toast } from "react-toastify";
import { Icon } from "organisms/iconCommonent";

interface AdminProps {
  _id: string;
  fullName: string;
  email: string;
  role: string;
  password: string;
}

interface FormProps {
  fullName: string;
  email: string;
  password: string;
  role: string;
}
interface EditFormProps {
  fullName: string;
  email: string;
  role: string;
  _id?: string;
}

export default function AdminDashboard() {
  const [allAdminData, setAllAdminData] = useState<AdminProps[]>([]);
  const [editAdminData, setEditAdminData] = useState<EditFormProps>();
  const [formPopup, setFormPopup] = useState<boolean>(false);
  const [editformPopup, setEditFormPopup] = useState<boolean>(false);
  const [resetPassFormPopup, setResetPassFormPopup] = useState<boolean>(false);

  const [confirmationPopup, setConfirmationPopup] = useState<boolean>(false);
  const { adminId, role, token,logOut } = useAuth();
  const [deleteAdminId, setDeleteAdminId] = useState<string>("");
  // console.log(role)
  // console.log(adminId)


  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_LOCAL_URL}/api/admin/all-admin`
      );
      // setAllAdminData(response.data);
      setAllAdminData(response.data.alladmindata);
    } catch (error) {
      console.error("Error fetching admin data:", error);
    }
  };

  useEffect(() => {

    fetchData();
  }, []);

  const handleAddAdmin = () => {
    setFormPopup(true);
  };
  const handleCloseForm = () => {
    setFormPopup(false);
  };

  const handleSubmit = async (formData: FormProps) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_LOCAL_URL}/api/admin/add-admin`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    
      toast.success("New admin added!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      fetchData();
      handleCloseForm();
      console.log(res);
    } catch (err: any) {
      toast.error("Oops! Something went wrong", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      // console.log(err);
    }
  };

  const handleEditFormPopUpOpen = (obj: EditFormProps) => {
    setEditAdminData(obj);
    setEditFormPopup(true);
  };
  const handleCloseEditForm = () => {
    setEditFormPopup(false);
  };
  const handleEditFormSubmit = async (formData: EditFormProps) => {
    try {
      const res = await axios.patch(
        `${process.env.REACT_APP_LOCAL_URL}/api/admin/edit-admin/${formData._id}`,
        {
          fullName: formData.fullName,
          email: formData.email,
        },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
  
      // Show success message
      toast.success("Updated successfully. Logging out...", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
  
 
      handleCloseEditForm();
      fetchData();
  
   
      setTimeout(() => {
        logOut();
      }, 3000); 
      
    } catch (err) {
      // Handle error
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
  


  const handleDeletePopup = (id: string) => {
    setDeleteAdminId(id);
    setConfirmationPopup(true);
  };
  const handleDeleteAdmin = async (id: string) => {
    // console.log(id);
    try {
      const res = await axios.delete(
        `${process.env.REACT_APP_LOCAL_URL}/api/admin/delete-admin/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setAllAdminData((arr: AdminProps[]) =>
        arr.filter((obj) => obj._id !== id)
      );
      // console.log(res);
    } catch (err) {
      // console.log(err);
    }
  };

  //reset password
  const handleResetPassword = async (formData: { currentPassword: string; newPassword: string; }) => {
    // console.log(formData);
    try {


      const res = await axios.post(`${process.env.REACT_APP_LOCAL_URL}/api/admin/reset-password/${adminId}`, formData)
      toast.success("Password has been reset successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setResetPassFormPopup(false);
    }
    catch (err: any) {
      // console.log(err)
      toast.error("Something went wrong. Try again", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  // const handleResetPasswordSubmit = (data: { password: string }) => {};
  return (
    <section>
      <div className=" blade-top-padding-lg p-4 pt-10">
        <h2 className="font-lato-regular ">Admin</h2>
        <hr />
        <div className="flex justify-between items-center mt-10 ">
          <div className="h-14 w-full bg-gray-300/10 flex items-center justify-between px-12 border-b-[1px] border-b-gray-400/70">
            <div className=" w-[10%]">
              <h5 className="font-lato-bold">Name</h5>
            </div>
            <div className=" w-[25%]">
              <h5 className="font-lato-bold">Email</h5>
            </div>
            <div className=" w-[10%]">
              <h5 className="font-lato-bold">Role</h5>
            </div>
            <div className=" w-[25%]">
              <h5 className="font-lato-bold">Action</h5>
            </div>
          </div>
        </div>
        {allAdminData.map((obj: AdminProps, index: number) => {
          return (
            <div key={index} className="flex justify-between items-center ">
              <div className="h-14 w-full  flex items-center justify-between px-12 border-b-[1px] border-b-gray-400/70">
                <div className=" w-[10%]">
                  <h6 className="flex gap-2 items-center  font-lato-bold">
                    {obj.fullName}{" "}
                    <span
                      className={` ${adminId === obj._id ? "inline-block" : "hidden"
                        } w-2 h-2 rounded-full bg-teal ml-2 animate-ping `}
                    ></span>
                  </h6>
                </div>
                <div className=" w-[25%]">
                  <h6 className="font-lato-regular">{obj.email}</h6>
                </div>
                <div className=" w-[10%]">
                  <h6 className="font-lato-regular text-nowrap">{obj.role}</h6>
                </div>
                <div className=" w-[25%]">
                  <div className="flex gap-6">
                    <button
                      disabled={role !== "super admin"}
                      className={`${role === "super admin"  ? "opacity-100" : "opacity-30"
                        } bg-blue-500 font-lato-regular text-white px-3 py-1 rounded`}
                      onClick={() => handleEditFormPopUpOpen(obj)}
                    >
                      <span className="inline-block mr-1">
                       <Icon icon={FaRegEdit} />
                      </span>{" "}
                      Edit
                    </button>
                    <button
                      disabled={role !== "super admin" || role === obj.role}
                      className={`${role === "super admin" && obj.role !== "super admin"
                        ? "opacity-100"
                        : "opacity-30"
                        } text-red-500  font-lato-regular border-[1px] border-red-500 px-3 py-1 rounded`}
                      onClick={() => {
                        handleDeletePopup(obj._id);
                      }}
                    >
                      <span className="inline-block relative top-[2px] mr-1">
                      <Icon icon={MdDelete} />
                      </span>{" "}
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        <div className="flex gap-4 mt-4 justify-end">
          {role === "super admin" && (
            <button
              onClick={() => handleAddAdmin()}
              className="bg-darkCyan flex items center  text-white font-lato-regular rounded-md px-4 py-2"
            >
              <span className="text-2xl pr-2 relative top-0.5">
                  <Icon icon={LuUserRoundPlus } />
              </span>{" "}
              <h5 className="text-nowrap"> Add new admin</h5>
            </button>
          )}
          <button
            onClick={() => { setResetPassFormPopup(true) }}
            className="text-darkCyan flex items center  border-[1px] border-darkCyan font-lato-regular rounded-md px-4 py-2"
          >
            <span className="text-2xl pr-2 relative top-0.5">
             <Icon icon={TbLockPassword} />
            </span>{" "}
            <h5 className="text-nowrap">Reset password</h5>
          </button>
        </div>
        {formPopup && (
          <AdminForm onSubmit={handleSubmit} onClose={handleCloseForm} />
        )}
        {editformPopup && (
          <EditAdminForm
            onSubmit={handleEditFormSubmit}
            onClose={handleCloseEditForm}
            initialData={editAdminData}
          />
        )}
        {resetPassFormPopup && (
          <ResetPasswordForm
            onSubmit={handleResetPassword}
            onClose={() => {
              setResetPassFormPopup(false);
            }}
          />
        )}
        {confirmationPopup && (
          <PopUpMessage
            articleId={deleteAdminId}
            type="admin"
            onDelete={handleDeleteAdmin}
            onClose={() => {
              setConfirmationPopup(false);
            }}
            open={confirmationPopup}
          />
        )}
      </div>
    </section>
  );
}
