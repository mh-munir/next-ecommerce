import { Product } from '@/lib/models/ProductModel'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductItem = ({product}:{product:Product}) => {
  return (
    <div className='card bg-white shadow-md rounded-md'>
        <figure>
            <Link href={`/product/${product.slug}`}>
                <Image 
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                    className='object-cover h-65 w-full'
                    priority={true}
                />
            </Link>
        </figure>
        <div className="card-body p-2">
            <Link href={`/product/${product.slug}`}>
              <h2 className='card-title text-lg font-medium'>{product.name}</h2>
           </Link>
           <p className='text-base'>{product.brand}</p>
           <div className='card-action flex items-center justify-between'>
            <span className='text-lg font-bold'>${product.price}</span>
           </div>
        </div>
    </div>
  )
}

export default ProductItem