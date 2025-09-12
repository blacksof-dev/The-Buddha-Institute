import React, { useState, useEffect } from "react";

interface UpdatesFormProps {
    onSubmit: (formData: UpdatesFormData) => void;
    onClose: () => void;
    initialData?: UpdatesFormData;
}

interface UpdatesFormData {
    cover: File | null;
    tag?: string;
    title: string;
    description: string;
    targetpdf: File | null;
}

const NewsletterForm: React.FC<UpdatesFormProps> = ({ onSubmit, onClose, initialData }) => {
    const [formData, setFormData] = useState<UpdatesFormData>({
        cover: null,
        tag: "",
        title: "",
        description: "",
        targetpdf: null,
    });

    const [coverPreviewLocal, setCoverPreviewLocal] = useState<string | null>(null);
    const [pdfPreview, setPdfPreview] = useState<string | null>(null);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    useEffect(() => {
        if (initialData) {
            setFormData({
                ...initialData,
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

        if (!formData.description) {
            newErrors.description = "Description is required";
        } else if (formData.description.length < 3) {
            newErrors.description = "Description should be at least 3 characters long";
        } else if (formData.description.length > 500) {
            newErrors.description = "Description should not exceed 500 characters";
        }

        if (!formData.targetpdf && !pdfPreview) {
            newErrors.targetpdf = "PDF is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChanges = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, files } = e.target as HTMLInputElement;
        if (name === "cover" && files) {
            setFormData({ ...formData, cover: files[0] });
            setCoverPreviewLocal(URL.createObjectURL(files[0]));
        } else if (name === "targetpdf" && files) {
            setFormData({ ...formData, targetpdf: files[0] });
            setPdfPreview(URL.createObjectURL(files[0]));
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
                        <label htmlFor="description" className="form-label block font-lato-bold mt-4">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChanges}
                            className="form-control font-lato-regular text-black/70 w-full px-3 py-2 border rounded-lg placeholder:font-lato-regular"
                            rows={4}
                        ></textarea>
                        {errors.description && <span className="error text-red-500 text-sm">{errors.description}</span>}
                    </div>

                    <div>
                        <label htmlFor="cover" className="form-label block font-lato-bold mt-4">Cover Image</label>
                        {coverPreviewLocal && (
                            <img
                                src={coverPreviewLocal}
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

export default NewsletterForm;
