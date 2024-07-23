import { useState } from 'react' 
import { Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './pages/layouts/Layout'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from './pages/Cart' 
import Payment from './pages/Payment'
import Test from './pages/Test'
import Detail from './pages/ProDetail'
import DetailNe from './pages/DetailNe'

function App() {
  const [count, setCount] = useState(0)

  return (
      <Routes > 
          <Route path="/" element={<Layout/>} > 
            <Route path="" index element={<Home/>} /> 
            <Route path="cart" index element={<Cart/>} />  
            <Route path="about" index element={<About/>} />  
            <Route path="payment" index element={<Payment/>} /> 
            <Route path="contact" index element={<Contact/>} />
            <Route path="search" index element={<Test/>} />
            <Route path="detail" index element={<Detail/>} />
            <Route path="chitiet" index element={<DetailNe/>} />
          </Route>   
      </Routes>
  )
}

export default App
