"use client";

import { Montserrat } from "next/font/google";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

const font = Montserrat({ weight: "600", subsets: ["latin"] });

export const LandingNavbar = () => {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <div
          onClick={() => router.push("/overview")}
          className="relative h-8 w-8 mr-2 border flex justify-center items-center rounded-full border-white text-white"
        >
          KA
        </div>
        <h1 className="text-2xl font-bold text-white">Kalder</h1>
      </Link>
      <div className="flex items-center gap-x-2">
        <Link href={isSignedIn ? "/overview" : "/sign-up"}>
          <Button
            variant="outline"
            className="rounded-full hover:bg-white hover:text-black bg-black text-white"
          >
            Get Started
          </Button>
        </Link>
      </div>
    </nav>
  );
};
