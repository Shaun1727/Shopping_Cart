import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner';
import Product from '../components/Product';
const Home = () => {
    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(false);
    const API = "https://fakestoreapi.com/products"
    async function fetchProductData(){
        setLoading(true);
        try{
            const res = await fetch(API);
            const data = await res.json();
            setProducts(data);
        }
        catch(err){
            console.log("Error fetching products data!")
            setProducts([])
        }
       setLoading(false);
    }
    useEffect(()=>{
        fetchProductData();
    },[])
  return (
    <div>
        {
            loading ? (<Spinner/>):
            products.length>0 ?
            (
                <div className='grid grid-cols-4 max-w-6xl mx-auto space-y-10 gap-x-5 p-2 min-h-[80vh]'>
                    {
                    products.map((product)=>(
                        <Product key={product.id} product={product}/>
                    )) 
                    }
                </div>
            )
            :
            (
                <div className='flex items-center justify-center '>
                    <p>No Products Available</p>
                </div>
            )
        }
    </div>
  )
}

export default Home