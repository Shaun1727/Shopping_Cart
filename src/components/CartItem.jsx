import React from 'react'
import { toast } from 'react-hot-toast';
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from 'react-redux'
import {remove} from "../redux/slices/CartSlice"
const CartItem = ({product}) => {
  const dispatch = useDispatch();

  function removeFromCart(){
      dispatch(remove(product.id))
      toast.success("Item removed from Cart")
  }
  return (
    <div>
      <div>
        <img src={product.image} />
      </div>
      <div>
        <h1>{product.title}</h1>
        <h1>{product.description}</h1>
        <div>
          <p>{product.price}</p>
          <div onClick={removeFromCart}><FcDeleteDatabase/></div>
        </div>
      </div>
    </div>
  )
}

export default CartItem