import { FormatToRp } from "@/lib/utils";
import { PlayIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const TopMoverCard = ({
  data,
}: {
  data: {
    name: string;
    latestPrice: string;
    day: string;
    icon: string;
  };
}) => {
  return (
    <div className="rounded-lg p-4 flex flex-col gap-2 select-none hover:bg-slate-100 transition-colors">
      <div className="flex items-center gap-2">
        <Image
          src={data.icon}
          alt={data.name + " icon"}
          width={24}
          height={24}
        />
        <p className="text-xl font-semibold line-clamp-1">{data.name}</p>
      </div>
      <span className="text-slate-500 line-clamp-1">
        {FormatToRp(data.latestPrice)}
      </span>
      <span>
        {parseFloat(data.day) > 0 ? (
          <div className="flex items-center gap-1 text-green-600 font-semibold text-xl line-clamp-1">
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
            {data.day}%
          </div>
        ) : (
          <div className="flex items-center gap-1 text-red-600 font-semibold text-xl line-clamp-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
            {data.day}%
          </div>
        )}
      </span>
    </div>
  );
};

export default TopMoverCard;
