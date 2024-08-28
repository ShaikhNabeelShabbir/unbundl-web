import { FileRejection, useDropzone } from "react-dropzone";
import { MAX_FILE_SIZE_MB, ALLOWED_FILE_FORMATS } from "@/constants";

function FileDropzone() {
  const onDrop = (acceptedFiles: File[], fileRejections: FileRejection[]) => {
    acceptedFiles.forEach((file) => {
      console.log("Accepted file:", file);
    });

    fileRejections.forEach((rejection) => {
      console.log("Rejected file:", rejection.file);
      rejection.errors.forEach((error) => {
        console.log("Error:", error.message);
      });
    });
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: ALLOWED_FILE_FORMATS,
    maxSize: MAX_FILE_SIZE_MB * 1024 * 1024, // Convert MB to bytes
  });

  return (
    <div {...getRootProps()} className="dropzone">
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here...</p>
      ) : (
        <p>Drag & drop some files here, or click to select files</p>
      )}
    </div>
  );
}

export default FileDropzone;
