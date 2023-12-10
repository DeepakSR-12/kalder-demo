"use client";
import React from "react";
import Header from "@/components/header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function Membership() {
  return (
    <div>
      <div className="fixed w-full flex">
        <Header title="Manage Your Membership" />
      </div>

      <Tabs defaultValue="portal" className="w-[400px] pt-16">
        <TabsList>
          <TabsTrigger value="portal">Member Portal</TabsTrigger>
          <TabsTrigger value="wallet">Mobile Wallet</TabsTrigger>
          <TabsTrigger value="social">Social</TabsTrigger>
        </TabsList>
        <TabsContent value="portal">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="wallet">Change your password here.</TabsContent>
        <TabsContent value="social">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
}

export default Membership;
