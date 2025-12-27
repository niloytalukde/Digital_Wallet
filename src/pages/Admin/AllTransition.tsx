/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAllTransactionQuery } from "@/redux/features/transaction/transaction.api";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useState } from "react";

const AllTransaction = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data } = useAllTransactionQuery({ page: currentPage, limit: 10 });

  return (
    <div className="space-y-4 p-4">
      <h1 className="text-3xl flex justify-center">All Transactions</h1>

      <div className="flex items-center border pl-4 gap-2 border-gray-500/30 h-[46px] rounded-full overflow-hidden  w-full mt-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 30 30"
          fill="#6B7280"
        >
          <path d="M13 3C7.489 3 3 7.489 3 13s4.489 10 10 10a9.95 9.95 0 0 0 6.322-2.264l5.971 5.971a1 1 0 1 0 1.414-1.414l-5.97-5.97A9.95 9.95 0 0 0 23 13c0-5.511-4.489-10-10-10m0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8c3.57-8,8, -8, -8, -8" />
        </svg>
        <input
          type="text"
          placeholder="Search"
          className="w-full h-full outline-none text-gray-500 bg-transparent placeholder-gray-500 text-sm"
        />
      </div>

      {data?.map((transaction: any) => (
        <div className="flex items-center justify-between bg-white shadow-md rounded-xl p-4 border">
          {/* Left - From */}
          <div className="flex-1">
            <p className="text-xs text-gray-500">From</p>
            <p className="font-medium text-gray-800">
              {transaction.from?.ownerEmail}
            </p>
          </div>

          {/* Center - Amount */}
          <div className="flex-1 text-center">
            <p className="text-xs text-gray-500">Amount</p>
            <p className="text-lg font-bold text-green-600">
              ৳ {transaction.amount}
            </p>
          </div>

          {/* Right - To */}
          <div className="flex-1 text-right">
            <p className="text-xs text-gray-500">To</p>
            <p className="font-medium text-gray-800">
              {transaction.to?.ownerEmail}
            </p>
          </div>
        </div>
      ))}

      <div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => setCurrentPage(currentPage - 1)}
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink isActive href="#">
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext onClick={() => setCurrentPage(currentPage + 1)} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default AllTransaction;
