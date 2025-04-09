import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({item}) => {
    // console.log("item",item)
    // \u00A0 공간유지
    const navigate = useNavigate()
    const showDetail=()=>{
      // console.log("zmfflr?")
      navigate(`/product/${item?.id}`)
    }
  return (
      <div className='card'>
        <div className='Box'>
          <img src={item?.img} alt="" srcset="" />
        </div>
        <div className='details'>
          <div className='detail-top'>
            <span>{item?.new===true?"✨ new":""}</span>
            <div>
              <FontAwesomeIcon className='faHeart' icon={faHeart}/>
            </div>
          </div>
          <span>
            <em>{item?.choice===true? "Conscious choice":"\u00A0"}</em>
            <div>{item?.title}</div>
            <div>₩ {Number(item?.price).toLocaleString("ko-KR")}</div>
            {/* <div>{item?.new===true?"신제품":"\u00A0"}</div> */}
          </span>
          <Button onClick={showDetail} className='detail-button' variant='danger'>제품보러가기</Button>
        </div>
      </div>
  )
}

export default ProductCard
