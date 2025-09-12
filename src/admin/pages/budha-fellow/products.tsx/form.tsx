import React, { useState, useEffect } from "react";

interface formProps {
    onSubmit: (formData: formData) => void;
    onClose: () => void
    initialData?: formData;

}

interface formData {
    cover: any;
    title: string;
    city: string;
    createdBy: string;
    websiteLink: string;
    // _id: string
}

const ProductForm: React.FC<formProps> = ({ onSubmit, onClose, initialData }) => {
    const [formData, setFormData] = useState<formData>({
        cover: null,
        title: "",
        city: "",
        createdBy: "",
        websiteLink: ""
    });

    const [coverPreviewLocal, setCoverPreviewLocal] = useState<string | null>(null);
    const [pdfPreview, setPdfPreview] = useState<string | null>(null);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    useEffect(() => {
        if (initialData) {
            setFormData({
                ...initialData,
                // cover: null, // File inputs can't be prefilled
                // targetpdf: null,
            });
            if (initialData.cover) {
                setCoverPreviewLocal(`${process.env.REACT_APP_LOCAL_URL}/${initialData.cover}`);
            }
            // if (initialData.targetpdf) {
            //     setPdfPreview(`https://the-budhha-institute-backend-4.onrender.com/${initialData.targetpdf}`);
            // }
        }
    }, [initialData]);

    const validate = (): boolean => {
        const newErrors: { [key: string]: string } = {};

        if (!formData.cover && !coverPreviewLocal) {
            newErrors.cover = "Cover Image is required";
        }

        if (!formData.title) {
            newErrors.title = "Brand name is required";
        }
        if (!formData.city) {
            newErrors.city = "Address is required";
        }
        if (!formData.createdBy) {
            newErrors.createdBy = "Creater is required";
            // if (newErrors.websiteLink.length < 3) {
            //     newErrors.websiteLink = "Creater must be 3 charect long";
            // }
        }
        if (!formData.websiteLink) {
            newErrors.websiteLink = "Website link is required";

        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, files } = e.target;
        if (name === "cover" && files) {
            setFormData({ ...formData, cover: files[0] });
            setCoverPreviewLocal(URL.createObjectURL(files[0]));
        }
        //  else if (name === "targetpdf" && files) {
        //     setFormData({ ...formData, targetpdf: files[0] });
        //     setPdfPreview(URL.createObjectURL(files[0])); // Clear existing PDF preview
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
                        <label htmlFor="title" className="form-label block font-lato-bold mt-4">Brand Name</label>
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
                    <div>
                        <label htmlFor="city" className="form-label block font-lato-bold mb-2 mt-4">Address</label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleChanges}
                            className="form-control font-lato-regular text-black/70 w-full px-3 py-2 border rounded-lg placeholder:font-lato-regular outline-darkCyan"
                        />
                        {errors.city && <span className="error text-red-500 text-sm">{errors.city}</span>}
                    </div>
                    <div>
                        <label htmlFor="createdBy" className="form-label block font-lato-bold mb-2 mt-4">Created By</label>
                        <input
                            type="text"
                            id="createdBy"
                            name="createdBy"
                            value={formData.createdBy}
                            onChange={handleChanges}
                            className="form-control font-lato-regular text-black/70 w-full px-3 py-2 border rounded-lg placeholder:font-lato-regular outline-darkCyan"
                        />
                        {errors.createdBy && <span className="error text-red-500 text-sm">{errors.createdBy}</span>}
                    </div>
                    <div>
                        <label htmlFor="websiteLink" className="form-label block font-lato-bold mb-2 mt-4">Link</label>
                        <input
                            type="text"
                            id="websiteLink"
                            name="websiteLink"
                            value={formData.websiteLink}
                            onChange={handleChanges}
                            className="form-control font-lato-regular text-black/70 w-full px-3 py-2 border rounded-lg placeholder:font-lato-regular outline-darkCyan"
                        />
                        {errors.websiteLink && <span className="error text-red-500 text-sm">{errors.websiteLink}</span>}
                    </div>
                    <div>
                        <label htmlFor="cover" className="form-label block font-lato-bold mt-4">Image</label>
                        {(coverPreviewLocal || coverPreviewLocal) && (
                            <img
                                src={coverPreviewLocal || coverPreviewLocal}
                                alt="Cover Preview"
                                className="mt-2  w-24 h-24 object-cover rounded-lg mb-1"
                            />
                        )}
                        <input
                            type="file"
                            id="cover"
                            name="cover"
                            accept="image/*"
                            onChange={handleChanges}
                            className="form-control font-lato-regular text-black/70 w-full px-3 py-2 border rounded-lg placeholder:font-lato-regular outline-darkCyan"
                        />
                        {errors.cover && <span className="error text-red-500 text-sm">{errors.cover}</span>}
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

export default ProductForm;
