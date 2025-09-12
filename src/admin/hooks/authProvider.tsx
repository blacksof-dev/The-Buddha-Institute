import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AuthContext = createContext<any>(null);

const AuthProvider = ({ children }: { children: any }) => {
  const [admin, setAdmin] = useState();
  const [adminId, setAdminId] = useState(localStorage.getItem("adminId") || "");
  const [role, setRole] = useState(localStorage.getItem("adminRole") || "");
  const [token, setToken] = useState(localStorage.getItem("site") || "");
  const navigate = useNavigate();

  const loginAction = async (dataForm: any) => {
    try {
      //   console.log(data);
      const res = await axios.post(
        `${process.env.REACT_APP_LOCAL_URL}/api/admin/login`,
        dataForm
      );
      // console.log(res.data.data.role, 'DATA:😁');
      // console.log(res.data.data)
      if (res.data.data) {
        setAdmin(res.data.data.fullName);
        // console.log(res.data.data._id)
        setAdminId(res.data.data._id);
        localStorage.setItem("adminId", res.data.data._id);
        setRole(res.data.data.role);
        localStorage.setItem("adminRole", res.data.data.role);
        setToken(res.data.data.token);
        localStorage.setItem("site", res.data.data.token);
      
        toast.success("Logged in successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        // console.log(role)
     
       
        setTimeout(()=>{  navigate("/admin/home");},2000)

        // return;
      }
      throw new Error(res.data.message);
    } catch (err: any) {
      toast.error(err.response.data.error, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      console.error(err.response.data.error);
    }
  };

  const logOut = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_LOCAL_URL}/api/admin/logout`
      );
      // console.log(res.data);
      if (res.data.status === "success") {
        localStorage.removeItem("site");
        localStorage.removeItem("adminRole");
        localStorage.removeItem("adminId");
        setAdmin(undefined);
        setToken("");
        setAdminId("");

        // console.log("🙄");
        toast.success("Logged out!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate("/signin");
      }
    } catch (err: any) {
      // console.log(err);
      toast.error(err.response.data.error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  useEffect(() => {
    // loginAction({
    //     email: "example@gmail.com",
    //     password: "Example@123"
    // });
  }, []);
  return (
    <AuthContext.Provider
      value={{ token, admin, loginAction, logOut, adminId, role }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

export const useAuth = () => {
  return useContext(AuthContext);
};
