import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard'
import { Col, Container, Row } from 'react-bootstrap'

const ProductAll = () => {
    const [productList, setProductList] = useState([])
    const getProducts = async()=>{
        // let url = "http://localhost:5000/products"
        let url = "https://my-json-server.typicode.com/namee-h/react-study-db.json/products"
        let res = await fetch(url)
        let data = await res.json()
        // console.log("data",data)
        setProductList(data)
    } 
    useEffect(()=>{
        getProducts()
    },[])
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
