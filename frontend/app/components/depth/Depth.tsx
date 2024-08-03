import { getDepth, getTicker, getTrades } from "@/app/utils/httpClients";
import { useEffect, useState } from "react";
import AsksTable from "./AsksTable";
import BidsTable from "./BidsTable";
import TradesTable from "../trades/TradesTable";

export function Depth({ market, isOpen }: { market: string; isOpen: any }) {
  // get Depth function -> askstable, bidstable
  // get trades
  const [asks, setAsks] = useState<[string, string][]>();
  const [bids, setBids] = useState<[string, string][]>();
  const [price, setPrice] = useState<string>();
  const [trades, setTrades] = useState<any>();

  useEffect(() => {
    getDepth(market).then((d) => {
      setAsks(d.asks);
      setBids(d.bids);
    });
    getTicker(market).then((x) => {
      setPrice(x.lastPrice);
    });
    getTrades(market).then((val) => {
      setTrades(val);
    });
  }, []);
  {
    if (isOpen) {
      return (
        <div className="">
          <div className="  w-[290px] mt-5 flex flex-col gap-3">
            <TableHeader />
            {asks && <AsksTable asks={asks} />}
            {price && <div>{price}</div>}
            {bids && <BidsTable bids={bids} />}
          </div>
        </div>
      );
    }
    return (
      <div className="w-[300px]">
        <div className=" flex  font-light text-sm gap-20 my-2 ">
          <div className="">Price</div>
          <div>Quantity</div>
        </div>
        {trades && <TradesTable trades={trades} prevPrice={price as string} />}
      </div>
    );
  }
}
function TableHeader() {
  return (
    <div className=" flex flex-col  gap-2">
      <div className="  w-full flex justify-between text-sm text-white">
        <div className=" font-bold">Price</div>
        <div className=" font-light">Size</div>
        <div className=" font-light">Total</div>
      </div>
    </div>
  );
}
