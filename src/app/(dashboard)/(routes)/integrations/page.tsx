"use client";
import React from "react";
import Header from "@/components/header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function Integrations() {
  return (
    <div>
      <div className="fixed w-full flex">
        <Header title="Integrations" />
      </div>

      <Tabs defaultValue="spotify" className="w-[400px] pt-16">
        <TabsList>
          <TabsTrigger value="spotify">Spotify</TabsTrigger>
          <TabsTrigger value="discord">Discord</TabsTrigger>
        </TabsList>
        <TabsContent value="spotify">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="discord">Change your discord here.</TabsContent>
      </Tabs>
    </div>
  );
}

export default Integrations;
