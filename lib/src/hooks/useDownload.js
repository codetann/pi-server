export default function useDownload() {
  const download = async (url) => {
    try {
      const res = await fetch(url);

      const blob = await res.blob();
      const newBlob = new Blob([blob]);
      const blobUrl = window.URL.createObjectURL(newBlob);

      const a = document.createElement("a");
      a.href = blobUrl;
      a.setAttribute("download", "bg.jpg");
      document.body.appendChild(a);
      a.click();
      a.parentNode.removeChild(a);

      window.URL.revokeObjectURL(blob);
    } catch {
      console.log("download failed");
    }
  };

  return download;
}
