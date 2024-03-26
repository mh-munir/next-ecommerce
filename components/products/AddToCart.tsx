"use client"
import ussCartService from "@/lib/hooks/useCartStore";
import { OrderItem } from "@/lib/models/OrderModel";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AddToCart({item}:{item: OrderItem}){
    const router = useRouter()
    const {items, increase, decrease} = ussCartService()
    const [existItem, setExistItem] = useState<OrderItem | undefined> ()
    useEffect(()=> {
        setExistItem(items.find((x) => x.slug === item.slug))
    }, [item, items])

    const AddToCartHandler = () =>{
        increase(item)
        decrease(item)
    }

    return existItem ? (
        <div className="flex items-center gap-5">
            <button className="text-lg font-bold flex-shrink-0btn bg-transparent w-10 text-center border h-10 flex justify-center items-center rounded-full" onClick={() => decrease(existItem)}
             type="button">
                -
            </button>
            <span className="w-10 text-lg font-bold text-center border h-10 flex justify-center items-center rounded-full">{existItem.qty}</span>
            <button 
                className="text-lg font-bold flex-shrink-0btn bg-transparent w-10 text-center border h-10 flex justify-center items-center rounded-full" type="button" onClick={() =>increase(existItem)}>
                    +
            </button>
        </div>
    ):(
        <button 
        onClick={AddToCartHandler} 
        className="btn btn-primary w-48">
            Add To Card
        </button>
    )
}