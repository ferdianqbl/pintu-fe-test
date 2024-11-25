import React from "react";
import { columnsCryptoList, CryptoListItemType } from "./column";
import { DataTableCryptoList } from "./data-table";

const CryptoList = ({ data }: { data: CryptoListItemType[] }) => {
  return <DataTableCryptoList columns={columnsCryptoList} data={data} />;
};

export default CryptoList;
