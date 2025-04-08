import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
    const menuList = ["Women", "Men", "Baby", "Kids", "Home", "Sale"]
  return (
    <div>
      <div className='nav-login'>
        <FontAwesomeIcon icon={faUser} size="sm"/>
        <div>로그인</div>
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
            <li key={index}>{menu}</li>
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
