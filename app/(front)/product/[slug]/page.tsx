import AddToCart from "@/components/products/AddToCart"
import data from "@/lib/data"
import Image from "next/image"
import Link from "next/link"
import { Metadata } from 'next'


export const metadata: Metadata = {
    title: 'Product Details',
  }
   
const ProductDetails = ({params}: {params: {slug: string}}) => {
    const product = data.products.find(x=>x.slug===params.slug)
    if(!product){
        return <div>Product Not Found</div>
    }
  return (
   <main className="py-5 min-h-screen bg-white">
     <div className="max-w-[1140px] mx-auto px-2">
     <div className="py-5">
        <Link href="/">Back to products</Link>
    </div>
        <div className="grid md:grid-cols-2 gap-10">
            <div className="w-full">
                <Image 
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                    className='object-cover h-auto w-full'
                />
            </div>
            <div className="">
                <div className="space-y-4">
                   <h2 className="text-2xl font-semibold">{product.name}</h2>
                    <p className="text-lg font-medium">{product.rating} of {product.numReviews} Reviews</p>
                    <p className="text-lg font-medium flex gap-5"><span className="w-32">Brand:</span> <span>{product.brand}</span></p>
                    <p className="text-lg font-medium flex gap-5"><span className="w-32">Price: </span> <span>{product.price}</span></p>
                    <p className="text-lg font-medium flex gap-5"> <span className="w-32">Status:</span> {product.countInStock> 0 ? 'In Stock': 'Sold Out'}</p>
                    {product.countInStock !== 0 && (
                        <AddToCart 
                        item={{...product, qty: 0, color: '', size: ''}} 
                        
                        />
                    )}
                  <div className="divider"></div>
                  <p className="text-base font-normal">Description: {product.description}</p>
                </div>
            </div>
        </div>
     </div>
   </main>
  )
}

export default ProductDetails