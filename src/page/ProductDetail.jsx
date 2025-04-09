import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Dropdown, Row } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'

const ProductDetail = () => {
  let {id} = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState(null)
  const [selectedSize, setSelectedSize] = useState("사이즈 선택")
  const getProductDetail= async()=>{
    let url =`https://my-json-server.typicode.com/namee-h/react-study-db.json/products/${id}`
    let res = await fetch(url)
    let data = await res.json()
    // console.log("ddd",data)
    setProduct(data)
    
  }
  const goToProductsAll=()=>{
    navigate('/')
  }
  useEffect(()=>{
    getProductDetail()
  },[])
  return (
    <Container className='product-box mb-5'>
      <Row>
        <Col className='product-img-area'>
          <img className='product-img' src={product?.img} alt="" srcset="" />
        </Col>
      
        <Col className='mt-3'>
        <div className='product-top'>
            <span>{product?.new===true?"✨ new":""}</span>
            <div>
              <FontAwesomeIcon className='faHeart' icon={faHeart}/>
            </div>
         </div>
        <div className='product-info'>
            <em>{product?.choice===true? "Conscious choice":"\u00A0"}</em>
            <div>{product?.title}</div>
            <div>₩ {Number(product?.price).toLocaleString("ko-KR")}</div>

            <Dropdown>
              <Dropdown.Toggle className='size-toggle' variant="danger" id="dropdown-basic">
                {selectedSize}
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ width: '120px', minWidth: 'unset' }}
                 className='size-toggle-menu'>
               {product?.size.map((size,index)=>(
                <Dropdown.Item key={index} onClick={()=>setSelectedSize(size)}>
                  {size}
                </Dropdown.Item>
               ))}
              </Dropdown.Menu>
            </Dropdown>
            <div className='product-btn-area'>
              <Button variant='danger' className='cart-btn' onClick={goToProductsAll}> ⇠ 뒤로가기</Button>
              <Button variant='danger' className='cart-btn'>+ 담기</Button>
            </div>
        </div>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail
