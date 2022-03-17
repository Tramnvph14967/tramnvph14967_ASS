import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { NavLink, Route, Routes  } from 'react-router-dom'

import Home from './pages/Home'
import Product from './pages/Product'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          <li>
            <NavLink className='' to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className='' to="product">Product</NavLink>
          </li>
        </ul>
        <p>Nguyễn Văn Trăm Ph14967</p>
        <main>
          <Routes>
            <Route path='/' element={< Home />} />
            <Route path='product' element={< Product />} />
          </Routes>
        </main>
      </header>
    </div>
  )
}

export default App
