"use client";
import Navbar from "@/components/navbar";
import About from "@/components/section/about";
import TopMoverComponent from "@/components/section/top-mover";
import WhyCrypto from "@/components/section/why-crypto";
import TopMoverCard from "@/components/top-mover-card";
import { getTrades, useGetTrade } from "@/services/trade";
import { getWallets, useGetWallet } from "@/services/wallet";

export default function Home() {
  const { data: wallets } = useGetWallet();
  const { data: trades } = useGetTrade();

  const topMovers =
    trades?.payload
      .sort((a, b) => parseFloat(b.day) - parseFloat(a.day))
      .map((trade) => {
        const baseCurrency = trade.pair.split("/")[0];
        const wallet = wallets?.payload.find(
          (wallet) =>
            wallet.currencySymbol.toLocaleLowerCase() ===
            baseCurrency.toLocaleLowerCase()
        );
        return {
          name: wallet?.name || "",
          latestPrice: trade.latestPrice,
          day: trade.day,
          icon: wallet?.logo || "",
        };
      })
      .slice(0, 6) || [];

  return (
    <main className="space-y-8 pb-8">
      <Navbar />
      <div className="container flex flex-col gap-8">
        <h1 className="font-bold text-3xl">
          Harga Crypto dalam Rupiah Hari Ini
        </h1>

        <div className="flex flex-col gap-4">
          <p className="text-xl font-semibold">🔥 Top Movers (24 Jam)</p>
          <TopMoverComponent data={topMovers} />
        </div>
        <About />
        <WhyCrypto />
      </div>
    </main>
  );
}
