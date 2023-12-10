"use client";
import { UserButton } from "@clerk/nextjs";
import { MobileSidebar } from "./mobile-sidebar";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";

const poppins = Montserrat({ weight: "600", subsets: ["latin"] });

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="flex w-full items-center justify-between p-4">
      <MobileSidebar />
      <div className="flex md:w-full justify-between px-4">
        <Link
          href="/"
          className="hidden md:flex items-center group cursor-pointer"
        >
          <div
            onClick={() => router.push("/overview")}
            className="relative h-8 w-8 mr-2 border-2 flex justify-center items-center rounded-full border-black bg-black text-white font-bold"
          >
            KA
          </div>
          <h1
            className={cn(
              "text-2xl font-bold flex items-center space-x-2",
              poppins.className
            )}
          >
            <div>Kalder</div>
          </h1>
        </Link>
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
