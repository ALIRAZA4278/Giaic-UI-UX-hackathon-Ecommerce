"use client"; // Add this directive to make it a Client Component

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumb = () => {
  const pathname = usePathname();

  // Split the path into segments
  const pathSegments = pathname.split("/").filter(Boolean);

  return (
    <nav className="flex items-center text-sm text-gray-600 space-x-2">
      {/* Home Link */}
      <Link href="/">
        <span className="hover:text-gray-900">Home</span>
      </Link>

      {/* Dynamically generated breadcrumbs */}
      {pathSegments.map((segment, index) => {
        const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
        const isLast = index === pathSegments.length - 1;

        return (
          <div className="flex items-center space-x-2" key={index}>
            {/* Divider */}
            {!isLast && <span className="text-gray-400">{">"}</span>}

            {/* Link or current segment */}
            {isLast ? (
              <span className="text-black font-medium capitalize" aria-current="page">
                {decodeURIComponent(segment.replace("-", " "))}
              </span>
            ) : (
              <Link href={href}>
                <span className="hover:text-gray-900 capitalize">
                  {decodeURIComponent(segment.replace("-", " "))}
                </span>
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
