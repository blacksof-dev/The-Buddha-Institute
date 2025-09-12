import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

interface LogoFormData {
    logo: File | null;
    title: string,
}

interface LogoFormProps {
    type: 'institution' | 'Foundations' | string;
    handleFromOpen: () => void;
}

const LogoFormComponent: React.FC<LogoFormProps> = ({ type, handleFromOpen }) => {
    const [coverPreviewlocal, setCoverPreviewLocal] = useState("");
    const [formData, setFormData] = useState<LogoFormData>({ logo: null, title: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    const handleChanges = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, files } = e.target as HTMLInputElement;
        if (name === "logo" && files) {
            // Store the file object in the state
            // console.log(files[0])
            setFormData({ ...formData, logo: files[0] });
            setCoverPreviewLocal(URL.createObjectURL(files[0]));
        }
        else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        // e.preventDefault();
        setLoading(true);
        setError(null);

        const apiUrl = type === 'institution'
            ? `${process.env.REACT_APP_LOCAL_URL}/api/GovtInstitue/create` :
            type === "Foundations" ? `${process.env.REACT_APP_LOCAL_URL}/api/foundation/create` :
                type === "CSO" ? `${process.env.REACT_APP_LOCAL_URL}/api/csonetwork/create` : '';
        try {
            // console.log(formData)
            const response = await axios.post(apiUrl, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            if (response.status !== 200) {
                throw new Error('Oops! somthing went wrong.');
            }
            toast.success('Successfully created', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            handleFromOpen()
        } catch (err: any) {
            // console.log(err)
            setError(err.response.data.error || 'An unknown error occurred');

        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='inset-0 fixed w-full h-full bg-black/60 backdrop-blur-md flex justify-center items-center '>
            <form className=' w-[25rem] bg-white d border-[1px] border-gray-400  rounded-lg shadow-lg p-6 flex flex-col justify-between' onSubmit={handleSubmit}>
                <div>
                    {/* <label htmlFor="url">Logo URL:</label> */}
                    {/* <input
                        className="form-control font-lato-regular text-black/70 w-full px-3 py-2 border rounded-lg placeholder:font-lato-regular"
                        type="fill"
                        id="fillData"
                        name="logo"
                        value={formData.url}
                        onChange={handleChange}
                        required
                    /> */}
                    <label htmlFor="file" className="form-label block   mb-2 font-lato-bold">
                        Upload Logo
                    </label>

                    <input
                        type="file"
                        id="file"
                        name="logo"
                        accept="image/*"
                        onChange={handleChanges}
                        className="form-control w-full px-3 py-2 border rounded-lg "
                    />
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    {(coverPreviewlocal) && (
                        <div className="mb-4">
                            <img
                                src={coverPreviewlocal}
                                // src={`${coverPreview}`}
                                alt="Cover Preview"
                                className="w-24 h-24 object-cover rounded-sm mt-1"
                            />
                        </div>
                    )}
                    {
                        type === "CSO" &&
                        <div className='mt-4'>
                            <label htmlFor='title' className='form-label block   mb-2 font-lato-bold'>Description</label>
                            <textarea id='title' placeholder='title' name='title' onChange={handleChanges} className="form-control w-full px-3 py-2 border rounded-lg min-h-36 max-h-40 outline-darkCyan" />
                        </div>
                    }
                </div>

                <div className='mt-8'>
                    <button className=' bg-teal text-white font-lato-regular px-4 py-2 rounded-lg' type="submit" disabled={loading}>
                        {loading ? 'Submitting...' : 'Submit'}
                    </button>
                    <button className="btn btn-primary ml-6 border-[1px] border-red-500 text-red-500 font-lato-regular  px-4 py-2 rounded-lg hover:bg-red-100 transition-all duration-300" type="button" onClick={handleFromOpen}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LogoFormComponent;
