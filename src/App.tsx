import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { NavLink, Route, Routes } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

import AdminLayouts from './pages/layouts/AdminLayouts'
import WebsiteLayout from './pages/layouts/WebsiteLayout'
//admin
import Dashboard from './pages/admin/Dashboard'

import ProductAdd from './pages/admin/product/ProductAdd'
import ProductEdit from './pages/admin/product/ProductEdit'
import ProductManager from './pages/admin/product/ProductManager'

import NewsManager from './pages/admin/news/NewsManager'
import NewsEdit from './pages/admin/news/NewsEdit'
import NewsAdd from './pages/admin/news/NewsAdd'
//website
import Home from './pages/website/Home'
import Product from './pages/website/Product'
import News from './pages/website/News'
import ProductDetail from './pages/website/ProductDetail'
import Contact from './pages/website/Contact'

import Signin from './pages/Signin'
import Signup from './pages/Signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container-fuild">

      <Routes>
        <Route path="/" element={<WebsiteLayout />}>
          <Route index element={<Home />} />
          <Route path="product">
            <Route index element={<Product />} />
            <Route path=":id" element={<ProductDetail />} />
          </Route>
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        <Route path="admin" element={<AdminLayouts />}>
          <Route index element={<Navigate to="Dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path='product'>
            <Route index element={<ProductManager />} />
            <Route path='add' element={<ProductAdd />} />
            <Route path=':id/edit' element={<ProductEdit />} />
          </Route>
          <Route path='news'>
            <Route index element={<NewsManager />} />
            <Route path='add' element={<NewsAdd />} />
            <Route path=':id/edit' element={<NewsEdit />} />
          </Route>
        </Route>

        <Route path='signin' element={<Signin />} />
        <Route path='signup' element={<Signup />} />
      </Routes>
    </div>
  )
}

export default App
