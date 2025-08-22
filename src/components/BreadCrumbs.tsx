import clsx from "clsx";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

function BreadCrumbs({ crumbs }: { crumbs: { title: string; url: string }[] }) {
  return (
    <div className="flex items-center py-5 text-gray-400 p-4 h-full container mx-auto">
      <Link href="/">
        <img src="/assets/home.svg" alt="Home" />{" "}
      </Link>
      {crumbs.map((crumb, index) => (
        <Link href={crumb.url} key={crumb.url} className="flex items-center">
          <ChevronRight className="mx-2" size={18} />
          <span
            className={clsx({
              "text-success": index === crumbs.length - 1,
            })}
          >
            {crumb.title}
          </span>
        </Link>
      ))}
    </div>
  );
}

export default BreadCrumbs;
