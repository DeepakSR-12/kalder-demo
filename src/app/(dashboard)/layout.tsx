"use client";
import Navbar from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import { ChakraProvider, theme } from "@chakra-ui/react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen">
      <div className="hidden h-full md:flex md:w-80 md:flex-col md:fixed md:inset-y-0 z-80 bg-gray-900">
        <Sidebar />
      </div>
      <main className="md:pl-80 w-full">
        <div className="sticky top-0 mt-1 z-10 h-16 flex items-center justify-end bg-white shadow-slate-200 shadow-lg rounded-xl mx-4">
          <Navbar />
        </div>

        <div className="pt-16 px-8">
          <ChakraProvider theme={theme}>{children}</ChakraProvider>
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
