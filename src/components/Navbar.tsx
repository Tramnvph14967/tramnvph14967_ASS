import React from 'react'
import { NavLink } from 'react-router-dom';
type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className="main">

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" className="nav-link px-2 link-dark  btn-outline-light">Trang chủ</a></li>
          <li><a href="#" className="nav-link px-2 link-dark  btn-outline-light">Thương Hiệu</a></li>
          <li><a href="#" className="nav-link px-2 link-dark  btn-outline-light">Đồng Hồ</a></li>
          <li><a href="#" className="nav-link px-2 link-dark  btn-outline-light">Tin Tức</a></li>
          <li><a href="#" className="nav-link px-2 link-dark  btn-outline-light">Liên Hệ</a></li>

        </ul>
    </div>
  )
}

export default Navbar