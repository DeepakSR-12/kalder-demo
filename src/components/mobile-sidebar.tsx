"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Sidebar } from "@/components/sidebar";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";
import { useRouter } from "next/navigation";

const poppins = Montserrat({ weight: "600", subsets: ["latin"] });

export const MobileSidebar = () => {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <Link
        href="/"
        className="md:hidden flex items-center group cursor-pointer"
      >
        <div
          onClick={() => router.push("/overview")}
          className="relative h-8 w-8 mr-2 border-2 flex justify-center items-center rounded-full border-black text-white bg-black font-bold"
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
      <SheetContent side="left" className="p-0">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};
