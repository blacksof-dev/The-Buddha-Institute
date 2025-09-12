import React, { useState, useEffect } from "react";

interface AddAdminProps {
  onSubmit: (formData: AddAdminData) => void;
  onClose: () => void;
  initialData?: AddAdminData;
}

interface AddAdminData {
  fullName: string;
  email: string;
  role: string;
}

const EditAdminForm: React.FC<AddAdminProps> = ({
  onSubmit,
  onClose,
  initialData,
}) => {
  const [formData, setFormData] = useState<AddAdminData>({
    fullName: "",
    email: "",
    role: "",
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

    if (!formData.fullName) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.role) {
      newErrors.role = "Role is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChanges = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
              htmlFor="fullname"
              className="form-label block font-lato-bold mt-4"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              name="fullName"
              value={formData.fullName}
              onChange={handleChanges}
              className="form-control font-lato-regular text-black/70 w-full px-3 py-2 border rounded-lg placeholder:font-lato-regular"
            />
            {errors.fullName && (
              <span className="error text-red-500 text-sm">
                {errors.fullName}
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="form-label block font-lato-bold mt-4"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChanges}
              className="form-control font-lato-regular text-black/70 w-full px-3 py-2 border rounded-lg placeholder:font-lato-regular"
            />
            {errors.email && (
              <span className="error text-red-500 text-sm">{errors.email}</span>
            )}
          </div>

          {formData.role === "admin" ? (
            <div>
              <label
                htmlFor="role"
                className="form-label block font-lato-bold mt-4"
              >
                Role
              </label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChanges}
                className="form-control font-lato-regular text-black/70 w-full px-3 py-2 border rounded-lg placeholder:font-lato-regular"
              >
                <option value="">Select a role</option>
                <option value="admin">Admin</option>
              </select>
              {errors.role && (
                <span className="error text-red-500 text-sm">
                  {errors.role}
                </span>
              )}
            </div>
          ) : (
            ""
          )}

          <div className="flex justify-center mt-8 space-x-9">
            <button
              className="bg-teal text-white font-lato-regular px-4 py-2 rounded-lg"
              type="submit"
            >
              {initialData ? "Update" : "Submit"}
            </button>
            <button
              className="btn btn-primary border-[1px] border-red-500 text-red-500 font-lato-regular px-4 py-2 rounded-lg hover:bg-red-100 transition-all duration-300"
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

export default EditAdminForm;
