"use client";
import MarketBar from "@/app/components/MarketBar";
import { TradeView } from "@/app/components/TradeView";
import { getTicker, getTickers } from "@/app/utils/httpClients";
import { useParams } from "next/navigation";

export default function Page() {
  const { market } = useParams();
  return (
    <div className="flex flex-row flex-1">
      <div className=" flex flex-col flex-1">
        <MarketBar market={market as string} />
        <div className="  border-y h-[620px] border-slate-900 text-white flex flex-row ">
          <div className="ml-3 mt-[6px] h-full  w-[80%]">
            <TradeView market={market as string} timeFrame="30m" />
          </div>
          <div className="border w-[1px] flex flex-col border-slate-800 border-1">
            {" "}
          </div>
          <div className=" w-[30%]">Depth</div>
        </div>

        <div />
      </div>
      <div className="border border-slate-700 min-h-screen w-[18%] flex flex-col text-white">
        <div>SwapUI</div>
      </div>
    </div>
  );
}
