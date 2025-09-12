import React, { useState } from "react";

interface ResetPasswordProps {
  onSubmit: (formData: ResetPasswordData) => void;
  onClose: () => void;
}

interface ResetPasswordData {
  currentPassword: string;
  newPassword: string;
}

const ResetPasswordForm: React.FC<ResetPasswordProps> = ({
  onSubmit,
  onClose,
}) => {
  const [formData, setFormData] = useState<ResetPasswordData>({
    currentPassword: "",
    newPassword: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.currentPassword) {
      newErrors.currentPassword = "current password is required";
    } else if (formData.currentPassword.length < 6) {
      newErrors.currentPassword = "Password should be at least 8 characters long";
    }

    if (!formData.newPassword) {
      newErrors.newPassword = "New password is required";
    }
    else if (formData.newPassword.length < 6) {
      newErrors.newPassword = "new Password should be at least 6 characters long";
    }
    else if (formData.currentPassword === formData.newPassword) {
      newErrors.newPassword =
        "New password cannot be the same as the current password";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
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
              htmlFor="currentPassword"
              className="form-label block font-lato-bold mt-4"
            >
              Current Password
            </label>
            <input
              type="password"
              id="currentPassword"
              name="currentPassword"
              value={formData.currentPassword}
              onChange={handleChanges}
              className="form-control font-lato-regular text-black/70 w-full px-3 py-2 border rounded-lg placeholder:font-lato-regular"
            />
            {errors.currentPassword && (
              <span className="error text-red-500 text-sm">
                {errors.currentPassword}
              </span>
            )}
          </div>

          <div>
            <label
              htmlFor="newPassword"
              className="form-label block font-lato-bold mt-4"
            >
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChanges}
              className="form-control font-lato-regular text-black/70 w-full px-3 py-2 border rounded-lg placeholder:font-lato-regular"
            />
            {errors.newPassword && (
              <span className="error text-red-500 text-sm">
                {errors.newPassword}
              </span>
            )}
          </div>

          <div className="flex justify-center mt-8 space-x-9">
            <button
              className="bg-teal text-white font-lato-regular px-4 py-2 rounded-lg"
              type="submit"
            >
              Reset Password
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

export default ResetPasswordForm;
