import React from "react";
import { cn } from "@/lib/utils";

type TableProps = {
  children?: React.ReactNode;
  className?: string;
};

const Table: React.FC<TableProps> = ({ children, className }) => {
  return (
    <table className={cn("w-full table-auto", className)}>{children}</table>
  );
};

type TableHeaderProps = {
  children?: React.ReactNode;
  className?: string;
};

const TableHeader: React.FC<TableHeaderProps> = ({ children, className }) => {
  return (
    <thead
      className={cn("bg-table-header text-text-black font-bold", className)}>
      <tr>{children}</tr>
    </thead>
  );
};

type TableBodyProps = {
  children?: React.ReactNode;
  className?: string;
};

const TableBody: React.FC<TableBodyProps> = ({ children, className }) => {
  return (
    <tbody className={cn("divide-y-[0.5px] divide-border-default", className)}>
      {children}
    </tbody>
  );
};

const TableRow: React.FC<TableProps> = ({ children, className }) => {
  return <tr className={cn(className)}>{children}</tr>;
};

const TableCell: React.FC<TableProps> = ({ children, className }) => {
  return (
    <td className={cn("px-3xl py-l text-sm text-left", className)}>
      {children}
    </td>
  );
};

export { Table, TableHeader, TableBody, TableRow, TableCell };
