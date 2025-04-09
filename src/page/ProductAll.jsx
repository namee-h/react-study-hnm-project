import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard'
import { Col, Container, Row } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'

const ProductAll = () => {
    const [productList, setProductList] = useState([])
    const [query,setQuery] = useSearchParams()
    const getProducts = async()=>{
        // let url = "http://localhost:5000/products"
        let searchQuery =query.get('q') || ""
        // console.log("쿼리값은?",searchQuery)
        let url = `https://my-json-server.typicode.com/namee-h/react-study-db.json/products?q=${searchQuery}`
        let res = await fetch(url)
        let data = await res.json()
        // console.log("data",data)
        setProductList(data)
    } 
    useEffect(()=>{
        getProducts()
    },[query])
  return (
    <div className='mb-5'>
      <Container className=''>
        <Row className=' product-row'>
            {productList.map((item)=>
            <Col className=' card-col' lg={3} md={6} sm={12}>
              <ProductCard item={item}/>
            </Col>
            )}
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll
