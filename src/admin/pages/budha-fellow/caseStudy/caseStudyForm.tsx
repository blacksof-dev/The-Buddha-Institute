import React, { useState, useEffect } from "react";
import { CgClose } from "react-icons/cg";
import MarkdownEditor from "./markdown";
import { Icon } from "organisms/iconCommonent";

interface formProps {
    onSubmit: (formData: formData) => void;
    onClose: () => void
    initialData?: formData;
    // role: string
}

interface formData {
    cover: File | string | null;
    logo: File | string | null;
    title: string;
    subtitle: string;
    description: string;
    markdown: string;
}

const CaseStudyFrom: React.FC<formProps> = ({ onSubmit, initialData, onClose }) => {
    const [markDownValue, setMarkDownValue] = useState<string>('');
    const [formData, setFormData] = useState<formData>({
        cover: null,
        logo: null,
        title: '',
        subtitle: '',
        description: '',
        markdown: markDownValue,
    });

    const [coverPreviewLocal, setCoverPreviewLocal] = useState<string | null>(null);
    const [logoPreviewLocal, setLogoPreviewLocal] = useState<string | null>(null);

    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    useEffect(() => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            markdown: markDownValue,
        }));
    }, [markDownValue]);

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
            if (initialData.logo) {
                setLogoPreviewLocal(`${process.env.REACT_APP_LOCAL_URL}/${initialData.logo}`);
            }
            // if (initialData.targetpdf) {
            //     setPdfPreview(`https://the-budhha-institute-backend-4.onrender.com/${initialData.targetpdf}`);
            // }
            if (initialData.markdown) {
                setMarkDownValue(initialData.markdown)
            }
        }
    }, [initialData]);

    const validate = (): boolean => {
        const newErrors: { [key: string]: string } = {};

        if (!formData.cover && !coverPreviewLocal) {
            newErrors.cover = "Cover Image is required";
        }

        if (!formData.logo) {
            newErrors.logo = "Logo is required";
        }
        if (!formData.title) {
            newErrors.title = "Title is required";
        }
        if (!formData.subtitle) {
            newErrors.title = "Subtitle is required";
        }
        if (!formData.description) {
            newErrors.title = "Description is required";
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
        else if (name === "logo" && files) {
            setFormData({ ...formData, logo: files[0] });
            setLogoPreviewLocal(URL.createObjectURL(files[0]));
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
        <div className={`fixed  inset-0 w-[100dvw] overflow-scroll bg-white z-[999]  p-10`}>
            <div className="flex justify-end">
                <button
                    onClick={onClose}
                    className="w-10 h-10 bg-teal text-white rounded-full text-2xl flex justify-center items-center"><Icon icon={CgClose } /></button></div>

            {/* <div className={`fixed bg-black/40 backdrop-blur-lg inset-0 z-50 flex items-center justify-center`}> */}
            <div className="w-container ">
                <form className="" onSubmit={handleSubmit}>
                    <div className="flex flex-col  w-[25rem] ">
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
                            <label htmlFor="subtitle" className="form-label block font-lato-bold mb-2 mt-4">Subtitle</label>
                            <input
                                type="text"
                                id="subtitle"
                                name="subtitle"
                                value={formData.subtitle}
                                onChange={handleChanges}
                                className="form-control font-lato-regular text-black/70 w-full px-3 py-2 border rounded-lg placeholder:font-lato-regular"
                            />
                            {errors.subtitle && <span className="error text-red-500 text-sm">{errors.subtitle}</span>}
                        </div>
                        <div>
                            <label htmlFor="description" className="form-label block font-lato-bold mb-2 mt-4">Description</label>
                            <input
                                type="text"
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleChanges}
                                className="form-control font-lato-regular text-black/70 w-full px-3 py-2 border rounded-lg placeholder:font-lato-regular"
                            />
                            {/* {errors.description && <span className="error text-red-500 text-sm">{errors.description}</span>} */}
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
                                className="form-control font-lato-regular text-black/70 w-full px-3 py-2 border rounded-lg placeholder:font-lato-regular"
                            />
                            {errors.cover && <span className="error text-red-500 text-sm">{errors.cover}</span>}
                        </div>
                        <div>
                            <label htmlFor="logo" className="form-label block font-lato-bold mt-4">Logo</label>
                            {(logoPreviewLocal || logoPreviewLocal) && (
                                <img
                                    src={logoPreviewLocal || logoPreviewLocal}
                                    alt="logo Preview"
                                    className="mt-2  w-24 h-24 object-cover rounded-lg mb-1"
                                />
                            )}
                            <input
                                type="file"
                                id="logo"
                                name="logo"
                                accept="image/*"
                                onChange={handleChanges}
                                className="form-control font-lato-regular text-black/70 w-full px-3 py-2 border rounded-lg placeholder:font-lato-regular"
                            />
                            {errors.logo && <span className="error text-red-500 text-sm">{errors.logo}</span>}
                        </div>

                        {/* <div className="flex justify-center mt-8 space-x-9">
                        <button className=" bg-teal text-white font-lato-regular px-4 py-2 rounded-lg" type="submit">
                            {initialData ? "Update" : "Submit"}
                        </button>
                        <button className="btn btn-primary border-[1px] border-red-500 text-red-500 font-lato-regular  px-4 py-2 rounded-lg hover:bg-red-100 transition-all duration-300" type="button" onClick={onClose}>
                            Cancel
                        </button>
                    </div> */}
                    </div>

                    <div className="mt-10">
                        <MarkdownEditor value={markDownValue} setValue={setMarkDownValue} />
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

export default CaseStudyFrom;
