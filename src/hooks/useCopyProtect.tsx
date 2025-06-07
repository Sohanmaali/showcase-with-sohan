import { useEffect } from "react";

const useCopyProtect = () => {
  useEffect(() => {
    const handleCopy = (event: any) => {
      event.preventDefault();
      event.clipboardData.setData("text/plain", "NAA! Beta Mera content churane ki koshish mat kariyo!! 😜😜");
    };

    document.addEventListener("copy", handleCopy);

    return () => {
      document.removeEventListener("copy", handleCopy);
    };
  }, []);
};

export default useCopyProtect;
