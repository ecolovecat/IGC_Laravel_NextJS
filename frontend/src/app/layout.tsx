"use client";
import SideBar from "./componnets/layouts/SideBar";
import "./globals.css";
import "./styles/dashboard.css";
import { Content, Inter } from "next/font/google";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const routesWithoutSidebar = ["/login", "/signup"];
  const hideSidebar = routesWithoutSidebar.includes(pathname);

  return (
    <html lang="en">
      <body className={inter.className}>
        {hideSidebar ? (
          <div>{children}</div>
        ) : (
          <div className="w-screen h-full min-h-screen flex">
            <SideBar />
            <div className="w867 bg-white flex pt-[22px] items-center justify-center min-w-0">
              {children}
            </div>
          </div>
        )}
      </body>
    </html>
  );
}
