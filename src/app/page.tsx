"use client";
import Navbar from "@/components/navbar";
import About from "@/components/section/about";
import CryptoList from "@/components/section/crypto-list";
import TopMoverComponent from "@/components/section/top-mover";
import WhyCrypto from "@/components/section/why-crypto";
import { getTrades, useGetTrade } from "@/services/trade";
import { getWallets, useGetWallet } from "@/services/wallet";

export default async function Home() {
  const [wallets, trades] = await Promise.all([getWallets(), getTrades()]);

  const data =
    trades?.payload.map((trade) => {
      const baseCurrency = trade.pair.split("/")[0];
      const wallet = wallets?.payload.find(
        (wallet) =>
          wallet.currencyGroup.toLocaleLowerCase() ===
          baseCurrency.toLocaleLowerCase()
      );
      return {
        ...trade,
        ...wallet,
      };
    }) || [];

  return (
    <main className="space-y-8 pb-8">
      <Navbar />
      <div className="container flex flex-col gap-8">
        <h1 className="font-bold text-3xl">
          Harga Crypto dalam Rupiah Hari Ini
        </h1>

        <div className="flex flex-col gap-4">
          <p className="text-xl font-semibold">🔥 Top Movers (24 Jam)</p>
          <TopMoverComponent
            data={data
              .sort((a, b) => parseFloat(b.day) - parseFloat(a.day))
              .slice(0, 6)
              .map((trade) => ({
                name: trade?.name || "",
                latestPrice: trade.latestPrice,
                day: trade.day,
                icon: trade?.logo || "",
              }))}
          />
        </div>
        <CryptoList
          data={data.map((item) => ({
            id: item.currency_id || 0,
            icon: item?.logo || "",
            symbol: item.currencyGroup || "",
            name: item.name || "",
            amount: item.latestPrice,
            day: item.day,
            week: item.week,
            month: item.month,
            year: item.year,
          }))}
        />
        <About />
        <WhyCrypto />
      </div>
    </main>
  );
}
