import React from "react";
import Sidebar from "../sidebar";
import Navbar from "../navbar";

type MinLayoutProps = {
  children: React.ReactNode;
};

const MinLayout: React.FC<MinLayoutProps> = ({ children }) => {
  return (
    <div className="max-w-[1440px] mx-auto border border-border-component">
      <Navbar />
      <div className="h-[calc(100vh-80px)] flex overflow-hidden">
        <Sidebar />
        <main className="flex-1 p-3xl bg-background-page h-full w-full">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MinLayout;
