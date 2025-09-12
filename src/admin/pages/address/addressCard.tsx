import PopUpMessage from "admin/PopUpMessage";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import FormComponent from "./formPopup";
import { Icon } from "organisms/iconCommonent";

interface addressProps {
  title: string;
  email: string;
  location: string;
  MapLink: string;
  _id: string;
}

interface addressCardprops {
  isCreateFormOpen: boolean;
  handleCreateFormOpen: () => void;
}

export default function AddressCard({
  isCreateFormOpen,
  handleCreateFormOpen,
}: addressCardprops) {
  const [selectedAddressId, setSelectedAddressId] = useState<string | null>(
    null
  );
  const [addressData, setAddressData] = useState<addressProps[]>([]);
  const [isPopOpen, setPopOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editData, setEditData] = useState<addressProps>();

  const fetchContactDetails = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_LOCAL_URL}/api/address/show`
      );
      setAddressData(response.data.data);
    
    } catch (error: any) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    fetchContactDetails();
  }, []);
 

  const deleteAddressPopup = (id: string) => {
    setSelectedAddressId(id);
    setPopOpen(true);
  };
  const handleDeleteAddress = async (id: string) => {
    setAddressData((address = []) => address.filter((obj) => obj._id !== id));
  };

  const handleAddressPopUpClose = () => {
    setPopOpen(false);
    setSelectedAddressId(null);
  };

  const handleEditFormPopUpOpen = (address: addressProps) => {
    setEditData(address);
    setIsFormOpen(true);
  };
  const handleisFormOpen = () => {
    setIsFormOpen((val) => !val);
  };
  return (
    <div className="flex flex-wrap gap-8">
      {addressData &&
        addressData.map((add: addressProps) => (
          <div className="w-[23rem] border-[1px] p-2 mt-10 rounded-lg  flex flex-col justify-between">
            <div className="p-4">
              <h5 className="font-lato-regular text-black/70 py-2">
                <span className="text-black">Title: </span>
                {add.title}
              </h5>
              <h5 className="font-lato-regular text-black/70 py-2">
                <span className="text-black">Email: </span>
                {add.email}
              </h5>
              <h5 className="font-lato-regular text-black/70 py-2">
                <span className="text-black">Address: </span>
                {add.location}
              </h5>
              <h5 className="font-lato-regular text-black/70 py-2">
                <span className="text-black">Google Map URL: </span>
                <a
                  className="text-blue-700 underline"
                  target="_blank"
                  href={add.MapLink}
                >
                  link
                </a>
              </h5>
            </div>

            <div className="py-8 px-3">
              <button
                className="bg-blue-500 font-lato-regular text-white  px-4 py-2 rounded"
                onClick={() => handleEditFormPopUpOpen(add)}
              >
                <span className="inline-block mr-1">
                <Icon icon={FaRegEdit} />
                </span>{" "}
                Edit
              </button>
              <button
                className="text-red-500  font-lato-regular border-[1px] border-red-500 mx-6 px-4 py-2 rounded"
                onClick={() => deleteAddressPopup(add._id)}
              >
                <span className="inline-block relative top-[2px] mr-1">
                 <Icon icon={MdDelete} />
                </span>{" "}
                Delete
              </button>
            </div>
          </div>
        ))}
      {isPopOpen && (
        <PopUpMessage
          open={isPopOpen}
          onClose={handleAddressPopUpClose}
          articleId={selectedAddressId}
          type={"address"}
          onDelete={handleDeleteAddress}
        />
      )}
      {isFormOpen && (
        <FormComponent
          isCreateMode={false}
          data={editData} // Pass existing data if editing
          handleisFormOpen={handleisFormOpen}
          fillFormdetails={fetchContactDetails}
        />
      )}
      {isCreateFormOpen && (
        <FormComponent
          isCreateMode={true}
          handleisFormOpen={handleCreateFormOpen}
          fillFormdetails={fetchContactDetails}
        />
      )}
    </div>
  );
}
