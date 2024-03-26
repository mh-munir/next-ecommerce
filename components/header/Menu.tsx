import ussCartService from "@/lib/hooks/useCartStore";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiTwotoneShopping } from "react-icons/ai";

const Menu = () => {
    const {items} = ussCartService()
    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        setMounted(true)
    },[])
  return (
    <div>
        <ul className="flex items-center">
            <li>
                <Link className="shopping-bag relative" href="/cart">
                    <AiTwotoneShopping size={25} />
                    {mounted && items.length != 0 &&(
                        <div className=" absolute bg-white w-6 h-6 text-center rounded-full -top-3 -right-2 font-bold">
                            {items.reduce((a,c) => a + c.qty, 0)}{ ' ' }
                        </div>
                    )}
                </Link>
            </li>
            <li>
                <button type="button" className='btn btn-ghost rounded-btn'>Sign in</button>
            </li>
        </ul>
    </div>
  )
}

export default Menu