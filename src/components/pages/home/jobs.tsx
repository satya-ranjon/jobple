"use client";

import Button from "@/components/ui/button";
import Pagination from "@/components/ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import React from "react";

const Jobs = () => {
  return (
    <div>
      <div className="flex justify-between items-center px-3xl py-l">
        <Pagination
          currentPage={1}
          totalPages={3}
          onPageChange={(page) => console.log(page)}
        />
        <p className="text-xs">30 件中 1~10 件</p>
      </div>
      <Table>
        <TableHeader>
          <TableCell className="text-center">求人の状態</TableCell>
          <TableCell>求人のタイトル</TableCell>
          <TableCell className="text-center">予定中の面談会</TableCell>
          <TableCell className="text-center">操作</TableCell>
        </TableHeader>
        <TableBody>
          {jobs.map((job, index) => (
            <TableRow key={index}>
              <TableCell className="text-center">
                <span
                  className={cn(
                    " px-3 py-1 border rounded-full font-semibold",
                    job.status === "非公開" && "bg-[#DDD]"
                  )}>
                  {job.status}
                </span>
              </TableCell>
              <TableCell className="text-brand-primary underline">
                未経験歓迎！外国人活躍中！！住宅の基礎工事のお仕事です。
              </TableCell>
              <TableCell className="text-center">2 件</TableCell>
              <TableCell className="text-center">
                <Button
                  size="xs"
                  variant="secondary"
                  className="bg-background-page rounded-sm font-sm font-semibold px-l">
                  面談会を作成
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex justify-between items-center px-3xl py-l border-t border-t-border-component">
        <Pagination
          currentPage={1}
          totalPages={3}
          onPageChange={(page) => console.log(page)}
        />
        <p className="text-xs">1 件中 1~1 件</p>
      </div>
    </div>
  );
};

export default Jobs;

type JobType = {
  status: string;
  title: string;
  scheduled: number;
};

const jobs: JobType[] = [
  {
    status: "公開中",
    title: "未経験歓迎！外国人活躍中！！住宅の基礎工事のお仕事です。",
    scheduled: 2,
  },
  {
    status: "公開中",
    title: "【経験不問】建設現場での資材運搬スタッフ募集中",
    scheduled: 0,
  },
  {
    status: "公開中",
    title: "外国人大歓迎！室内装飾工事の見習い募集",
    scheduled: 0,
  },
  {
    status: "非公開",
    title: "チームで働こう！マンション内装工事スタッフ",
    scheduled: 0,
  },
  {
    status: "非公開",
    title: "【高収入可能】建設機械オペレーター急募",
    scheduled: 0,
  },
  {
    status: "非公開",
    title: "未経験OK！日本の技術を学べる配管工見習い募集",
    scheduled: 0,
  },
  {
    status: "非公開",
    title: "未経験OK！日本の技術を学べる配管工見習い募集",
    scheduled: 0,
  },
];
