import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from '../../components/admins/Header'
import Footer from '../../components/admins/Footer'
type Props = {}

const AdminLayouts = (props: Props) => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default AdminLayouts