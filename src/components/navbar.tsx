"use client";
import { UserButton } from "@clerk/nextjs";
import { MobileSidebar } from "./mobile-sidebar";

const Navbar = () => {
  return (
    <div className="flex w-full items-center justify-between p-4">
      <MobileSidebar />
      <div>
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
