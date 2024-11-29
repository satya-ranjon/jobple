"use client";

import React from "react";
import Button from "./button";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePageChange = (page: number) => {
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers: React.ReactNode[] = [];

    pageNumbers.push(
      <Button
        key={currentPage}
        size="s"
        onClick={() => handlePageChange(currentPage)}
        variant="primary"
        className="text-xs">
        {currentPage}
      </Button>
    );

    if (currentPage < totalPages) {
      pageNumbers.push(
        <Button
          key={currentPage + 1}
          size="s"
          onClick={() => handlePageChange(currentPage + 1)}
          variant="secondary"
          className="text-xs">
          {currentPage + 1}
        </Button>
      );
    }

    if (totalPages > currentPage + 1) {
      pageNumbers.push(
        <span key="ellipsis" className="text-xl mt-1 px-1">
          ...
        </span>
      );
      pageNumbers.push(
        <Button
          key={totalPages}
          size="s"
          onClick={() => handlePageChange(totalPages)}
          variant="secondary"
          className="text-xs">
          {totalPages}
        </Button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="flex justify-center space-x-2">
      <Button
        size="s"
        onClick={() => handlePageChange(currentPage - 1)}
        variant="text"
        className="text-xs text-text-black">
        前へ
      </Button>
      {renderPageNumbers()}
      <Button
        size="s"
        onClick={() => handlePageChange(currentPage + 1)}
        variant="text"
        className="text-xs text-text-black">
        次へ
      </Button>
    </div>
  );
};

export default Pagination;
