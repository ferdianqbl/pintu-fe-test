export interface WalletItemType {
  currency_id: number;
  currencyGroup: string;
  tokenSymbol: string;
  decimal_point: number;
  tokenType: string;
  blockchain: string;
  explorer: string;
  listingDate: Date;
  blockchainName: string;
  logo: string;
}
export interface WalletType {
  currency_id: number;
  currencyGroup: string;
  color: string;
  currencySymbol: string;
  name: string;
  logo: string;
  decimal_point: number;
  listingDate: Date;
  wallet: WalletItemType[];
  is_limit_order_enabled: boolean;
  is_upcoming: boolean;
}
