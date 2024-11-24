import { ResponseType } from "@/types/response";
import { TradeType } from "@/types/trade";
import axiosLib from "../../lib/axios";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export const getTradeKey = "tradeKey";

export interface TradeResponses extends ResponseType {
  payload: TradeType[];
}

export const getTrades = async (): Promise<TradeResponses> => {
  try {
    const { data } = await axiosLib.get<TradeResponses>(`/trade/price-changes`);
    return data;
  } catch (error) {
    console.log(error);
    return {
      code: "error",
      message: "Failed to fetch data",
      payload: [],
    };
  }
};

export function useGetTrade(): UseQueryResult<TradeResponses> {
  return useQuery<TradeResponses>({
    queryKey: [getTradeKey],
    queryFn: () => getTrades(),
    // refetchInterval: 10000,
  });
}
