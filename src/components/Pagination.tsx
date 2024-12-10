"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Pagination = ({
  currentPage,
  hasPrev,
  hasNext,
}: {
  currentPage: number;
  hasPrev: boolean;
  hasNext: boolean;
}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const createPageUrl = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="mt-12 flex items-center justify-center w-full gap-4">
      <button
        className="rounded-md bg-yellow-500  text-black border-2 p-2 text-sm w-fit cursor-pointer disabled:cursor-not-allowed disabled:bg-yellow-200"
        disabled={!hasPrev}
        onClick={() => createPageUrl(currentPage - 1)}
      >
        Previous
      </button>
      <button
        className="rounded-md bg-yellow-500  text-black border-2 p-2 text-sm w-fit cursor-pointer disabled:cursor-not-allowed disabled:bg-yellow-200"
        disabled={!hasNext}
        onClick={() => createPageUrl(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
