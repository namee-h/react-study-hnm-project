import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap'


const Navbar = () => {
    const [showInput, setShowInput]=useState(false)
    const menuList = ["Women", "Men", "Baby", "Kids", "Home", "Sale"]
  return (
    <div className='nav-area'>
      <div className='nav-login-area'>
        {/* 모바일 서치 */}
        <div className='m-nav-search-area'>
          <div className='faSearch' onClick={()=>setShowInput(!showInput)}>
            <FontAwesomeIcon icon={faSearch}/>
          </div>
          <div className={`m-nav-input ${showInput? 'active':''}`}>
            <div className='nav-input-area'>
              <input className='nav-input' type="text" required/>
              <label className='nav-label'>제품검색</label>
              <span className='nav-span'></span>
            </div>
            <Button variant='danger'>검색</Button>
          </div>
        </div>
        {/* 모바일 서치 */}
        <div className='nav-login'>
          <FontAwesomeIcon icon={faUser} size="sm"/>
          <div>로그인</div>
        </div>
      </div>
      <div className='nav-logo'>
        <img
            width={100}
            src="https://blog.kakaocdn.net/dn/Yt80C/btqDeJAYUBo/JQbTuukRladq2AUOeqgiEK/img.jpg"
            />
      </div>
      <div className='nav-menu'>
        <ul className='nav-menu-list-area'>
            {menuList.map((menu,index)=>
            <li className='menu-item' key={index}>{menu}</li>
            )}
        </ul>
        <div className='nav-search-area'>
            <div className='nav-input-area'>
                <input className='nav-input' type="text" required/>
                <label className='nav-label'>제품검색</label>
                <span className='nav-span'></span>
            </div>
            <div className='nav-search-icon'>
                <FontAwesomeIcon icon={faSearch}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
