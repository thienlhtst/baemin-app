import Image from "next/image";
import React from "react";

export default function DetailsCart({ Details }: {
    Details: any[]
}) {

    return (
        <>
        {Details.map((items, index) => (
            <div className="w-full flex flex-col  bg-white  ">
                
                    <div className=" flex flex-row my-7 ml-8 items-center gap-3">
                        <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded   dark:ring-offset-gray-800 " />
                        <span className="text-base font-normal"> {items.name}</span>
                        <div className=" bg-beamin p-1 rounded-md">
                            {items.quandoitac && (
                                <span className="text-sm font-normal text-white">
                                    Quán đối tác
                                </span>
                            )}
                        </div>
                    </div>
                    <div className=" w-full border-t border-b border-solid border-gray-600 py-3">
                            {items.items.map((item: any, index: any) => (
                                <div key={index} className={index === items.items.length - 1 ? "w-full grid grid-cols-12" : "w-full grid grid-cols-12 border-b border-solid border-x-gray-300"}
                                >
                                    <div className="pl-8  col-span-4 flex items-center flex-row gap-3">
                                        <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded   dark:ring-offset-gray-800 " />
                                        <div className="relative h-36 w-36">
                                            <Image layout="fill" objectFit="cover" src={item.img} alt={""} />
                                        </div>
                                        <div className="flex flex-col gap-3">
                                            <span className="text-base ">{item.namefood}</span>
                                            <span className="text-sm text-gray-600">{item.description}</span>
                                        </div>
                                    </div>
                                    <div className="col-span-2 flex items-center justify-center flex-row gap-3">
                                        ₫{item.price}
                                    </div>
                                    <div className="col-span-2 flex items-center justify-center flex-row gap-3">
                                        <input type="number" id="quantity" className="w-16 text-center border border-gray-300 rounded" defaultValue={item.quantity} min="1" max="100" />

                                    </div>
                                    <div className="col-span-2 flex items-center justify-center flex-row gap-3">
                                        ₫{item.totalprice}
                                    </div>
                                    <div className="col-span-2 flex items-center justify-center flex-row gap-3">
                                        <span className=" hover:text-red-600 cursor-pointer">Xóa</span>
                                    </div>

                                </div>
                            ))}
                        </div>
                       
                
            </div>
            ))}
            <div className=" flex flex-row fixed bottom-0  w-[90.6%]  mr-16  h-16 bg-white items-center  " >
                <div  className="flex flex-row gap-2 w-1/2 h-full items-center ml-10">
                    <div  className="cursor-pointer hover:text-red-600 " >Hủy</div>
                    <div> Quán Đã chọn: </div>
                    <div> The Chicken Gang</div>
                </div>
                <div className="flex flex-row gap-2 w-1/2 h-full items-center justify-end pr-2"> 
                <div className=""> Tổng thanh toán (0 Sản phẩm):
                </div>
                <div className="text-red-600" >₫0 </div>
                <div>
                    <button className="bg-beamin text-white w-40 h-10 rounded-md hover:brightness-105" >Thanh toán</button>
                </div>


                </div>

            </div>


        </>
    )

}