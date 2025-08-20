"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

type PaginationProps = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
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

  return (
    <div className="flex gap-2 justify-center mt-6">
      <button
        onClick={() => currentPage >= 1 && onPageChange(currentPage - 1)}
        className="rounded-full w-[30px] h-[30px] border border-gray-200 flex items-center justify-center"
      >
        <ChevronLeft size={18} />
      </button>
      {pages.map((page, idx) =>
        page === "..." ? (
          <span key={"ellipsis-" + idx} className="px-3 py-1 text-gray-400">
            ...
          </span>
        ) : (
          <button
            key={page}
            className={`rounded-full w-[30px] h-[30px] ${
              currentPage === page
                ? "bg-success text-white"
                : "bg-white text-gray-700 hover:bg-success hover:text-white"
            }`}
            onClick={() => typeof page === "number" && onPageChange(page)}
            disabled={currentPage === page}
          >
            {page}
          </button>
        )
      )}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        className="rounded-full w-[30px] h-[30px] border border-gray-200 flex items-center justify-center"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
};

export default Pagination;
