import React from "react";
import axios from "axios";

interface PopUpMessageProps {
  open: boolean;
  onClose: () => void;
  articleId: string | null;
  type:
    | "userData"
    | "news"
    | "address"
    | "institutions"
    | "brochures"
    | "caseStudy"
    | "updates"
    | "impact"
    | "socialcard"
    | "admin"
    | "delete"
    | "news";
  onDelete: (id: string) => void;
}

const PopUpMessage: React.FC<PopUpMessageProps> = ({
  open,
  onClose,
  articleId,
  type,
  onDelete,
}) => {
  const handleDelete = async () => {
    // console.log("run")
    // console.log(articleId);
    if (articleId) {
      try {
        onDelete(articleId);
        const endpoint =
          type === "userData"
            ? `${process.env.REACT_APP_LOCAL_URL}/api/contact/delete/${articleId}`
            : type === "address"
            ? `${process.env.REACT_APP_LOCAL_URL}/api/address/delete/${articleId}`
            : null;
        if (
          !endpoint &&
          type !== "institutions" &&
          type !== "brochures" &&
          type !== "caseStudy" &&
          type !== "updates" &&
          type !== "impact" &&
          type != "socialcard" &&
          type !== "admin" &&
          type !== "news" &&
          type !== "delete"
        )
          throw new Error("Invalid type provided for deletion");
        if (type !== "userData" && type !== "institutions" && endpoint)
          await axios.delete(endpoint);
        onClose();
      } catch (error) {
        if (error instanceof Error) {
          console.error(`Error deleting ${type}:`, error.message);
          alert("Failed to delete contact from the server. Please try again.");
        }
      }
    }
  };

  return (
    <div
      className={`fixed bg-black/40 backdrop-blur-md inset-0 flex items-center justify-center ${
        open ? "block" : "hidden"
      }`}
    >
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-center py-4">
          <svg
            className="w-10 h-10 text-red-500"
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
          Are you sure you want to delete?
        </p>
        <div className="flex justify-center pb-3">
          <button
            className="bg-red-500 hover:bg-red-700 transition-all duration-300 text-white font-lato-bold text-sm  rounded-lg mx-2 px-4 py-2"
            onClick={handleDelete}
          >
            Confirm
          </button>
          <button
            className="border-[1px] hover:bg-black/20 transition-all duration-300 border-black text-black font-lato-bold text-sm  rounded-lg mx-2 px-4 py-2"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUpMessage;
