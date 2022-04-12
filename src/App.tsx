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
import { ProductType } from './pages/types/product'
import { add, list, remove, update } from './api/product'


import CategoryManager from './pages/admin/category/CategoryManager'
import CategoryAdd from './pages/admin/category/CategoryAdd'
import CategoryEdit from './pages/admin/category/CategoryEdit'
import { categoryType } from './pages/types/categoryType'
import { listcategory, addcategory, removecatgory, updatecategory } from './api/category'

import UserManager from './pages/admin/user/UserManager'
import { listuser, removeuser } from './api/auth'
import { UserType } from './pages/types/userType'





import OrderManager from './pages/admin/orders/OrderManager'
//website
import Home from './pages/website/Home'
import Product from './pages/website/Product'
import News from './pages/website/News'
import ProductDetail from './pages/website/ProductDetail'

import CheckOut from './pages/website/CheckOut'



import Signin from './pages/Signin'
import Signup from './pages/Signup'

function App() {
  const [count, setCount] = useState(0);
  //-----------------------------------------------------------------Products------------------------------------------
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
    // console.log(data);

    add(data);
    setProducts([...products, data])
  }
  //xoa
  const removeItem = (id: number) => {
    remove(id);
    confirm("Bạn có muốn xóa không? ");
    // reRender
    setProducts(products.filter(item => item._id !== id));
    // setProduct()
  }
  //sửa
  const onHandleUpdate = async (product: ProductType) => {
    const { data } = await update(product);
    // console.log(data);
    // reRender
    setProducts(products.map(item => item._id === data.id ? data : item));
  }

  //-----------------------------------------------------------------------Category---------------------------------------------------------
  // data product
  const [categorys, setCategorys] = useState<categoryType[]>([]);
  useEffect(() => {
    const getCategory = async () => {
      const { data } = await listcategory();
      setCategorys(data);
      // console.log(data);
    }
    getCategory();
  }, [])

  //xoa
  const removecate = (id: number) => {
    removecatgory(id);
    confirm("Bạn có muốn xóa không? ");
    // reRender
    setCategorys(categorys.filter(item => item._id !== id));

  }
  //thêm
  const onHanldeAddCate = (data: categoryType) => {
    // console.log(data);

    addcategory(data);
    setCategorys([...categorys, data])
  }
  //sửa
  const onHandleUpdateCate = async (category: categoryType) => {
    const { data } = await updatecategory(category);
    console.log(data);
    // reRender
    setCategorys(categorys.map(item => item._id === data.id ? data : item));
  }
  //------------------------------------------------------------------user------------------------------------------------------
  const [users, setUser] = useState<UserType[]>([]);
  useEffect(() => {
    const getUser = async () => {
      const { data } = await listuser();

      setUser(data);
      // console.log(data);
    }
    getUser();
  }, [])

  //xoa
  const removeuserss = (id: number) => {
    removeuser(id);
    confirm("Bạn có muốn xóa không? ");
    // reRender
    setCategorys(categorys.filter(item => item._id !== id));

  }

  return (
    <div className="container-fuild">

      <Routes>
        <Route path="/" element={<WebsiteLayout />}>
          <Route index element={<Home products={products} />} />

          <Route path="product">
            <Route index element={<Product products={products} />} />
            <Route path=":id" element={<ProductDetail />} />
          </Route>

          <Route path="/news" element={<News />} />
          <Route path="/checkout" element={<CheckOut />} />
        </Route>

        <Route path="/admin" element={<AdminLayouts />}>
          <Route index element={<Navigate to="Dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />


          <Route path='product'>
            <Route index element={<ProductManager products={products} onRemove={removeItem} />} />
            <Route path='add' element={<ProductAdd onAdd={onHanldeAdd} />} />
            <Route path=':id/edit' element={<ProductEdit onUpdate={onHandleUpdate} />} />
          </Route>

          <Route path='category'>
            <Route index element={<CategoryManager categorys={categorys} onRemove={removecate} />} />
            <Route path='add' element={<CategoryAdd onAdd={onHanldeAddCate} />} />
            <Route path=':id/edit' element={<CategoryEdit onUpdate={onHandleUpdateCate} />} />
          </Route>


          <Route path='user'>
            <Route index element={<UserManager users={users} onRemove={removeuserss} />} />

          </Route>


          <Route path='order' element={<OrderManager />} />
        </Route>




        <Route path='signin' element={<Signin />} />
        <Route path='signup' element={<Signup />} />
      </Routes>
    </div>
  )
}

export default App
