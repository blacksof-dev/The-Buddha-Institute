import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface FormData {
    title: string,
    email: string,
    location: string,
    MapLink: string
    _id?: string
}

interface FormProps {
    data?: FormData;
    isCreateMode: boolean;
    handleisFormOpen: () => void
    fillFormdetails:()=>void
}

const FormComponent: React.FC<FormProps> = ({ data, isCreateMode, handleisFormOpen,fillFormdetails}) => {
    const [formData, setFormData] = useState<FormData>({
        title: '',
        email: '',
        location: '',
        MapLink: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!isCreateMode && data) {
            setFormData(data);
        }
    }, [isCreateMode, data]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

   

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const url = isCreateMode
            ? `${process.env.REACT_APP_LOCAL_URL}/api/address/create`

            : `${process.env.REACT_APP_LOCAL_URL}/api/address/edit/${formData._id}`;

        try {
           

            if (isCreateMode) {
                await axios.post(url, formData);
            } else {
                await axios.patch(url, formData);
            }
            handleisFormOpen()
            fillFormdetails()
           
        } catch (err: any) {
            setError(err.response?.data?.message || 'An error occurred while submitting the form.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className=' inset-0 fixed w-full h-full bg-black/60 backdrop-blur-md flex justify-center items-center '>
            <form className=' border-[1px] border-gray-400 bg-white rounded-lg shadow-lg w-[25rem] p-6' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title" className="form-label block font-lato-bold mb-2">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        className="form-control font-lato-regular text-black/70 w-full px-3 py-2 border rounded-lg placeholder:font-lato-regular"

                    />
                </div>
                <div>
                    <label htmlFor="email" className="form-label block font-lato-bold mb-2">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="form-control font-lato-regular text-black/70 w-full px-3 py-2 border rounded-lg placeholder:font-lato-regular"
                    />
                </div>
                <div>
                    <label htmlFor="location" className="form-label block font-lato-bold mb-2">Location:</label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                        className="form-control font-lato-regular text-black/70 w-full px-3 py-2 border rounded-lg placeholder:font-lato-regular"
                    />
                </div>
                <div>
                    <label htmlFor='MapLink' className="form-label block font-lato-bold mb-2">Map Links:</label>

                    <input
                        type="text"
                        value={formData.MapLink}
                        name="MapLink"
                        id='MapLink'
                        onChange={handleChange}
                        required
                        className="form-control font-lato-regular text-black/70 w-full px-3 py-2 border rounded-lg placeholder:font-lato-regular"
                    />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
             
                <button className=" bg-teal text-white font-lato-regular mt-8 px-4 py-2 rounded-lg" type="submit">

                    {data ? "Update" : "Submit"}
                </button>
                <button className="btn btn-primary border-[1px] border-red-500 mt-8 text-red-500 font-lato-regular mx-6  px-4 py-2 rounded-lg hover:bg-red-100 transition-all duration-300" type="button" onClick={() => handleisFormOpen()}>
                    Cancel
                </button>
            </form>
        </div>
    );
};

export default FormComponent;
