import React, { useState, useEffect } from "react";

interface CaseStudyFormProps {
    onSubmit: (formData: CaseStudyFormData) => void;
    onClose: () => void;
    initialData?: CaseStudyFormData;
}

interface CaseStudyFormData {
    cover: File | null | string;
    logo: File | null | string;
    title: string;
    subtitle: string;
    description: string;
    casestudyPdf?: File | null | string;
    casestudyLink?: string;
}

const CaseStudyForm: React.FC<CaseStudyFormProps> = ({ onSubmit, onClose, initialData }) => {
    const [formData, setFormData] = useState<CaseStudyFormData>({
        cover: null,
        logo: null,
        title: "",
        subtitle: "",
        description: "",
        casestudyPdf: null,
        casestudyLink: "",
    });

    const [coverPreview, setCoverPreview] = useState<string | null>(null);
    const [logoPreview, setLogoPreview] = useState<string | null>(null);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    useEffect(() => {
        if (initialData) {
            setFormData({
                ...initialData,
            });
            if (initialData.cover) {
                setCoverPreview(`${process.env.REACT_APP_LOCAL_URL}/${initialData.cover}`);
            }
            if (initialData.logo) {
                setLogoPreview(`${process.env.REACT_APP_LOCAL_URL}/${initialData.logo}`);
            }
        }
    }, [initialData]);

    const validate = (): boolean => {
        const newErrors: { [key: string]: string } = {};

        if (!formData.cover && !coverPreview) {
            newErrors.cover = "Cover Image is required";
        }

        if (!formData.logo && !logoPreview) {
            newErrors.logo = "Logo is required";
        }

        if (!formData.title) {
            newErrors.title = "Title is required";
        } else if (formData.title.length < 1 || formData.title.length > 100) {
            newErrors.title = "Title must be between 1 and 100 characters";
        }

        if (!formData.subtitle) {
            newErrors.subtitle = "Subtitle is required";
        } else if (formData.subtitle.length < 1 || formData.subtitle.length > 200) {
            newErrors.subtitle = "Subtitle must be between 1 and 200 characters";
        }

        if (!formData.description) {
            newErrors.description = "Description is required";
        } else if (formData.description.length < 1 || formData.description.length > 500) {
            newErrors.description = "Description must be between 1 and 500 characters";
        }

        if (!formData.casestudyPdf) {
            newErrors.casestudyPdf = "Case Study PDF is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChanges = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, files } = e.target as HTMLInputElement;
        if (files) {
            if (name === "cover") {
                setFormData({ ...formData, cover: files[0] });
                setCoverPreview(URL.createObjectURL(files[0]));
            } else if (name === "logo") {
                setFormData({ ...formData, logo: files[0] });
                setLogoPreview(URL.createObjectURL(files[0]));
            } else if (name === "casestudyPdf") {
                setFormData({ ...formData, casestudyPdf: files[0] });
            }
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
        <div className="fixed bg-black/40 backdrop-blur-lg inset-0 z-50 flex items-center justify-center">
            <div className="border-[1px] border-gray-400 bg-white rounded-lg shadow-lg w-[30rem]">
                <form className="flex flex-col p-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="title" className="form-label block font-lato-bold mt-4">Title</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChanges}
                            className="form-control font-lato-regular text-black/70 w-full px-3 py-2 border rounded-lg"
                        />
                        {errors.title && <span className="error text-red-500 text-sm">{errors.title}</span>}
                    </div>

                    <div>
                        <label htmlFor="subtitle" className="form-label block font-lato-bold mt-4">Subtitle</label>
                        <input
                            type="text"
                            id="subtitle"
                            name="subtitle"
                            value={formData.subtitle}
                            onChange={handleChanges}
                            className="form-control font-lato-regular text-black/70 w-full px-3 py-2 border rounded-lg"
                        />
                        {errors.subtitle && <span className="error text-red-500 text-sm">{errors.subtitle}</span>}
                    </div>
                    <div>
                        <label htmlFor="casestudyLink" className="form-label block font-lato-bold mt-4">Case Study Link (optional)</label>
                        <input
                            type="url"
                            id="casestudyLink"
                            name="casestudyLink"
                            value={formData.casestudyLink}
                            onChange={handleChanges}
                            className="form-control font-lato-regular text-black/70 w-full px-3 py-2 border rounded-lg"
                        />
                    </div>
                    <div>
                        <label htmlFor="description" className="form-label block font-lato-bold mt-4">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChanges}
                            className="form-control font-lato-regular text-black/70 w-full px-3 py-2 border rounded-lg"
                        ></textarea>
                        {errors.description && <span className="error text-red-500 text-sm">{errors.description}</span>}
                    </div>

                    <div className="">
                        <label htmlFor="cover" className="form-label block font-lato-bold mt-4">Cover Image</label>
                        <div className="flex">

                            <input
                                type="file"
                                id="cover"
                                name="cover"
                                accept="image/*"
                                onChange={handleChanges}
                                className="form-control font-lato-regular h-[3rem] w-full text-black/70  px-3 py-2 border rounded-lg"
                            />
                            {coverPreview && (
                                <img
                                    src={coverPreview}
                                    alt="Cover Preview"
                                    className="ml-2 w-24 h-24 object-cover rounded-lg mb-1"
                                />
                            )}
                        </div>

                        {errors.cover && <span className="error text-red-500 text-sm">{errors.cover}</span>}

                    </div>

                    <div>
                        <label htmlFor="logo" className="form-label block font-lato-bold mt-4">Logo</label>
                        <div className="flex">



                            <input
                                type="file"
                                id="logo"
                                name="logo"
                                accept="image/*"
                                onChange={handleChanges}
                                className="form-control font-lato-regular h-[3rem] text-black/70 w-full px-3 py-2 border rounded-lg"
                            />
                            {logoPreview && (
                                <img
                                    src={logoPreview}
                                    alt="Logo Preview"
                                    className="mt-2 w-24 h-24 object-cover rounded-lg mb-1"
                                />
                            )}
                        </div>
                        {errors.logo && <span className="error text-red-500 text-sm">{errors.logo}</span>}
                    </div>

                    <div>
                        <label htmlFor="casestudyPdf" className="form-label block font-lato-bold mt-4">Case Study PDF</label>
                        <input
                            type="file"
                            id="casestudyPdf"
                            name="casestudyPdf"
                            accept="application/pdf"
                            onChange={handleChanges}
                            className="form-control font-lato-regular text-black/70 w-full px-3 py-2 border rounded-lg"
                        />
                        {errors.casestudyPdf && <span className="error text-red-500 text-sm">{errors.casestudyPdf}</span>}
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

export default CaseStudyForm;
