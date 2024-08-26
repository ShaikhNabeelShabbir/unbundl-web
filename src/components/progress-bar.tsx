import React from "react";

interface ProgressBarProps {
  progress: number; // Progress value as a percentage (0 to 100)
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="relative w-45 h-8 mx-5 mt-3 border rounded-full bg-black/50">
      <div
        className="absolute top-0 left-0 h-full bg-black/50 rounded-full"
        style={{ width: `${progress}%` }}
      ></div>
      <span className="absolute inset-0 flex items-center justify-center text-white text-3 font-bold">
        {progress}%
      </span>
    </div>
  );
};

export default ProgressBar;
