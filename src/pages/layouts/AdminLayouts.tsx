import React from 'react'
import {Outlet} from 'react-router-dom'
type Props = {}

const AdminLayouts = (props: Props) => {
  return (
    <div>
      <header>Header_admin</header>
      <aside>Aside</aside>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default AdminLayouts