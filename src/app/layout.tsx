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
import { usePathname, useRouter } from "next/navigation";
import useCopyProtect from "@/hooks/useCopyProtect";
import Loading from "./components/Loading";

const pageConfig: Record<string, { title: string }> = {
  "/": { title: "About Me" },
  "/resume": { title: " My Resume" },
  "/project": { title: "My Projects" },
  "/code": { title: "My Codes" },
  "/gallery": { title: "My Gallery" },
  "/blog": { title: "My Blogs" },
  "/contact": { title: "Contact With Sohan" },
};

import AdminLayout from "./layouts/AdminLayout";
import UserLayout from "./layouts/UserLayout";
import { SidebarProvider } from "./context/SidebarContext";
import { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname: any = usePathname();
  const config = pageConfig[pathname];
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="U21sRHG4ITrbC1LksUGmTS9Lel8RcAtWXcyrJYT4pdQ"
        />
        <title>{config?.title || "Sohan"}</title>
        <meta
          name="description"
          content="Welcome to Sohan's Portfolio. Discover my projects, resume, blog, and contact details."
        />
        <meta
          name="keywords"
          content="Portfolio, Web Developer, Projects, Resume, Blog, Contact"
        />
        <meta name="author" content="Sohan" />
        <link rel="icon" href="/assets/images/emoji.png" />
      </head>
      <body className="relative antialiased text-white bg-[#121212]">
        <Provider store={store}>
          <RootContent>{children}</RootContent>
        </Provider>
      </body>
    </html>
  );
}

function RootContent({ children }: { children: React.ReactNode }) {
  const pathname: any = usePathname();
  const router = useRouter();

  const [role, setRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    setRole(storedRole);
    setLoading(false);

    if (
      !loading &&
      storedRole !== "admin" &&
      pathname.startsWith("/admin") &&
      pathname !== "/admin/login"
    ) {
      router.replace("/admin/login");
    }
  }, [pathname, router, loading]);

  if (loading) return <Loading />;

  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  return role === "admin" && pathname.startsWith("/admin") ? (
    <SidebarProvider>
      <AdminLayout>{children}</AdminLayout>
    </SidebarProvider>
  ) : (
    <UserLayout>{children}</UserLayout>
  );
}
