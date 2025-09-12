import React, { useState, useEffect } from "react";

interface formProps {
  onSubmit: (formData: formData) => void;
  onClose: () => void;
  initialData?: formData;
}

interface formData {
  cover: any;
  title: string;
  desc: string;
  year: number;
  _id?: string;
}

const AwardsForm: React.FC<formProps> = ({
  onSubmit,
  onClose,
  initialData,
}) => {
  const [formData, setFormData] = useState<formData>({
    cover: null,
    title: "",
    desc: "",
    year: 0,
  });

  const [coverPreviewLocal, setCoverPreviewLocal] = useState<string | null>(
    null
  );
  //   const [pdfPreview, setPdfPreview] = useState<string | null>(null);
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
      //     setPdfPreview(`http://localhost:8080/${initialData.targetpdf}`);
      // }
    }
  }, [initialData]);

  const validate = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.cover && !coverPreviewLocal) {
      newErrors.cover = "Image is required";
    }

    if (!formData.title) {
      newErrors.title = "Title is required";
    }
    if (!formData.desc) {
      newErrors.desc = "Description is required";
    }
    if (!formData.year) {
      newErrors.year = "Year is required";
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
    <div
      className={`fixed bg-black/40 backdrop-blur-lg inset-0 z-50 flex items-center justify-center`}
    >
      <div className="border-[1px] border-gray-400 bg-white rounded-lg shadow-lg w-[25rem]">
        <form className="flex flex-col p-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="title"
              className="form-label block font-lato-bold mt-2"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChanges}
              className="form-control font-lato-regular text-black/70 w-full px-3 py-2 border rounded-lg placeholder:font-lato-regular"
            />
            {errors.title && (
              <span className="error text-red-500 text-sm">{errors.title}</span>
            )}
          </div>

          <div>
            <label
              htmlFor="desc"
              className="form-label block font-lato-bold mb-2 mt-2"
            >
              Description
            </label>
            <input
              type="text"
              id="desc"
              name="desc"
              value={formData.desc}
              onChange={handleChanges}
              className="form-control font-lato-regular text-black/70 w-full px-3 py-2 border rounded-lg placeholder:font-lato-regular"
            />
            {errors.desc && (
              <span className="error text-red-500 text-sm">{errors.desc}</span>
            )}
          </div>
          <div>
            <label
              htmlFor="year"
              className="form-label block font-lato-bold mb-2 mt-2"
            >
              Year
            </label>
            <input
              type="number"
              id="year"
              name="year"
              value={formData.year === 0 ? "" : formData.year}
              onChange={handleChanges}
              className="form-control font-lato-regular text-black/70 w-full px-3 py-2 border rounded-lg placeholder:font-lato-regular"
            />
            {errors.year && (
              <span className="error text-red-500 text-sm">{errors.year}</span>
            )}
          </div>

          <div>
            <label
              htmlFor="cover"
              className="form-label block font-lato-bold mt-2"
            >
              Image
            </label>
            <div className="flex">
              <div>
                <input
                  type="file"
                  id="cover"
                  name="cover"
                  accept="image/*"
                  onChange={handleChanges}
                  className="form-control h-12 font-lato-regular text-black/70 w-full px-3 py-2 border rounded-lg placeholder:font-lato-regular"
                />
                {errors.cover && (
                  <span className="error text-red-500 text-sm">
                    {errors.cover}
                  </span>
                )}
              </div>
              {(coverPreviewLocal || coverPreviewLocal) && (
                <img
                  src={coverPreviewLocal || coverPreviewLocal}
                  alt="Cover Preview"
                  className="  w-24 h-24 object-cover rounded-lg "
                />
              )}
            </div>
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
            <button
              className=" bg-teal text-white font-lato-regular px-4 py-2 rounded-lg"
              type="submit"
            >
              {initialData ? "Update" : "Submit"}
            </button>
            <button
              className="btn btn-primary border-[1px] border-red-500 text-red-500 font-lato-regular  px-4 py-2 rounded-lg hover:bg-red-100 transition-all duration-300"
              type="button"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AwardsForm;
