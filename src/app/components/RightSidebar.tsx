"use client";
import { useEffect, useState } from "react";
import { isAuthenticated } from "../utils/auth";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../store/slices/authSlice";
import BasicProvider from "../utils/basicprovider";

const RightSidebar = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state: any) => state.auth);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response: any = await new BasicProvider(
          "customer/profile"
        ).getRequest();
        if (response?.status === "success") {
          const data = {
            ...response.data,
            image: response?.data?.featured_image?.filepath || null,
          };
          dispatch(setUser(data));
        }
      } catch (error) {
        console.error("Error fetching user Data:", error);
      }
    };
    if (isAuthenticated()) {
      fetchUserProfile();
    }
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <div className="flex">
        {/* RightSidebar */}
        <aside className="w-64 bg-lightColor h-screen shadow-lg fixed top-0 right-0 z-50 flex flex-col"></aside>
      </div>
    </>
  );
};

export default RightSidebar;
