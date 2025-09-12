import React, { useState, useEffect } from "react";

interface ImpactFormProps {
    onSubmit: (formData: ImpactFormData) => void;
    onClose: () => void;
    initialData?: ImpactFormData;

}

interface ImpactFormData {
    title: string;
    // description: string;
    images: File | null;
    _id?: string;
}

const SubtabFrom: React.FC<ImpactFormProps> = ({ onSubmit, onClose, initialData }) => {
    const [formData, setFormData] = useState<ImpactFormData>({
        title: '',
        images: null,
        _id: ''
    });
    const [coverPreviewLocal, setCoverPreviewLocal] = useState<string | null>(
        null
    );
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    useEffect(() => {
        if (initialData) {
            setFormData({
                ...initialData,
            });
            if (initialData.images) {
                setCoverPreviewLocal(`${process.env.REACT_APP_LOCAL_URL}/${initialData.images}`);

            }
        }

    }, [initialData]);

    const validate = (): boolean => {
        const newErrors: { [key: string]: string } = {};

        if (formData.title === undefined || formData.title === null) {
            newErrors.tabName = "title is required";
        }
        if (!formData.images && !coverPreviewLocal) {
            newErrors.images = "Image is required";
        }

        // if (!formData.description) {
        //     newErrors.description = "Description is required";
        // } else if (formData.description.length < 3) {
        //     newErrors.description = "Description should be at least 3 characters long";
        // } else if (formData.description.length > 200) {
        //     newErrors.description = "Description should not exceed 200 characters";
        // }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, files } = e.target;
        if (name === "images" && files) {
            setFormData({ ...formData, images: files[0] });
            setCoverPreviewLocal(URL.createObjectURL(files[0]));
        }
        else
            setFormData({ ...formData, [name]: value });
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
                        <label htmlFor="title" className="form-label block font-lato-bold mt-4">Title</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChanges}
                            className="form-control font-lato-regular text-black/70 w-full px-3 py-2 border rounded-lg placeholder:font-lato-regular outline-darkCyan"
                        />
                        {errors.title && <span className="error text-red-500 text-sm">{errors.title}</span>}
                    </div>
                    {/* <div>
                        <label htmlFor="description" className="form-label block font-lato-bold mt-4">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChanges}
                            className="form-control font-lato-regular text-black/70 w-full px-3 py-2 border rounded-lg placeholder:font-lato-regular outline-darkCyan"
                            rows={4}
                        ></textarea>
                        {errors.description && <span className="error text-red-500 text-sm">{errors.description}</span>}
                    </div> */}
                    <div className="fle mt-2">
                        <div>
                            <label htmlFor="images" className="form-label block font-lato-bold mt-4">Upload Image</label>
                            <input
                                type="file"
                                id="images"
                                name="images"
                                accept="image/*"
                                onChange={handleChanges}
                                className="form-control h-12 font-lato-regular text-black/70 w-full px-3 py-2 border rounded-lg placeholder:font-lato-regular"
                            />
                            {errors.images && (
                                <span className="error text-red-500 text-sm">
                                    {errors.images}
                                </span>
                            )}
                        </div>
                        {(coverPreviewLocal || coverPreviewLocal) && (
                            <img
                                src={coverPreviewLocal || coverPreviewLocal}
                                alt="Cover Preview"
                                className=" mt-1 w-24 h-24 object-cover rounded-lg "
                            />
                        )}
                    </div>
                    <div className="flex justify-center mt-8 space-x-9">
                        <button className=" bg-teal text-white font-lato-regular px-4 py-2 rounded-lg" type="submit">
                            {initialData ? "Update" : "Submit"}
                        </button>
                        <button className="btn btn-primary border-[1px] border-red-500 text-red-500 font-lato-regular px-4 py-2 rounded-lg hover:bg-red-100 transition-all duration-300" type="button" onClick={onClose}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SubtabFrom;
