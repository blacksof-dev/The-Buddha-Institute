import React, { useEffect, useState } from "react";
import axios from "axios";
import dummyImg from '../assets/dummy-profile.png';
import { Link } from "react-router-dom";
import { getToken } from "./authenticationFunction";

const Navnew = () => {

    const [userName, setUserName] = useState<string | null>(null);

    const token = getToken();

    useEffect(() => {
        const fetchUser = async () => {
            if (!token) return;

            try {
                const res = await axios.get(
                    "https://application.thebuddhainstitute.org/api/get_user_info",
                    {
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${token}`
                        }
                    }
                );

                if (res.data.status) {
                    setUserName(res.data.data.name);
                }
            } catch (err) {
                console.error("Error fetching user info:", err);
            }
        };

        fetchUser();
    }, [token]);

 

    return (
        <div>
            {token && userName && (
                <div className="relative">
                    <span>{userName}</span>
                </div>
            )}
        </div>



    );
};

export default Navnew;
