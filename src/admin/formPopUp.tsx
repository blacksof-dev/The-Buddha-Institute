import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

interface FormPopUpProps {
  open: boolean;
  onClose: () => void;
  type: string;
  editnewsdata?: {
    _id?: string;
    title?: string;
    tag?: string;
    targetLink?: string;
    cover?: string;
  };
}

interface FormNewsUProps {
  _id?: string;
  title?: string;
  tag?: string;
  targetLink?: string;
  cover?: any;
}

const FormPopUp: React.FC<FormPopUpProps> = ({
  open,
  onClose,
  type,
  editnewsdata,
}) => {
  const [formNews, setFormNews] = useState<FormNewsUProps>({
    title: "",
    tag: "",
    targetLink: "",
    cover: "",
    _id: "",
  });

  const [coverPreviewlocal, setCoverPreviewLocal] = useState(""); // Added for image preview
  const [coverPreviewServer, setCoverPreviewServer] = useState(""); // Added for image preview
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  useEffect(() => {
    if (editnewsdata && editnewsdata._id !== formNews._id) {
      setFormNews({
        title: editnewsdata.title || "",
        tag: editnewsdata.tag || "",
        targetLink: editnewsdata.targetLink || "",
        cover: editnewsdata.cover || "",
        _id: editnewsdata._id || "",
      });
      if (editnewsdata.cover) {
        setCoverPreviewServer(editnewsdata.cover);
      }
    }
  }, [editnewsdata]);

  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (name === "cover" && files) {
      // Store the file object in the state
      // console.log(files[0])
      setFormNews({ ...formNews, cover: files[0] });
      setCoverPreviewLocal(URL.createObjectURL(files[0]));
    } else {
      setFormNews({ ...formNews, [name]: value });
    }
  };

  const validate = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!formNews.title) {
      newErrors.title = "Title is required";
    }
    if (!formNews.cover && !coverPreviewServer) {
      newErrors.cover = "Image is required";
    }

    if (!formNews.tag) {
      newErrors.tag = "Tag is required";
    }
    if (!formNews.targetLink) {
      newErrors.targetLink = "Link is required";
    }
    if (!formNews.tag) {
      newErrors.video = "Tag is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormPopUpSubmit = async () => {
    // e.preventDefault();

    let formData = {
      title: formNews.title,
      tag: formNews.tag,
      targetLink: formNews.targetLink,
      cover: formNews.cover,
    };

    let endpoint;
    let method;

    if (editnewsdata) {
      endpoint = `${process.env.REACT_APP_LOCAL_URL}/api/newsArticle/edit/${editnewsdata._id}`;
      method = "PATCH";
    } else {
      endpoint = `${process.env.REACT_APP_LOCAL_URL}/api/newsArticle/create`;
      method = "POST";
    }

    try {
      const response = await axios.request({
        method: method,
        url: endpoint,
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setFormNews(response.data);
      onClose();
      toast.success("Successfully Created", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error: any) {
      // console.log("Some Errors from frontend during FormPopUP submit", error);
      toast.error(error.response.data.error, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    // e.preventDefault();
    if (validate()) {
      handleFormPopUpSubmit();
    }
  };
  return (
    <div
      className={` fixed bg-black/10 backdrop-blur-md inset-0 z-50 flex items-center justify-center ${open ? "" : "hidden"
        }`}
    >
      <div className="border-[1px] border-gray-400 bg-white rounded-lg shadow-lg   w-[25rem]">
        <form className="flex flex-col p-6" onSubmit={handleSubmit}>
          <div className="form-group mb-4">
            <label
              htmlFor="title"
              className="form-label block font-lato-bold mb-2"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formNews.title}
              onChange={handleChanges}
              placeholder="Enter title"
              className="form-control font-lato-regular text-black/70 w-full px-3 py-2 border rounded-lg placeholder:font-lato-regular outline-darkCyan"
            />
            {errors.title && (
              <span className="error text-red-500 text-sm">{errors.title}</span>
            )}
          </div>

          <div className="form-group mb-4">
            <label
              htmlFor="tag"
              className="form-label block font-lato-bold mb-2"
            >
              Tag
            </label>
            <input
              type="text"
              id="tag"
              name="tag"
              value={formNews.tag}
              onChange={handleChanges}
              placeholder="Enter tag"
              className="form-control font-lato-regular text-black/70 w-full px-3 py-2 border rounded-lg placeholder:font-lato-regular outline-darkCyan"
            />
            {errors.tag && (
              <span className="error text-red-500 text-sm">{errors.tag}</span>
            )}
          </div>

          <div className="form-group mb-4">
            <label
              htmlFor="targetLink"
              className="form-label block font-lato-bold mb-2 "
            >
              Blog Link
            </label>
            <input
              type="text"
              id="link"
              name="targetLink"
              value={formNews.targetLink}
              onChange={handleChanges}
              placeholder="Enter blog link"
              className="form-control w-full font-lato-regular text-black/70 px-3 py-2 border rounded-lg placeholder:font-lato-regular outline-darkCyan"
            />
            {errors.targetLink && (
              <span className="error text-red-500 text-sm">
                {errors.targetLink}
              </span>
            )}
          </div>
          <div className="form-group mb-4 ">
            <label
              htmlFor="cover"
              className="form-label block   mb-2 font-lato-bold"
            >
              Cover Image
            </label>

            {(coverPreviewlocal || coverPreviewServer) && (
              <div className="mb-4">
                <img
                  src={
                    coverPreviewlocal
                      ? `${coverPreviewlocal}`
                      : `${process.env.REACT_APP_LOCAL_URL}/${coverPreviewServer}`
                  }
                  // src={`${coverPreview}`}
                  alt="Cover Preview"
                  className="w-24 h-24 object-cover"
                />
              </div>
            )}
            <input
              type="file"
              id="cover"
              name="cover"
              accept="image/*"
              onChange={handleChanges}
              className="form-control w-full px-3 py-2 border rounded-lg outline-darkCyan"
            />
            {errors.cover && (
              <span className="error text-red-500 text-sm">{errors.cover}</span>
            )}
          </div>
          <div className="flex justify-center space-x-4">
            <button
              className=" bg-teal text-white font-lato-regular px-4 py-2 rounded-lg"
              type="submit"
            >
              {editnewsdata ? "Update" : "Submit"}
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

export default FormPopUp;
