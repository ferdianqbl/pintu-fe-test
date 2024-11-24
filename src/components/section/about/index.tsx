import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div className="md:p-4 md:rounded-lg md:border border-slate-200 space-y-4">
      <h2 className="font-semibold text-xl">Tentang Cryptocurrency</h2>
      <p className="text-slate-500">
        Cryptocurrency adalah aset mata uang digital yang diamankan menggunakan
        metode cryptography diatas open database yang disebut blockchain.
        Terdapat 2 jenis crypto, yaitu coin dan token. Coin adalah
        cryptocurrency yang berdiri diatas blockchain-nya sendiri dengan contoh
        bitcoin dan ethereum, sedangkan token adalah cryptocurrency yang
        “menumpang” diatas blockchain dari native aset lain.
      </p>
      <Link
        href={"/"}
        className="no-underline border border-black px-3 py-1 rounded-full inline-flex items-center gap-2"
      >
        Pelajari Lebih Lanjut <ArrowRightIcon />
      </Link>
    </div>
  );
};

export default About;
