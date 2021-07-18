import React from "react";
import useDownload from "./hooks/useDownload";

export default function App() {
  const download = useDownload();

  const handleDownload = () => {
    download("/download");
  };

  return (
    <div>
      <button onClick={handleDownload}>Download</button>
    </div>
  );
}
