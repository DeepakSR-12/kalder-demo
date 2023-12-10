"use client";

import Link from "next/link";
import { Montserrat } from "next/font/google";
import {
  Crown,
  Trophy,
  LayoutDashboard,
  Wallet2,
  Star,
  MessageSquare,
} from "lucide-react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";

const routes = [
  {
    label: "OVERVIEW",
    icon: LayoutDashboard,
    href: "/overview",
    color: "text-sky-500",
  },

  {
    label: "MEMBERSHIP",
    icon: Wallet2,
    color: "text-green-700",
    href: "/membership",
  },
  {
    label: "EXPERIENCES",
    icon: Crown,
    href: "/experiences",
    color: "text-violet-500",
  },
  {
    label: "REWARDS",
    icon: Trophy,
    color: "text-pink-700",
    href: "/rewards",
  },
  {
    label: "INTEGRATIONS",
    icon: Star,
    color: "text-emerald-500",
    href: "/integrations",
  },
  {
    label: "FEEDBACK",
    icon: MessageSquare,
    color: "text-orange-700",
    href: "/feedback",
  },
];

export const Sidebar = () => {
  const pathname = usePathname();
  const user = useUser();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-white shadow-xl text-black">
      <div className="px-6 py-2 mt-16 flex-1">
        <Link
          className="text-2xl font-bold uppercase tracking-widest text-center w-full block pb-8"
          href="/overview"
        >
          {user?.user?.firstName}'s Team
        </Link>

        <div className="space-y-1">
          {routes?.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-black rounded-xl transition",
                pathname === route.href ? "text-white bg-black" : "text-black"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3 ")} />
                {route.label}{" "}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
