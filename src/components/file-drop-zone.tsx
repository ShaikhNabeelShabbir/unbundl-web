import { useDropzone } from "react-dropzone";
import { MAX_FILE_SIZE_MB, ALLOWED_FILE_FORMATS } from "@/constants";
import { UploadCloud } from "lucide-react";

interface FileDropzoneProps {
  onDrop: (acceptedFiles: File[]) => void;
}

const FileDropzone: React.FC<FileDropzoneProps> = ({ onDrop }) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: ALLOWED_FILE_FORMATS,
    maxSize: MAX_FILE_SIZE_MB * 1024 * 1024, // Convert MB to bytes
  });

  return (
    <div
      {...getRootProps({ className: "dropzone" })}
      className="flex flex-wrap text-md font-semibold rounded-md  bg-black/5"
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here...</p>
      ) : (
        <div
          className="flex flex-wrap w-full h-full justify-center
        items-center text-center my-10 rounded-10"
        >
          <span
            className="flex flex-wrap w-full h-full justify-center
        items-center text-center"
          >
            {" "}
            <UploadCloud className="text-gray-500 mb-2 opacity-50" size={100} />
          </span>
          <p>
            Drag & drop some files here,
            <p className="text-blue-300">
              <u> or click to select files </u>
            </p>
          </p>

          <p className="mt-5 text-sm font-thin text-black/50">
            Accepted File types Pdf files,Text files, etcs
            <br /> Max. file size 25MB
          </p>
        </div>
      )}
    </div>
  );
};

export default FileDropzone;
