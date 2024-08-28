import { useDropzone } from "react-dropzone";
import { MAX_FILE_SIZE_MB, ALLOWED_FILE_FORMATS } from "@/constants";

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
    <div {...getRootProps({ className: "dropzone" })}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here...</p>
      ) : (
        <p>
          Drag & drop some files here, or click to <u>select files </u>
        </p>
      )}
      <br />
    </div>
  );
};

export default FileDropzone;
