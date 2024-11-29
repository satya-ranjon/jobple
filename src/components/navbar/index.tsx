import React from "react";
import Logo from "@/components/ui/logo";
import Button from "@/components/ui/button";
import { PrCode } from "@/components/icons";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-l border-b border-border-component bg-component">
      <Logo />
      <Button variant="secondary" size="s" className=" font-semibold gap-xs">
        <PrCode />
        スキルレポートをもらう
      </Button>
    </div>
  );
};

export default Navbar;
