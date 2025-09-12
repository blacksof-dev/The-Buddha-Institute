import React, { useState, useEffect } from "react";

interface ImpactFormProps {
    onSubmit: (formData: ImpactFormData) => void;
    onClose: () => void;
    initialData?: ImpactFormData;
}

interface ImpactFormData {
    tabName: string;
    desc: string;
    graphdetails: string[];
}

const TabFrom: React.FC<ImpactFormProps> = ({ onSubmit, onClose, initialData }) => {
    const [formData, setFormData] = useState<ImpactFormData>({
        tabName: '',
        desc: '',
        graphdetails: []
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    useEffect(() => {
        if (initialData) {
            setFormData({
                ...initialData,
            });
        }
    }, [initialData]);

    const validate = (): boolean => {
        const newErrors: { [key: string]: string } = {};

        if (formData.tabName === undefined || formData.tabName === null || formData.tabName === '') {
            newErrors.tabName = "Tab name is required";
        }

        // if (!formData.desc) {
        //     newErrors.desc = "desc is required";
        // } else if (formData.desc.length < 3) {
        //     newErrors.desc = "desc should be at least 3 characters long";
        // } else if (formData.desc.length > 200) {
        //     newErrors.desc = "desc should not exceed 200 characters";
        // }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChanges = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        let arr;
        if (name === 'graphdetails') {
            arr = value.split(',');
            // arr = arr.map((el) => el.trim());
            setFormData({ ...formData, graphdetails: arr });
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
                        <label htmlFor="tabName" className="form-label block font-lato-bold mt-4">Tab Name</label>
                        <input
                            type="text"
                            id="tabName"
                            name="tabName"
                            value={formData.tabName}
                            onChange={handleChanges}
                            className="form-control font-lato-regular text-black/70 w-full px-3 py-2 border rounded-lg placeholder:font-lato-regular outline-darkCyan"
                        />
                        {errors.tabName && <span className="error text-red-500 text-sm font-lato-regular">{errors.tabName}</span>}
                    </div>
                    <div>
                        <label htmlFor="desc" className="form-label block font-lato-bold mt-4">Description</label>
                        <textarea
                            id="desc"
                            name="desc"
                            value={formData.desc}
                            onChange={handleChanges}
                            className="form-control font-lato-regular text-black/70 w-full px-3 py-2 border rounded-lg placeholder:font-lato-regular outline-darkCyan"
                            rows={4}
                        ></textarea>
                        {errors.desc && <span className="error text-red-500 text-sm">{errors.desc}</span>}
                    </div>
                    <div>
                        <label htmlFor="graphdetails" className="form-label block font-lato-bold mt-4">Legend Items</label>
                        <input
                            type="text"
                            id="graphdetails"
                            name="graphdetails"
                            value={formData.graphdetails}
                            onChange={handleChanges}
                            className="form-control font-lato-regular text-black/70 w-full px-3 py-2 border rounded-lg placeholder:font-lato-regular outline-darkCyan"
                        />
                        {errors.graphdetails && <span className="error text-red-500 text-sm">{errors.graphdetails}</span>}
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

export default TabFrom;
