import toast from "react-hot-toast";

import { useEffect } from "react";

export const copyToClipboard = (text: string) => {
  if (typeof window !== "undefined" && navigator.clipboard) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast.success("Copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  } else if (typeof document !== "undefined") {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand("copy");
      toast.success("Copied to clipboard!");
    } catch (err) {
      console.error("Fallback: Copy failed", err);
    }
    document.body.removeChild(textArea);
  } else {
    console.error("Clipboard API not available");
  }
};

export const handleDownload = (fileContent: string, fileName: string) => {
  const blob = new Blob([fileContent], { type: "text/plain" });
  const url = window.URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = `${fileName}.txt`; // File name
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
};

export function DisableInspect() {
  useEffect(() => {
    const handleContextMenu = (e: any) => e.preventDefault();

    const handleKeyDown = (e: any) => {
      if (
        e.keyCode === 123 || // F12
        (e.ctrlKey && e.shiftKey && [73, 74, 67].includes(e.keyCode)) || // Ctrl+Shift+I/J/C
        (e.ctrlKey && e.keyCode === 85) // Ctrl+U
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return <div>Inspect Mode Disabled</div>;
}

export const useCopyProtect = () => {
  useEffect(() => {
    const handleCopy = (event: any) => {
      event.preventDefault();
      event.clipboardData.setData(
        "text/plain",
        "NAA! Beta Mera content churane ki koshish mat kariyo!! 😜😜"
      );
    };

    document.addEventListener("copy", handleCopy);

    return () => {
      document.removeEventListener("copy", handleCopy);
    };
  }, []);
};
