import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard'
import { Col, Container, Row, Spinner } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'

const ProductAll = ({loading, setLoading}) => {
    const [productList, setProductList] = useState([])
    const [query,setQuery] = useSearchParams()
   
    const getProducts = async()=>{
         setLoading(true)
        // let url = "http://localhost:5000/products"
        let searchQuery =query.get('q') || ""
        // console.log("쿼리값은?",searchQuery)
        let url = `https://my-json-server.typicode.com/namee-h/react-study-db.json/products?q=${searchQuery}`
        
        let res = await fetch(url)
        let data = await res.json()
        // console.log("data",data)
        setProductList(data)
        setLoading(false)
    } 
    useEffect(()=>{
        getProducts()
    },[query])
  return (
    <div className='mb-5'>
      <Container className='main'>
        <div className={`loading-spinners ${loading? "":"display-none"}`}>
          <Spinner animation="grow" variant="danger"/>
          <Spinner animation="grow" variant="danger"/>
          <Spinner animation="grow" variant="danger"/>
          <Spinner animation="grow" variant="danger"/>
          <Spinner animation="grow" variant="danger"/>
        </div>
        {productList.length === 0 ? (<div className={`no-result text-center mt-5 fs-4 text-muted ${loading? "display-none":""}`}>찾으시는 제품이 없습니다🥲</div>) : (
        <Row className=' product-row'>
            {productList.map((item)=>
            <Col className={`card-col ${loading? "display-none":""}`} lg={3} md={6} sm={12}>
              <ProductCard item={item}/>
            </Col>
            )}
        </Row>
        )}
      </Container>
    </div>
  )
}

export default ProductAll
