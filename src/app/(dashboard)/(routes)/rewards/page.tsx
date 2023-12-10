"use client";
import React from "react";
import Header from "@/components/header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function Rewards() {
  return (
    <div>
      <div className="fixed w-full flex">
        <Header title="Manage Your Rewards" />
      </div>

      <div className="pt-16">Rewards</div>
    </div>
  );
}

export default Rewards;
