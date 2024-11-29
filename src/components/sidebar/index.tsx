"use client";

import React from "react";
import Link from "next/link";
import {
  Document,
  Setting,
  Calendar,
  User,
  Chat,
  Airplane,
  DocumentYen,
  UserCircle,
} from "@/components/icons";
import { usePathname } from "next/navigation";
import Button from "../ui/button";
import SidebarItem, { SidebarItemsProps } from "./sidebar-item";

const Sidebar = () => {
  const currentPath = usePathname();

  const sidebarItems: SidebarItemsProps[] = [
    { label: "求人一覧", icon: <Document solid />, href: "/" },
    { label: "面談会の一覧", icon: <Calendar />, href: "/interviews" },
    { label: "求職者の一覧", icon: <User />, href: "/seekers" },
    { label: "メッセージ", icon: <Chat />, href: "/message" },
    { label: "スカウト", icon: <Airplane />, href: "/scout" },
    { label: "利用明細", icon: <DocumentYen />, href: "/usage-details" },
    { label: "設定", icon: <Setting />, href: "/setting" },
  ];

  return (
    <aside className="w-64 h-full bg-background-component flex flex-col justify-between border-r border-border-component">
      <nav className="space-y-xs py-l px-m">
        {sidebarItems.map((item) => (
          <SidebarItem
            key={item.href}
            label={item.label}
            icon={item.icon}
            href={item.href}
            isActive={currentPath === item.href}
          />
        ))}
      </nav>

      <Link href="/#" className="border-t">
        <Button
          variant="secondary"
          className=" gap-xs font-semiBold px-xl text-sm rounded-none border-none w-full justify-start">
          <UserCircle /> 田中太郎
        </Button>
      </Link>
    </aside>
  );
};

export default Sidebar;
