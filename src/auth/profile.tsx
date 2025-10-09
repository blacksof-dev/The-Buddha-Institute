import React, { useEffect, useState } from "react";
import axios from "axios";
import { getToken } from "./authenticationFunction";
import Loading from "./loading";

const Navnew = () => {
  const [userName, setUserName] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState<string | null>(getToken());

  useEffect(() => {
    // Load cached username if available
    const cachedName = localStorage.getItem("userName");
    if (cachedName) {
      setUserName(cachedName);
      setLoading(false);
    }

    // Check for token changes (new login or logout)
    const tokenWatcher = setInterval(() => {
      const currentToken = getToken();
      if (currentToken !== token) {
        setToken(currentToken);
        setUserName(null); // clear old username, will refetch below
      }
    }, 500);

    return () => clearInterval(tokenWatcher);
  }, [token]);

  useEffect(() => {
    const fetchUser = async () => {
      if (!token || userName) {
        setLoading(false);
        return;
      }

      try {
        const res = await axios.get(
          "https://application.thebuddhainstitute.org/api/get_user_info",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (res.data.status && res.data.data?.name) {
          const name = res.data.data.name;
          setUserName(name);
          localStorage.setItem("userName", name);
        }
      } catch (err) {
        console.error("Error fetching user info:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [token, userName]);

  if (loading) {
    return (
      <div>
        <p>loading</p>
      </div>
    );
  }

  return (
    <div>
      {token && userName ? (
        <span className="font-semibold text-xs md:text-sm  text-black">
          {userName}
        </span>
      ) : (
        <span>Guest</span>
      )}
    </div>
  );
};

export default Navnew;
