import HeaderNav from "@/components/headerNav";
import ScrollBar from "@/components/scrollBar";
import ScrollFood from "@/components/scrollFood";
import Image from "next/image";
import React from "react";

export default function Home() {

    return (<>
        <div className="flex flex-row w-full bg-white rounded-2xl">
            <div className="w-1/2">
                <Image src="/images/Ga.png" width={100} height={100} alt={""} />
                
            </div>
            <div className="w-1/2">
                    <div className="text-lg font-bold">Gà Rán</div>
                    <div className="text-sm">Thức ăn nhanh</div>
            </div>

        </div>


    </>)
}