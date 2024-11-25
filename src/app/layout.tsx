import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Providers from "@/lib/providers";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getWalletKey, getWallets } from "@/services/wallet";
import { getTrades } from "@/services/trade";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Pintu Market",
  description: "Pintu Market is a simple crypto market",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [getWalletKey],
    queryFn: getWallets,
  });

  await queryClient.prefetchQuery({
    queryKey: ["tradeKey"],
    queryFn: getTrades,
  });

  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <HydrationBoundary state={dehydrate(queryClient)}>
            {children}
          </HydrationBoundary>
        </Providers>
      </body>
    </html>
  );
}
