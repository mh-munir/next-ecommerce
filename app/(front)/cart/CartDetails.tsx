"use client"
import { useRouter } from "next/navigation"; 
import ussCartService from "@/lib/hooks/useCartStore";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const CartDetails = () => {
    const router = useRouter()
    const {items, itemsPrice, decrease, increase} = ussCartService()

    const [mounted, setMounted] = useState(false)
    useEffect(() =>{
        setMounted(true)
    },[])
    
    if(!mounted)
    return <></>

    return(
        <div>
            <h2 className="py-4 text-2xl">Shopping cart</h2>
            {
                items.length === 0 ? (
                    <div>
                        Cart i empty. <Link href='/'>Go shopping</Link>
                    </div>
                ):(
                    <div className="grid md:grid-cols-4 md:gap-5">
                         <div className="overflow-x-auto md:col-span-3">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Item</th>
                                        <th>Qty</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {items.map((item)=>(
                                        <tr key={item.slug}>
                                            <td>
                                                <Link href={`/product/${item.slug}`} className="flex items-center">
                                                    <Image 
                                                    src={item.image}
                                                    alt={item.name}
                                                    width={50} 
                                                    height={50}
                                                    />
                                                    <span className="px-2">
                                                        {item.name}
                                                    </span>
                                                </Link>
                                            </td>
                                            <td className="flex">
                                                <button className="text-lg font-bold flex-shrink-0btn bg-transparent w-10 text-center border h-10 flex justify-center items-center rounded-full" onClick={() => decrease(item)}
                                                        type="button">
                                                        -
                                                </button>
                                                <span className="w-10 text-lg font-bold text-center border h-10 flex justify-center items-center rounded-full">{item.qty}</span>
                                                <button 
                                                        className="text-lg font-bold flex-shrink-0btn bg-transparent w-10 text-center border h-10 flex justify-center items-center rounded-full" type="button" onClick={() =>increase(item)}>
                                                        +
                                                </button>
                                            </td>
                                            <td>
                                                ${item.price}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="card bg-base-300">
                            <div className="card-body">
                                <ul>
                                    <li>
                                        <div>
                                            Subtotal ({items.reduce((a, c) => a + c.qty, 0)}): $ {itemsPrice}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default CartDetails;