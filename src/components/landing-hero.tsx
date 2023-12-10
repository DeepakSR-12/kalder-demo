"use client";

import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { Button } from "./ui/button";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="text-white font-bold py-24 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>Customer Loyalty Management</h1>
      </div>
      <div className="text-sm md:text-xl font-light text-zinc-400">
        Experience the future of interactive{" "}
        <span className="font-bold">Brand Loyalty</span>
      </div>
      <div>
        <Link href={isSignedIn ? "/overview" : "/sign-up"}>
          <Button
            variant="outline"
            className="md:text-lg p-4 md:p-6 rounded-full font-semibold hover:bg-white hover:text-black"
          >
            Start For Free
          </Button>
        </Link>
      </div>
      <div className="text-zinc-400 text-xs md:text-sm font-normal">
        No credit card required.
      </div>
    </div>
  );
};
