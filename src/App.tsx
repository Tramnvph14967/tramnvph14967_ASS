import { useEffect, useState } from 'react'
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

import UserManager from './pages/admin/customers/UserManager'
import CommentManager from './pages/admin/comment/CommentManager'
import OrderManager from './pages/admin/orders/OrderManager'
//website
import Home from './pages/website/Home'
import Product from './pages/website/Product'
import News from './pages/website/News'
import ProductDetail from './pages/website/ProductDetail'
import Contact from './pages/website/Contact'
import CheckOut from './pages/website/CheckOut'

import { ProductType } from './pages/types/product'
import { add, list, remove, update } from './api/product'

import Signin from './pages/Signin'
import Signup from './pages/Signup'

function App() {
  const [count, setCount] = useState(0);

  // data product
  const [products, setProducts] = useState<ProductType[]>([]);
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list();
      setProducts(data);
      // console.log(data);

    }
    getProducts();
  }, [])
  //thêm
  const onHanldeAdd = (data: ProductType) => {
    add(data);
    setProducts([...products, data])
  }
  //xoa
  const removeItem = (id: number) => {
    remove(id);
    // reRender
    setProducts(products.filter(item => item.id !== id));
    // setProduct()
  }
  //sửa
  const onHandleUpdate = async (product: ProductType) => {
    const { data } = await update(product);
    // reRender
    setProducts(products.map(item => item.id === data.id ? data : item));
  }





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
          <Route path="/checkout" element={<CheckOut />} />

        </Route>

        <Route path="admin" element={<AdminLayouts />}>
          <Route index element={<Navigate to="Dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />


          <Route path='product'>
            <Route index element={<ProductManager products={products} onRemove={removeItem} />} />
            <Route path='add' element={<ProductAdd onAdd={onHanldeAdd} />} />
            <Route path=':id/edit' element={<ProductEdit onUpdate={onHandleUpdate} />} />
          </Route>



          <Route path='news'>
            <Route index element={<NewsManager />} />
            <Route path='add' element={<NewsAdd />} />
            <Route path=':id/edit' element={<NewsEdit />} />
          </Route>
          <Route path='user' element={<UserManager />} />
          <Route path='comment' element={<CommentManager />} />
          <Route path='order' element={<OrderManager />} />
        </Route>

        <Route path='signin' element={<Signin />} />
        <Route path='signup' element={<Signup />} />
      </Routes>
    </div>
  )
}

export default App
