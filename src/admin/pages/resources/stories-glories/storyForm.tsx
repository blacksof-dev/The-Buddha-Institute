import React, { useState, useEffect } from "react";

interface TestimonialFormProps {

    onSubmit: (formData: TestimonialFormData) => void;

    onClose: () => void;

    initialData?: TestimonialFormData;
}

interface TestimonialFormData {
    // _id: string;

    video: string;
    thumbnailImg: File | null;
}

const StoryForm: React.FC<TestimonialFormProps> = ({ onSubmit, onClose, initialData }) => {
    const [formData, setFormData] = useState<TestimonialFormData>({
        video:'',
        thumbnailImg: null,
    });

    const [thumbnailPreviewLocal, setThumbnailPreviewLocal] = useState<string | null>(null);
    const [videoPreview, setVideoPreview] = useState<string | null>(null);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    useEffect(() => {
        if (initialData) {
            setFormData({
                ...initialData,
                // cover: null, // File inputs can't be prefilled
                // targetpdf: null,
            });

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
            newErrors.thumbnail = " Image is required";
        }

        if (!formData.video && !videoPreview) {
            newErrors.video = "Video is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChanges = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, files } = e.target as HTMLInputElement;
        if (name === "thumbnail" && files) {
            setFormData({ ...formData, thumbnailImg: files[0] });
            setThumbnailPreviewLocal(URL.createObjectURL(files[0]));
        }

        // else if (name === "video") {
        //     setFormData({ ...formData, video: files[0] });
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
                        <label htmlFor="video" className="form-label block font-lato-bold mt-4">Video</label>
                        {/* {videoPreview && (
                            <div className="text-sm text-gray-600 font-lato-regular">Current video: <a className="text-blue-800 underline" href={videoPreview}>Preview</a></div>
                        )} */}
                        <input
                            type="text"
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
                                alt="thumbnail Preview"
                                className="mt-2  w-24 h-24 object-cover rounded-lg mb-1"
                            />
                        )}
                        <input
                            type="file"
                            id="thumbnailImg"
                            name="thumbnail"
                            accept="image/*"
                            onChange={handleChanges}
                            className=" form-control font-lato-regular text-black/70 w-full px-3 py-2 border rounded-lg placeholder:font-lato-regular"
                        />
                        {errors.thumbnail && <span className="error text-red-500 text-sm">{errors.thumbnail}</span>}
                    </div>
                    {/* <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-8 hover:bg-blue-600 transition-all">
                        {initialData ? "Update" : "Submit"}
                    </button> */}
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

export default StoryForm;
