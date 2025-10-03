
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

const bannerSchema = z.object({
  bannerImage: z
    .any()
    .optional(),
  heading: z.string().min(3, "Heading should have at least 3 characters"),
  description: z.string().min(3, "Description should have at least 3 characters"),
  role: z.string().nonempty("Role is required"),
});

export type BannerFormData = z.infer<typeof bannerSchema>;

export default function BannerForm({ role,onclose,onSuccess}: { role: string; onclose:()=>void;onSuccess:()=>void}) {
  const [preview, setPreview] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BannerFormData>({
    resolver: zodResolver(bannerSchema),
    defaultValues: { role },
  });

 const onSubmit = async (data: BannerFormData) => {
  try {
    const formDataToSend = new FormData();

    if (data.bannerImage && data.bannerImage.length > 0) {
      formDataToSend.append("bannerImage", data.bannerImage[0]);
    }

    formDataToSend.append("heading", data.heading);
    formDataToSend.append("description", data.description);
    formDataToSend.append("role", data.role);

    if (role === "update") {
      await axios.patch(
        `http://localhost:3000/api/banner-data/68dd025f892b6cb218f96f55`,
        formDataToSend,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
    }

    await onSuccess();
    onclose();
  } catch (error: any) {
    console.error("API Error:", error.response?.data || error.message);
  }
};


  return (
    <div className="">    
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col p-6">
      {/* Image */}
      <div>
        <label htmlFor="bannerImage" className="block font-bold mt-4">
          Image
        </label>

        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="mt-2 w-24 h-24 object-cover rounded-lg mb-1"
          />
        )}

        <input
          type="file"
          id="bannerImage"
          accept="image/*"
          {...register("bannerImage")}
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) setPreview(URL.createObjectURL(file));
          }}
          className="border px-3 py-2 rounded-lg w-full"
        />
        {errors.bannerImage && (
          <p className="text-red-500">{errors.bannerImage.message as string}</p>
        )}
      </div>

      {/* Heading */}
      <div>
        <label htmlFor="heading" className="block font-bold mb-2 mt-4">
          Heading
        </label>
        <input
          type="text"
          id="heading"
          {...register("heading")}
          className="border px-3 py-2 rounded-lg w-full"
        />
        {errors.heading && (
          <p className="text-red-500">{errors.heading.message}</p>
        )}
      </div>

      {/* Description */}
      <div>
        <label htmlFor="description" className="block font-bold mb-2 mt-4">
          Description
        </label>
        <input
          type="text"
          id="description"
          {...register("description")}
          className="border px-3 py-2 rounded-lg w-full"
        />
        {errors.description && (
          <p className="text-red-500">{errors.description.message}</p>
        )}
      </div>

      {/* Role (hidden since passed via props) */}
      <input type="hidden" value={role} {...register("role")} />

      {/* Buttons */}
      <div className="flex justify-center mt-8 space-x-9">
        <button
          className="bg-teal text-white px-4 py-2 rounded-lg"
          type="submit"
        >
          {role === "update" ? "Update" : "Add"}
        </button>
        <button
          className="border border-red-500 text-red-500 px-4 py-2 rounded-lg  transition"
          type="button"
          onClick={onclose}
        >
          Cancel
        </button>
      </div>
    </form>
    </div>
  );
}
