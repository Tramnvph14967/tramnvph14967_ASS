import React from 'react'

import Navbar from './Navbar'
import Search from './Search'


type Props = {}

const Header = (props: Props) => {
  return (
    <div className="header">
        <Navbar />

        <Search />
    </div>
       
    
  )
}

export default Header