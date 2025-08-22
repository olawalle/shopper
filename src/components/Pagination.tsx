import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

type PaginationProps = {
  totalPages: number;
  currentPage: number;
  basePath?: string;
};

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  basePath = "",
}) => {
  if (totalPages <= 1) return null;

  let pages: (number | string)[] = [];

  if (totalPages <= 6) {
    pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  } else {
    const start = Math.max(1, Math.min(currentPage - 2, totalPages - 5));
    const end = Math.min(totalPages, start + 4);
    pages = [...Array.from({ length: end - start + 1 }, (_, i) => start + i)];
    if (end < totalPages) {
      pages.push("...");
      pages.push(totalPages);
    }
  }

  const getPageHref = (page: number) => `${basePath}?page=${page}`;

  return (
    <div className="flex gap-2 justify-center mt-6">
      <Link
        href={getPageHref(Math.max(1, currentPage - 1))}
        className="rounded-full w-[30px] h-[30px] border border-gray-200 flex items-center justify-center"
        aria-disabled={currentPage === 1}
        tabIndex={currentPage === 1 ? -1 : 0}
      >
        <ChevronLeft size={18} />
      </Link>
      {pages.map((page, idx) =>
        page === "..." ? (
          <span key={"ellipsis-" + idx} className="px-3 py-1 text-gray-400">
            ...
          </span>
        ) : (
          <Link
            key={page}
            href={getPageHref(page as number)}
            className={`rounded-full w-[30px] h-[30px] flex items-center justify-center ${
              currentPage === page
                ? "bg-success text-white pointer-events-none"
                : "bg-white text-gray-700 hover:bg-success hover:text-white"
            }`}
            aria-current={currentPage === page ? "page" : undefined}
          >
            {page}
          </Link>
        )
      )}
      <Link
        href={getPageHref(Math.min(totalPages, currentPage + 1))}
        className="rounded-full w-[30px] h-[30px] border border-gray-200 flex items-center justify-center"
        aria-disabled={currentPage === totalPages}
        tabIndex={currentPage === totalPages ? -1 : 0}
      >
        <ChevronRight size={18} />
      </Link>
    </div>
  );
};

export default Pagination;
