// import React, { useState } from "react";
// import MDEditor from "@uiw/react-md-editor";
// import axios from "axios";

// const MarkdownEditor: React.FC = () => {
//     const [value, setValue] = useState<string>("**Hello world!!!**");
//     const [formData, setFormData] = useState<any>()

//     const handleImageUpload = async (file: File): Promise<string> => {
//         console.log(file)
//         // setFormData({ ...formData, ImageUrl: file });
//         const formData = new FormData();
//         formData.append("imageUrl", file); // Ensure this matches backend expectations

//         try {
//             console.log(formData)
//             const response = await axios.post(
//                 `http://localhost:3000/api/markdown/imageurl/create`,
//                 formData,
//                 {
//                     headers: {
//                         "Content-Type": "multipart/form-data",
//                     },
//                 }
//             );
//             console.log(response.data.message.imageUrl)
//             // if (!response.ok) throw new Error("Upload failed");

//             // const data = await response.json();
//             // console.log("Uploaded Image URL:", data.imageUrl);
//             return `${process.env.REACT_APP_LOCAL_URL}/${response.data.message.imageUrl.replace(/\\/g, '/')}`; // Ensure this field is returned from the backend

//         } catch (error) {
//             console.error("Image upload failed:", error);
//             return "";
//         }
//     };

//     const onDrop = async (e: React.DragEvent<HTMLDivElement>) => {
//         e.preventDefault();
//         const file = e.dataTransfer.files[0];
//         if (file) {
//             const imageUrl = await handleImageUpload(file);
//             if (imageUrl) {
//                 setValue((prev) => `${prev}\n\n![Image](${imageUrl})\n\n`);
//             }
//         }
//     };

//     return (
//         <div data-color-mode="light" onDrop={onDrop} onDragOver={(e) => e.preventDefault()} className="container">
//             <h1>Markdown Editor</h1>
//             <MDEditor value={value} onChange={(val) => setValue(val || "")} />
//         </div>
//     );
// };

// export default MarkdownEditor;

import React, { useState } from "react";
import MDEditor, { ICommand, commands } from "@uiw/react-md-editor";
import axios from "axios";
import { FaRegFileImage } from "react-icons/fa";



interface MarkdownEditorProps {
    value: string;
    setValue: (value: string) => void;
}

const MarkdownEditor: React.FC<MarkdownEditorProps> = ({ value, setValue }) => {
    // const [value, setValue] = useState<string>("**Hello world!!!**");
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [url, setUrl] = useState<string>()

    const handleClosePopup = () => {
        setIsModalOpen(false)
        setUrl('')
    }
    // Handle Image Upload
    const handleImageUpload = async (): Promise<void> => {
        if (!selectedFile) return;

        const formData = new FormData();
        formData.append("imageUrl", selectedFile);

        try {
            const response = await axios.post(
                `${process.env.REACT_APP_LOCAL_URL}/api/markdown/imageurl/create`,
                formData,
                { headers: { "Content-Type": "multipart/form-data" } }
            );

            const imageUrl = `${process.env.REACT_APP_LOCAL_URL}/${response.data.message.imageUrl.replace(/\\/g, '/')}`;
            // setValue((prev) => `${prev}\n\n![Image](${imageUrl})\n\n`);
            setUrl(`\n\n![Image](${imageUrl})\n\n`)
            // setIsModalOpen(false);
            setSelectedFile(null);
        } catch (error) {
            console.error("Image upload failed:", error);
        }
    };

    // Define Custom Image Button
    const customImageCommand: ICommand = {
        name: "custom-image",
        keyCommand: "custom-image",
        buttonProps: { "aria-label": "Insert Image" },
        icon: <span style={{ fontSize: "16px", cursor: "pointer" }}>🖼️</span>,
        execute: () => setIsModalOpen(true),
    };

    // Custom Toolbar with Image Button
    const customToolbar: ICommand[] = [
        commands.bold,
        commands.italic,
        commands.strikethrough,
        commands.quote,
        commands.unorderedListCommand,
        commands.orderedListCommand,
        // commands.image, // Default Image Command
        customImageCommand, // Custom Image Upload Button
    ];

    return (
        <div data-color-mode="light" className="container  ">
            <h3 className="font-lato-regular">Markdown Editor</h3>

            {/* Markdown Editor with Custom Toolbar */}
            <MDEditor height={800} className="h-full" value={value} onChange={(val: string | undefined) => setValue(val || "")} commands={customToolbar} />

            {/* Image Upload Modal */}
            {isModalOpen && (
                <div className=" fixed inset-0 top-0 left-0 w-full h-full bg-black/30 flex items-center justify-center backdrop-blur-[2px] z-[99999]">
                    <div className=" bg-white p-[20px] rounded-md text-center">
                        <h3 className="font-lato-regular mb-8">Upload Image</h3>
                        <div className="flex-col font-lato-regular">
                            <div className=" relative flex  justify-center ">
                                <input className=" " type="file" accept="image/*" onChange={(e) => setSelectedFile(e.target.files?.[0] || null)} />
                            </div>
                            <div>
                                <h6 className="text-sm mt-4 border-b-[1px] border-teal">
                                    {url}
                                </h6>
                                <h6 className="text-xs mt-4  text-red-500">
                                    NOTE: Copy the url and place where you want to add the image.
                                </h6>
                            </div>
                            <div className="flex justify-center gap-12 mt-8">
                                <button className=" bg-teal text-white font-lato-regular px-4 py-2 rounded-lg  transition-all duration-300" onClick={handleImageUpload}>Upload</button>
                                <button className="btn btn-primary border-[1px] border-red-500 text-red-500 font-lato-regular  px-4 py-2 rounded-lg hover:bg-red-100 transition-all duration-300" onClick={handleClosePopup}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MarkdownEditor;




