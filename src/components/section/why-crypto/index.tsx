import Link from "next/link";
import { WhyCryptoConstants } from "./consts";
import { ArrowRightIcon } from "lucide-react";

const WhyCrypto = () => {
  return (
    <div className="grid md:grid-cols-3 gap-4 h-full">
      {WhyCryptoConstants.map((item, index) => (
        <div className="p-2 flex flex-col gap-4" key={item.title + index}>
          <div className="">{item.icon}</div>
          <h3 className="font-semibold text-xl">{item.title}</h3>
          <p className="text-slate-500">{item.description}</p>
          <Link href={"/"} className="no-underline inline-flex gap-2">
            Pelajari Lebih Lanjut <ArrowRightIcon />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default WhyCrypto;
