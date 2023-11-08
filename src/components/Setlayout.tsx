import React from "react";
import { Navbar } from "@/components/Nav";
import { Herosection } from "./Herosection";
import Provider from "./Provider";
import Footer from "./footer";

export const Setlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider>
      <div className="container">
        <Navbar />
        {children}
      </div>
      <Footer />
    </Provider>
  );
};
