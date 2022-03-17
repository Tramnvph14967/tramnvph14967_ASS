import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { NavLink, Route, Routes  } from 'react-router-dom'


import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import Product from './pages/Product'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path='/' element={< Home />} />
          </Routes>
        </main>
      <Footer />
    </div>
  )
}

export default App
