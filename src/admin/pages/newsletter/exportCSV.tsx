import { Icon } from "organisms/iconCommonent";
import React, { useState } from "react";
import { BsDatabaseDown } from "react-icons/bs";
import { GoDownload } from "react-icons/go";
import { LiaSpinnerSolid } from "react-icons/lia";
import { toast } from "react-toastify";

interface User {
    _id: string;
    name: string;
    email: string;
    source: string;
    createdAt: string;
}

const ExportCSV: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<User[] | null>(null);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${process.env.REACT_APP_LOCAL_URL}/api/newsletter/show`);
            const result = await response.json();

            if (result.status === "success" && Array.isArray(result.message)) {
                setData(result.message);
            } else {
                console.error("Error fetching data");
            }
        } catch (error) {
            console.error("Failed to fetch data:", error);
        } finally {
            setLoading(false);
        }
    };

    const exportToCSV = () => {

        if (!data) return;
        else if (data.length <= 0) {
            toast.error('No newsletter emails found to export.', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        }
        const headers = Object.keys(data[0]).join(",") + "\n";
        const rows = data
            .map(user => Object.values(user).map(val => `"${val}"`).join(","))
            .join("\n");

        const csvString = headers + rows;
        const blob = new Blob([csvString], { type: "text/csv" });
        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = "user_data.csv";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <div className="w-fit ">
            {loading ? (
                <button
                    disabled
                    className="px-12 py-3 flex gap-4 justify-center items-center m-auto bg-teal text-white rounded-md shadow-md border-[1px] border-transparent hover:bg-transparent hover:border-pear hover:text-black transition-all duration-300 font-lato-regular"
                >
                    <span className="spin text-2xl"><Icon icon={LiaSpinnerSolid}  /></span>
                </button>
            ) : !data ? (
                <button
                    onClick={fetchData}
                    className="px-12 py-3 flex gap-4 justify-center items-center m-auto bg-teal text-white rounded-md shadow-md border-[1px] border-transparent hover:bg-transparent hover:border-pear hover:text-black transition-all duration-300 font-lato-regular"
                >
                    <span className="inline-block text-xl"><Icon icon={BsDatabaseDown}  /></span>
                    Fetch All Email
                </button>
            ) : (
                <button
                    onClick={exportToCSV}
                    className="px-12 py-3 flex gap-4 justify-center items-center m-auto bg-teal text-white rounded-md shadow-md border-[1px] border-transparent hover:bg-transparent hover:border-pear hover:text-black transition-all duration-300 font-lato-regular"
                >
                    <span className="inline-block text-xl"> <Icon icon={GoDownload }  /></span> Download CSV
                </button>
            )}
            {/* <span className="font-lato-regular text-sm leading-none w-[14rem] inline-block mt-2">
                NOTE: Click the button below to fetch all user data and export it as a CSV file.
            </span> */}
        </div>
    );
};

export default ExportCSV;
