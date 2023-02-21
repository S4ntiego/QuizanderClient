import React from "react";

//need head
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

interface QuizzesProps {
  children: React.ReactNode;
}

const LandingLayout = ({ children }: QuizzesProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
};

export default LandingLayout;
