"use client";
import { Provider } from "react-redux";
import "./globals.css";
import "react-datepicker/dist/react-datepicker.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { store } from "./store/store";
import { Toaster } from "react-hot-toast";
import LeftSidebar from "./components/LeftSidebar";
import Navbar from "./components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="overflow-x-hidden bg-[#121212]">
      <body className="antialiased overflow-x-hidden bg-[#121212] text-white">
        <Provider store={store}>
          <Toaster />
          <div className="w-full min-h-screen p-2 max-w-screen-xl mx-auto lg:mt-10 ">
            <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-6 h-full">
              <div className="lg:col-span-3 w-full">
                <LeftSidebar />
              </div>

              {/* Main Content */}
              <div className="lg:col-span-9 bg-[#1E1E1F] mt-5 md:mt-0 rounded-3xl shadow-lg w-full mb-28 md:mb-0">
                <Navbar />
                {children}
              </div>
            </div>
          </div>
        </Provider>
      </body>
    </html>
  );
}
