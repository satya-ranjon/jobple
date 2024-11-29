import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export type SidebarItemsProps = {
  label: string;
  icon: React.ReactNode;
  href: string;
};

export type NavItemProps = SidebarItemsProps & {
  isActive?: boolean;
};

const SidebarItem: React.FC<NavItemProps> = ({
  label,
  icon,
  href,
  isActive = false,
}) => {
  const iconElement = React.cloneElement(icon as React.ReactElement, {
    solid: isActive,
  });

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-xs text-text-black p-m font-normal rounded-sm transition-all duration-200",
        isActive
          ? "bg-sidebar-background font-semiBold"
          : "text-text-black hover:bg-sidebar-background"
      )}>
      <span className="text-brand-primary">{iconElement}</span>
      <span className="text-sm">{label}</span>
    </Link>
  );
};

export default SidebarItem;
