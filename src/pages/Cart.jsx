import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem'
import { Link } from 'react-router-dom'
const Cart = () => {
  const {cart} = useSelector((state)=>(state))
  const [totalAmount,setTotalAmount] = useState(0);

  useEffect(()=>{
    setTotalAmount(cart.reduce((acc,curr)=>(acc+curr),0))
  },[cart])
  return (
    <div>
      {
        cart.length>0 ?
        (
        <div className='flex max-w-6xl mx-auto space-y-10 gap-x-5 p-2 min-h-[80vh]'>
              <div>
              {
                cart.map((product,index)=>{
                  return (<CartItem key={product.id} product={product} />)
                })
              }
          </div>
          <div>
            <div>Your cart</div>
            <div>Summary</div>
            <p>
              <span>Total items: {cart.length}</span>
            </p>
          </div>
          <div>
            <p>Total amount: {totalAmount}</p>
            <button>
              Check Out
            </button>
          </div>
        </div>
          
        )
        :
        (
          <div>
              <h2>Cart is empty</h2>
              <Link to="/">
                <button>Shop now</button>
              </Link>
          </div>
        )
      }
    </div>
  )
}

export default Cart