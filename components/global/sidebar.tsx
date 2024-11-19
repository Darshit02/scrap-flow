"use client";
import React from "react";
import Logo from "@/components/global/logo";
import routes from "@/lib/routes";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { usePathname } from "next/navigation";

type Props = {};

const DesktopSidebar = ({}: Props) => {
  const pathName = usePathname();
  const activeRoute = routes.find((route) => route.href === pathName);

  return (
    <div className="hidden relative md:block min-w-[280px] max-w-[280px] h-screen overflow-hidden w-full bg-primary/5 dark:bg-secondary/30 dark:text-foreground text-muted-foreground border-r-2 border-separate">
      <div className="flex items-center justify-center gap-2 border-b-[1px] border-separate p-4">
        <Logo />
      </div>
      <div className="p-2">
        Creadits
      </div>
      <div className="flex flex-col p-2 gap-3">
        {routes.map((route) => (
          <Link
            href={route.href}
            key={route.href}
            className={buttonVariants({
                variant : activeRoute?.href === route.href ? "sidebarActiveItem" : "sidebarItem"
            })}
          >
            <route.icon size={20} />
            {route.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DesktopSidebar;
