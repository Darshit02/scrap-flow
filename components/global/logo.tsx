import { cn } from "@/lib/utils";
import { SquareMousePointer } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {
  fontSize?: string;
  iconSize?: number;
};

const Logo = ({ fontSize = "2xl", iconSize = 20 }: Props) => {
  return (
    <Link
      href={"/"}
      className={cn(
        "text-2xl font-extrabold flex items-center gap-2",
        fontSize
      )}
    >
      <div className="rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 p-2">
        <SquareMousePointer className="stroke-white" />
      </div>
      <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent">
        Flow
      </span>
      <span className="text-stone-700 dark:text-stone-300">Scrap</span>
    </Link>
  );
};

export default Logo;