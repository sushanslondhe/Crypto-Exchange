import { Trade } from "@/app/utils/types";
import { format } from "date-fns";

export default function TradesTable({
  trades,
  prevPrice,
}: {
  trades: Trade[];
  prevPrice: any;
}) {
  let latestTrades = trades;
  const formatTime = (timestamp: number) => {
    return format(new Date(timestamp), "HH:mm:ss");
  };

  return (
    <div>
      <div className=" overflow-y-scroll no-scrollbar flex flex-col gap-2">
        {latestTrades.map((x) => (
          <div
            key={x.price}
            className=" flex justify-between  items-start text-sm "
          >
            <div
              className={
                x.price > prevPrice ? "text-green-500" : "text-red-600"
              }
            >
              {x.price}
            </div>
            <div className=" text-slate-300">{x.quantity}</div>
            <div className=" text-gray-500">{formatTime(x.timestamp)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
