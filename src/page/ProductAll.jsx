import React, { useEffect, useState } from 'react'
import ProductCard from '../conponent/ProductCard'

const ProductAll = () => {
    const [productList, setProductList] = useState([])
    const getProducts = async()=>{
        let url = "http://localhost:5000/products"
        let res = await fetch(url)
        let data = await res.json()
        // console.log("data",data)
        setProductList(data)
    } 
    useEffect(()=>{
        getProducts()
    },[])
  return (
    <div>
    {productList.map((item)=><ProductCard item={item}/>)}
    </div>
  )
}

export default ProductAll
