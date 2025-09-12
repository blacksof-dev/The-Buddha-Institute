import React, { useState, useEffect } from "react";

interface BrochuresFormProps {
    onSubmit: (formData: BrochuresFormData) => void;
    onClose: () => void
    initialData?: BrochuresFormData;
}

interface BrochuresFormData {
    cover: File | null;
    tag?: string;
    title: string;
    targetpdf: File | null;
}

const BrochuresForm: React.FC<BrochuresFormProps> = ({ onSubmit, onClose, initialData }) => {
    const [formData, setFormData] = useState<BrochuresFormData>({
        cover: null,
        tag: "",
        title: "",
        targetpdf: null,
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
            if (initialData.targetpdf) {
                setPdfPreview(`${process.env.REACT_APP_LOCAL_URL}/${initialData.targetpdf}`);
            }
        }
    }, [initialData]);

    const validate = (): boolean => {
        const newErrors: { [key: string]: string } = {};

        if (!formData.cover && !coverPreviewLocal) {
            newErrors.cover = "Cover Image is required";
        }

        if (!formData.title) {
            newErrors.title = "Title heading is required";
        } else if (formData.title.length < 3) {
            newErrors.title = "Title should be at least 3 characters long";
        } else if (formData.title.length > 200) {
            newErrors.title = "Title should not exceed 200 characters";
        }

        if (!formData.targetpdf && !pdfPreview) {
            newErrors.targetpdf = "PDF is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, files } = e.target;
        if (name === "cover" && files) {
            setFormData({ ...formData, cover: files[0] });
            setCoverPreviewLocal(URL.createObjectURL(files[0]));
        } else if (name === "targetpdf" && files) {
            setFormData({ ...formData, targetpdf: files[0] });
            setPdfPreview(URL.createObjectURL(files[0])); // Clear existing PDF preview
        } else {
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
                        <label htmlFor="title" className="form-label block font-lato-bold mt-4">Title</label>
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
                        <label htmlFor="tag" className="form-label block font-lato-bold mb-2 mt-4">Tag (optional)</label>
                        <input
                            type="text"
                            id="tag"
                            name="tag"
                            value={formData.tag}
                            onChange={handleChanges}
                            className="form-control font-lato-regular text-black/70 w-full px-3 py-2 border rounded-lg placeholder:font-lato-regular"
                        />
                    </div>

                    <div>
                        <label htmlFor="cover" className="form-label block font-lato-bold mt-4">Cover Image</label>
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
                            className="form-control font-lato-regular text-black/70 w-full px-3 py-2 border rounded-lg placeholder:font-lato-regular"
                        />
                        {errors.cover && <span className="error text-red-500 text-sm">{errors.cover}</span>}
                    </div>

                    <div>
                        <label htmlFor="targetpdf" className="form-label block font-lato-bold mt-4">PDF File</label>
                        {pdfPreview && (
                            <div className="text-sm text-gray-600 font-lato-regular">Current PDF: <a className="text-blue-800 underline" href={pdfPreview}>Preview</a></div>
                        )}
                        <input
                            type="file"
                            id="targetpdf"
                            name="targetpdf"
                            accept="application/pdf"
                            onChange={handleChanges}
                            className="form-control font-lato-regular text-black/70 w-full px-3 py-2 border rounded-lg placeholder:font-lato-regular"
                        />
                        {errors.targetpdf && <span className="error text-red-500 text-sm">{errors.targetpdf}</span>}
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

export default BrochuresForm;
