import { ResponseType } from "@/types/response";
import { TradeType } from "@/types/trade";
import axiosLib from "../../lib/axios";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { WalletType } from "@/types/wallet";

export const getWalletKey = "walletKey";

export interface WalletResponses extends ResponseType {
  payload: WalletType[];
}

export const getWallets = async (): Promise<WalletResponses> => {
  try {
    const { data } = await axiosLib.get<WalletResponses>(
      "/wallet/supportedCurrencies"
    );
    return data;
  } catch (error) {
    // console.log(error);
    return {
      code: "error",
      message: "Failed to fetch data",
      payload: [],
    };
  }
};

export function useGetWallet(): UseQueryResult<WalletResponses> {
  return useQuery<WalletResponses>({
    queryKey: [getWalletKey],
    queryFn: () => getWallets(),
  });
}
