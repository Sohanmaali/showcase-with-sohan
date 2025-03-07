"use client";
import { Provider } from "react-redux";
import "./globals.css";
import "react-datepicker/dist/react-datepicker.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { store } from "./store/store";
import { Toaster } from "react-hot-toast";
import { usePathname, useRouter } from "next/navigation";
import Navbar from "./components/Navbar";
import LeftSidebar from "./components/LeftSidebar";
import { DisableInspect } from "@/helpers/HelperFunction";
import { Suspense } from "react";

const pageConfig: Record<string, { title: string }> = {
  "/": { title: "About Me" },
  "/resume": { title: " My Resume" },
  "/project": { title: "My Projects" },
  "/code": { title: "My Codes" },
  "/gallery": { title: "My Gallery" },
  "/blog": { title: "My Blogs" },
  "/contact": { title: "Contact With Sohan" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname: any = usePathname();
  const config: any = pageConfig[pathname];
  DisableInspect();

  return (
    <html lang="en" className="overflow-x-hidden bg-[#121212]">
      <head>
        <meta
          name="google-site-verification"
          content="U21sRHG4ITrbC1LksUGmTS9Lel8RcAtWXcyrJYT4pdQ"
        />
        <title>{config?.title || "Sohan"}</title>
        <meta
          name="description"
          content="Welcome to Sohan's Portfolio. sohan maali Portfolio sohan infobean, Discover my projects, resume, blog, and contact details."
        />
        <meta
          name="keywords"
          content="Portfolio, Web Developer, Projects, Resume, Blog, Contact"
        />
        <meta name="author" content="Sohan" />
        <link rel="icon" href="/assets/images/emoji.png" />
      </head>
      <body className="select-none relative antialiased overflow-x-hidden text-white bg-[#121212] bg-[url('/assets/images/bg.jpg')] bg-cover bg-repeat bg-center bg-fixed">
        <Provider store={store}>
          <Toaster />
          <Suspense fallback={<p className="text-center">Loading...</p>}>
            <div className="relative w-full min-h-screen p-2 max-w-screen-xl mx-auto lg:mt-1 main-body">
              <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-6 h-full">
                <div className="lg:col-span-3 w-full ">
                  <LeftSidebar />
                </div>

                <div className="lg:col-span-9 bg-[#1E1E1F] mt-5 lg:mt-0 rounded-3xl shadow-lg w-full mb-28 md:mb-0 relative z-10 ">
                  <Navbar />
                  {children}
                </div>
              </div>
            </div>
          </Suspense>
        </Provider>
      </body>
    </html>
  );
}
// RootLayout.tsx
