"use client";
import MarketBar from "@/app/components/MarketBar";
import { getTicker, getTickers } from "@/app/utils/httpClients";
import { useParams } from "next/navigation";

export default function Page() {
  const { market } = useParams();
  return (
    <div>
      <div>
        <MarketBar market={market as string} />
      </div>
    </div>
  );
}
