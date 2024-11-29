import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type LogoProps = {
  className?: string;
};

const Logo: React.FC<LogoProps> = ({ className, ...props }) => {
  return (
    <>
      <Image
        src="/logo.svg"
        alt="Logo"
        width={99}
        height={36}
        className={cn("cursor-pointer w-[99px] h-9", className)}
        {...props}
      />
    </>
  );
};

export default Logo;
