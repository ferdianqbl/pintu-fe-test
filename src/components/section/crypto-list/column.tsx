"use client";

import { FormatToRp } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import {
  ChevronDownIcon,
  ChevronsUpDownIcon,
  ChevronUpIcon,
} from "lucide-react";
import Image from "next/image";

export interface CryptoListItemType {
  id: number;
  icon: string;
  symbol: string;
  name: string;
  amount: string;
  day: string;
  week: string;
  month: string;
  year: string;
}

export const columnsCryptoList: ColumnDef<CryptoListItemType>[] = [
  {
    accessorKey: "name",
    header: () => (
      <div className="text-slate-500 font-bold text-lg">CRYPTO</div>
    ),
    cell: ({ row }) => {
      const { icon, name, symbol } = row.original;
      return (
        <div className="flex items-center space-x-4">
          <Image
            width={32}
            height={32}
            src={icon || ""}
            alt={name || ""}
            className="w-8 h-8 object-cover rounded-full"
          />
          <div>
            <p className="font-semibold">{name}</p>
            <p className="text-gray-400">{symbol}</p>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "amount",
    header: ({ column }) => {
      const handleSortIcon = () => {
        switch (column.getIsSorted()) {
          case "asc":
            return <ChevronUpIcon className="ml-2 h-4 w-4" />;
          case "desc":
            return <ChevronDownIcon className="ml-2 h-4 w-4" />;

          default:
            return <ChevronsUpDownIcon className="ml-2 h-4 w-4" />;
        }
      };

      return (
        <button
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap bg-none text-slate-500 font-bold text-lg"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          HARGA
          {handleSortIcon()}
        </button>
      );
    },
    cell: ({ row }) => {
      const { amount } = row.original;
      return <p className="font-bold text-lg">{FormatToRp(amount)}</p>;
    },
  },
  {
    accessorKey: "day",
    header: ({ column }) => {
      const handleSortIcon = () => {
        switch (column.getIsSorted()) {
          case "asc":
            return <ChevronUpIcon className="ml-2 h-4 w-4" />;
          case "desc":
            return <ChevronDownIcon className="ml-2 h-4 w-4" />;

          default:
            return <ChevronsUpDownIcon className="ml-2 h-4 w-4" />;
        }
      };

      return (
        <button
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap bg-none text-slate-500 font-bold text-lg"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          24 JAM
          {handleSortIcon()}
        </button>
      );
    },
    cell: ({ row }) => {
      const { day } = row.original;
      if (Number(day) === 0)
        return <p className="text-black font-semibold text-lg">{day}%</p>;
      return (
        <span>
          {Number(day) > 0 ? (
            <div className="flex items-center gap-1 text-green-600 font-semibold text-lg line-clamp-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="rotate-180"
              >
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
              </svg>
              {day}%
            </div>
          ) : (
            <div className="flex items-center gap-1 text-red-600 font-semibold text-lg line-clamp-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
              </svg>
              {day.split("-")[1]}%
            </div>
          )}
        </span>
      );
    },
  },
  {
    accessorKey: "week",
    header: ({ column }) => {
      const handleSortIcon = () => {
        switch (column.getIsSorted()) {
          case "asc":
            return <ChevronUpIcon className="ml-2 h-4 w-4" />;
          case "desc":
            return <ChevronDownIcon className="ml-2 h-4 w-4" />;

          default:
            return <ChevronsUpDownIcon className="ml-2 h-4 w-4" />;
        }
      };

      return (
        <button
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap bg-none text-slate-500 font-bold text-lg"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          1 MGG
          {handleSortIcon()}
        </button>
      );
    },
    cell: ({ row }) => {
      const { week } = row.original;
      if (Number(week) === 0)
        return <p className="text-black font-semibold text-lg">{week}%</p>;
      return (
        <span>
          {Number(week) > 0 ? (
            <div className="flex items-center gap-1 text-green-600 font-semibold text-lg line-clamp-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="rotate-180"
              >
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
              </svg>
              {week}%
            </div>
          ) : (
            <div className="flex items-center gap-1 text-red-600 font-semibold text-lg line-clamp-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
              </svg>
              {week.split("-")[1]}%
            </div>
          )}
        </span>
      );
    },
  },
  {
    accessorKey: "month",
    header: ({ column }) => {
      const handleSortIcon = () => {
        switch (column.getIsSorted()) {
          case "asc":
            return <ChevronUpIcon className="ml-2 h-4 w-4" />;
          case "desc":
            return <ChevronDownIcon className="ml-2 h-4 w-4" />;

          default:
            return <ChevronsUpDownIcon className="ml-2 h-4 w-4" />;
        }
      };

      return (
        <button
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap bg-none text-slate-500 font-bold text-lg"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          1 BLN
          {handleSortIcon()}
        </button>
      );
    },
    cell: ({ row }) => {
      const { month } = row.original;
      if (Number(month) === 0)
        return <p className="text-black font-semibold text-lg">{month}%</p>;
      return (
        <span>
          {Number(month) > 0 ? (
            <div className="flex items-center gap-1 text-green-600 font-semibold text-lg line-clamp-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="rotate-180"
              >
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
              </svg>
              {month}%
            </div>
          ) : (
            <div className="flex items-center gap-1 text-red-600 font-semibold text-lg line-clamp-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
              </svg>
              {month.split("-")[1]}%
            </div>
          )}
        </span>
      );
    },
  },
  {
    accessorKey: "year",
    header: ({ column }) => {
      const handleSortIcon = () => {
        switch (column.getIsSorted()) {
          case "asc":
            return <ChevronUpIcon className="ml-2 h-4 w-4" />;
          case "desc":
            return <ChevronDownIcon className="ml-2 h-4 w-4" />;

          default:
            return <ChevronsUpDownIcon className="ml-2 h-4 w-4" />;
        }
      };

      return (
        <button
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap bg-none text-slate-500 font-bold text-lg"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          1 THN
          {handleSortIcon()}
        </button>
      );
    },
    cell: ({ row }) => {
      const { year } = row.original;
      if (Number(year) === 0)
        return <p className="text-black font-semibold text-lg">{year}%</p>;
      return (
        <span>
          {Number(year) > 0 ? (
            <div className="flex items-center gap-1 text-green-600 font-semibold text-lg line-clamp-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="rotate-180"
              >
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
              </svg>
              {year}%
            </div>
          ) : (
            <div className="flex items-center gap-1 text-red-600 font-semibold text-lg line-clamp-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
              </svg>
              {year.split("-")[1]}%
            </div>
          )}
        </span>
      );
    },
  },
];
