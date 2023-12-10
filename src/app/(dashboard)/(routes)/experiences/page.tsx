"use client";
import React from "react";
import Header from "@/components/header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function Experiences() {
  return (
    <div>
      <div className="fixed w-full flex">
        <Header title="Experiences" />
      </div>

      <Tabs defaultValue="all" className="w-[400px] pt-16">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="live">Live Experiences</TabsTrigger>
          <TabsTrigger value="drafts">Drafts</TabsTrigger>
          <TabsTrigger value="archive">Archive</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="live">Change your password here.</TabsContent>
        <TabsContent value="drafts">Change your password here.</TabsContent>
        <TabsContent value="archive">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
}

export default Experiences;
