import React from 'react'

import Navbar from './Navbar'
import Search from './Search'


type Props = {}

const Header = (props: Props) => {
  return (

    <div className="container-fuild sticky-top bg-white">
      <header className="p-4 d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <Navbar />
        
        <a href="/" className="d-flex align-items-center  mb-2 mb-md-0 text-dark text-decoration-none">
          <img width="220px" src="./src/images/logo.png" alt="" />
        </a>
        <div className="col-md-3 text-end d-flex align-items-center">
          <Search />
          <div className="flex-shrink-0 dropdown">
            <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle mx-2" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="https://github.com/mdo.png" alt="mdo" width={32} height={32} className="rounded-circle" />
            </a>
            <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
              <li><a className="dropdown-item" href="signup">Sigin Up</a></li>
              <li><a className="dropdown-item" href="signin">Sigin In</a></li>
            </ul>
          </div>
        </div>

      </header>
    </div>



  )
}

export default Header