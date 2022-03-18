import React from 'react'
import { NavLink } from 'react-router-dom';
type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className="main">
      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="#" className="nav-link px-2 link-dark  btn-outline-light px-2">
          <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-house-heart-fill" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.707L8 2.207l6.646 6.646a.5.5 0 0 0 .708-.707L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z" />
          <path fillRule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Zm0 5.189c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.691 0-5.018Z" />
        </svg>
        </a></li>
        <li><a href="#" className="nav-link px-2 link-dark  btn-outline-light">Trademark</a></li>
        <li><a href="#" className="nav-link px-2 link-dark  btn-outline-light">Watch`s</a></li>
        <li><a href="#" className="nav-link px-2 link-dark  btn-outline-light">News</a></li>
        <li><a href="#" className="nav-link px-2 link-dark  btn-outline-light">Contact</a></li>

      </ul>
    </div>
  )
}

export default Navbar