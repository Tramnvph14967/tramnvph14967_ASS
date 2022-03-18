import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { NavLink, Route, Routes  } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

import AdminLayouts from './pages/layouts/AdminLayouts'
import WebsiteLayout from './pages/layouts/WebsiteLayout'

import Home from './pages/Home'
import Product from './pages/Product'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
    
      <Routes>
        <Route path="/" element={<WebsiteLayout />}>
            <Route index element={<Home />} />
            <Route path="product" element={<h1>Product Page</h1>}/>
            <Route path="/product/:id" element={<Product />} />
        </Route>
        <Route path="admin" element={<AdminLayouts />}>
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<h1>Dashboard page</h1>} />
        </Route>
      </Routes>
  </div>
  )
}

export default App
