import HeaderNav from "@/components/headerNav";
import ScrollBar from "@/components/scrollBar";
import ScrollFood from "@/components/scrollFood";
import { ShoppingCartOutlined } from "@ant-design/icons";
import Image from "next/image";
import React from "react";
import DetailsCart from "./detailsCart";

export default function Home() {
    const detail:any =[
        {
        name:'Chicken Gang',
        quandoitac:true,
        items:[
            {
                namefood:'Gà rán',
                img:'/images/Ga.png',
                description:'Chiên bột',
                price:280000,
                quantity:2,
                totalprice:280000
            },
            {
                namefood:'Gà rán',
                img:'/images/Ga.png',
                description:'Chiên bột',
                price:280000,
                quantity:2,
                totalprice:280000
            }
        ]
    },
    {
        name:'Chicken Gang',
        quandoitac:true,
        items:[
            {
                namefood:'Gà rán',
                img:'/images/Ga.png',
                description:'Chiên bột',
                price:280000,
                quantity:2,
                totalprice:280000
            },
            {
                namefood:'Gà rán',
                img:'/images/Ga.png',
                description:'Chiên bột',
                price:280000,
                quantity:2,
                totalprice:280000
            }
        ]
    }


]
    return (<>
        <div className="flex flex-row w-full h-20 bg-white ">
            <div className="w-1/2 h-full flex flex-row  items-center gap-3">
                <div className="ml-10 text-4xl  text-beamin font-bold" >
                    <ShoppingCartOutlined />
                </div>
                <div className="text-2xl  text-beamin ">
                    |
                </div>
                <div className="text-3xl  text-beamin font-bold">
                    Giỏ hàng
                </div>
            </div>
            <div className="w-1/2 h-full flex   items-center gap-3">


            </div>
        </div>
        <div className="mt-4 px-16 flex flex-col gap-4  pb-16">
            <div className=" w-full h-16  bg-white  grid grid-cols-12">
                <div className="pl-8  col-span-4 flex items-center flex-row gap-5">
                    <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded   dark:ring-offset-gray-800 " />
                    <span className="text-base font-normal" > Món Ăn</span>
                </div>
                <div className="col-span-2 flex items-center justify-center flex-row gap-3">
                    <span className="text-base font-normal  text-gray-600" >Đơn giá</span>
                </div>
                <div className="col-span-2 flex items-center justify-center flex-row gap-3">
                    <span className="text-base font-normal  text-gray-600" >Số lượng</span>
                </div>
                <div className="col-span-2 flex items-center justify-center flex-row gap-3">
                    <span className="text-base font-normal  text-gray-600" >Số tiền</span>
                </div>
                <div className="col-span-2 flex items-center justify-center flex-row gap-3">
                    <span className="text-base font-normal  text-gray-600" >Thao tác</span>
                </div>
            </div>
           <DetailsCart Details={detail}/>
        </div>

    </>)
}