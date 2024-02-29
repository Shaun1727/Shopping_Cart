import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {toast} from "react-hot-toast"
import {add,remove} from "../redux/slices/CartSlice"
const Product = ({product}) => {
    const {cart} = useSelector((state)=>(state))
    const dispatch = useDispatch()
    function addToCart(){
        dispatch(add(product))
        toast.success("Item added to cart")
    }
    function removeFromCart(){
        dispatch(remove(product.id))
        toast.success("Item removed to cart")
    }
  return (
    <div className='flex flex-col items-center justify-between
    hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded outline'>
        <div>
            <p className='text-gray-700 font-semibold text-lg truncate text-left w-40 mt-1'>{product.title}</p>
        </div>
        <div>
            <p className='w-40 text-gray-400 font-normal text-[10px] text-left'>{product.description.split(" ").slice(0,10).join(" ")+"..."}</p>
        </div>
        <div className='h-[180px]'>
            <img className="h-full w-full" src={product.image} />
        </div>
        <div className='flex justify-between gap-12 items-center w-full'>
            <div>
            <p className='text-green-600 font-semibold'>${product.price}</p>
            </div>
            <div>
                {
                    cart.some((p)=>(p.id==product.id))?
                    (
                        <button className="font-semibold text-[12px] text-gray-700 border-2 border-gray-700 rounded-full p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in" onClick={removeFromCart}>REMOVE ITEM</button>
                    )
                    :
                    (
                        <button className="font-semibold text-[12px] text-gray-700 border-2 border-gray-700 rounded-full p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in" onClick={addToCart}>ADD TO CART</button>
                    )
                }
            </div>
        </div>
       
    </div>
  )
}

export default Product