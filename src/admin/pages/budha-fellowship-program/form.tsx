import React, { useState, useEffect } from "react";

interface formProps {
    onSubmit: (formData: formData) => void;
    onClose: () => void
    initialData?: formData;
    role: string
}

interface formData {
    cover: any,
    fullName: string,
    role: string,
    linkedinLink: string,
    designation?: string,
    fulldesc?:string;
    address?: string,
}

const CardForm: React.FC<formProps> = ({ onSubmit, onClose, initialData, role }) => {
    const [formData, setFormData] = useState<formData>({
        cover: null,
        fullName: "",
        role: role,
        linkedinLink: "",
        designation: "",
        address: '',
        fulldesc:''
       
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
          
        }
    }, [initialData]);

    const validate = (): boolean => {
        const newErrors: { [key: string]: string } = {};

        if (!formData.cover && !coverPreviewLocal) {
            newErrors.cover = "Cover Image is required";
        }

        if (!formData.fullName) {
            newErrors.fullName = "fullname is required";
        }
        // if (!formData.designation) {
        //     newErrors.designation = "designation is required";
        // }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, files } = e.target;
        if (name === "cover" && files) {
            setFormData({ ...formData, cover: files[0] });
            setCoverPreviewLocal(URL.createObjectURL(files[0]));
        }
  
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
                        <label htmlFor="fullname" className="form-label block font-lato-bold mt-4">Fullname</label>
                        <input
                            type="text"
                            id="fullname"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChanges}
                            className="form-control font-lato-regular text-black/70 w-full px-3 py-2 border rounded-lg placeholder:font-lato-regular"
                        />
                        {errors.fullName && <span className="error text-red-500 text-sm">{errors.fullName}</span>}
                    </div>

                    <div>
                        <label htmlFor="designation" className="form-label block font-lato-bold mb-2 mt-4">Designation</label>
                        <input
                            type="text"
                            id="designation"
                            name="designation"
                            value={formData.designation}
                            onChange={handleChanges}
                            className="form-control font-lato-regular text-black/70 w-full px-3 py-2 border rounded-lg placeholder:font-lato-regular"
                        />
                        {errors.designation && <span className="error text-red-500 text-sm">{errors.designation}</span>}
                    </div>
                   
                    <div>
                        <label htmlFor="address" className="form-label block font-lato-bold mb-2 mt-4">Address (optional)</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChanges}
                            className="form-control font-lato-regular text-black/70 w-full px-3 py-2 border rounded-lg placeholder:font-lato-regular"
                        />
                        {/* {errors.address && <span className="error text-red-500 text-sm">{errors.address}</span>} */}
                    </div>
                    <div>
                        <label htmlFor="linkedinLink" className="form-label block font-lato-bold mb-2 mt-4">Linkedin Link</label>
                        <input
                            type="text"
                            id="linkedinLink"
                            name="linkedinLink"
                            value={formData.linkedinLink}
                            onChange={handleChanges}
                            className="form-control font-lato-regular text-black/70 w-full px-3 py-2 border rounded-lg placeholder:font-lato-regular"
                        />
                        {/* {errors.designation && <span className="error text-red-500 text-sm">{errors.designation}</span>} */}
                    </div>
                     <div>
                        <label htmlFor="fulldesc" className="form-label block font-lato-bold mb-2 mt-4">Description</label>
                        <input
                            type="text"
                            id="fulldesc"
                            name="fulldesc"
                            value={formData.fulldesc}
                            onChange={handleChanges}
                            className="form-control font-lato-regular text-black/70 w-full px-3 py-2 border rounded-lg placeholder:font-lato-regular"
                        />
                        {/* {errors.designation && <span className="error text-red-500 text-sm">{errors.designation}</span>} */}
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

                    {/* <div>
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
                    </div> */}

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

export default CardForm;
