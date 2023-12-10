"use client";
import React from "react";
import Header from "@/components/header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function Feedback() {
  return (
    <div>
      <div className="fixed w-full flex">
        <Header title="Feedback" />
      </div>
      <div className="pt-16">Feedback</div>
    </div>
  );
}

export default Feedback;
