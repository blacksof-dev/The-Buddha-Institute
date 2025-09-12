import React, { useState, useEffect } from "react";

interface TestimonialFormProps {

    onSubmit: (formData: TestimonialFormData) => void;

    onClose: () => void;
    role: string
    initialData?: TestimonialFormData;
}

interface TestimonialFormData {
    // _id: string;
    video: string;
    thumbnailImg: File | null;
    title: string;
}

const TestimonialForm: React.FC<TestimonialFormProps> = ({ onSubmit, onClose, initialData, role }) => {
    const [formData, setFormData] = useState<TestimonialFormData>({
        video: '',
        thumbnailImg: null,
        title: "",

        // _id: ""
    });

    const [thumbnailPreviewLocal, setThumbnailPreviewLocal] = useState<string | null>(null);
    const [logoPreviewLocal, setLogoPreviewLocal] = useState<string | null>(null);
    const [videoPreview, setVideoPreview] = useState<string | null>(null);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    useEffect(() => {
        if (initialData) {
            setFormData({
                ...initialData,
                // cover: null, // File inputs can't be prefilled
                // targetpdf: null,
            });
            // if (initialData.logo) {
            //     setLogoPreviewLocal(`${process.env.REACT_APP_LOCAL_URL}/${initialData.logo}`);
            // }
            if (initialData.thumbnailImg) {
                setThumbnailPreviewLocal(`${process.env.REACT_APP_LOCAL_URL}/${initialData.thumbnailImg}`);
            }
            if (initialData.video) {
                setVideoPreview(`${process.env.REACT_APP_LOCAL_URL}/${initialData.video}`);
            }
        }
    }, [initialData]);

    const validate = (): boolean => {
        const newErrors: { [key: string]: string } = {};

        if (!formData.thumbnailImg && !thumbnailPreviewLocal) {
            newErrors.thumbnailImg = " Image is required";
        }
        // if (!formData.logo && !logoPreviewLocal) {
        //     newErrors.logo = "Logo is required";
        // }
        // if (!formData.video && !videoPreview) {
        //     newErrors.video = "Video is required";
        // }
        // if (!formData.VideoLink) {
        //     newErrors.VideoLink = "Video link is required";
        // }

        if (!formData.title) {
            newErrors.title = "Title  is required";
        } else if (formData.title.length < 3) {
            newErrors.title = "Title should be at least 3 characters long";
        } else if (formData.title.length > 200) {
            newErrors.title = "Title should not exceed 200 characters";
        }
        // if (!formData.desc) {
        //     newErrors.desc = "description is required";
        // } else if (formData.title.length < 3) {
        //     newErrors.desc = "description should be at least 3 characters long";
        // } else if (formData.title.length > 200) {
        //     newErrors.desc = "description should not exceed 200 characters";
        // }

        // if (!formData.role) {
        //     newErrors.role = "role is required";
        // }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChanges = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, files } = e.target as HTMLInputElement;
        if (name === "thumbnailImg" && files) {
            setFormData({ ...formData, thumbnailImg: files[0] });
            setThumbnailPreviewLocal(URL.createObjectURL(files[0]));
        }
        // else if (name === "logo" && files) {
        //     setFormData({ ...formData, logo: files[0] });
        //     setLogoPreviewLocal(URL.createObjectURL(files[0]));
        // }
        // else if (name === "Video" && files) {
        //     setFormData({ ...formData, Video: files[0] });
        //     setVideoPreview(URL.createObjectURL(files[0]));
        // }
        else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            onSubmit(formData);
        }
    };

    return (
        <div className={`fixed bg-black/40 backdrop-blur-lg inset-0 z-50 flex items-center justify-center`}>
            <div className="border-[1px] border-gray-400 bg-white rounded-lg shadow-lg w-[25rem]">
                <form className="flex flex-col p-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="title" className="form-label block font-lato-bold mt-4">Description</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChanges}
                            className="form-control font-lato-regular text-black/70 w-full px-3 py-2 border rounded-lg placeholder:font-lato-regular"
                        />
                        {errors.title && <span className="error text-red-500 text-sm">{errors.title}</span>}
                    </div>
                  
                    <div>
                        <label htmlFor="video" className="form-label block font-lato-bold mb-2 mt-4">Video Link</label>
                        <input
                            type="link"
                            id="video"
                            name="video"
                            value={formData.video}
                            onChange={handleChanges}
                            className="form-control font-lato-regular text-black/70 w-full px-3 py-2 border rounded-lg placeholder:font-lato-regular"
                        />
                        {errors.video && <span className="error text-red-500 text-sm">{errors.video}</span>}
                    </div>

                    <div>
                        <label htmlFor="thumbnailImg" className="form-label block font-lato-bold mt-4">Thumbnail</label>
                        {(thumbnailPreviewLocal || thumbnailPreviewLocal) && (
                            <img
                                src={thumbnailPreviewLocal || thumbnailPreviewLocal}
                                alt="Cover Preview"
                                className="mt-2  w-24 h-24 object-cover rounded-lg mb-1"
                            />
                        )}
                        <input
                            type="file"
                            id="thumbnailImg"
                            name="thumbnailImg"
                            accept="image/*"
                            onChange={handleChanges}
                            className="form-control font-lato-regular text-black/70 w-full px-3 py-2 border rounded-lg placeholder:font-lato-regular"
                        />
                        {errors.thumbnailImg && <span className="error text-red-500 text-sm">{errors.thumbnailImg}</span>}
                    </div>
                  
                    <div className="flex justify-center mt-8 space-x-9">
                        <button className=" bg-teal text-white font-lato-regular px-4 py-2 rounded-lg" type="submit">

                            {initialData ? "Update" : "Submit"}
                        </button>
                        <button className="btn btn-primary border-[1px] border-red-500 text-red-500 font-lato-regular  px-4 py-2 rounded-lg hover:bg-red-100 transition-all duration-300" type="button" onClick={onClose}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TestimonialForm;
