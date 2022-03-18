import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from '../../components/clients/Header'
import Footer from '../../components/clients/Footer'

type Props = {}

const WebsiteLayout = (props: Props) => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default WebsiteLayout