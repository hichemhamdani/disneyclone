import { useState } from 'react'
import './App.css'

import { BrowserRouter,Routes,Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Footer from "./components/Footer/Footer"

import Home from './pages/Home/Home'
import Details from './pages/Details/Details'
import Login from './pages/Login/Login'

import { moviesList } from './firebase'
import Search from './pages/Search/Search'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home moviesList={moviesList} />} />
          <Route path='/details/:id' element={<Details/>} />
          <Route path='/login/' element={<Login/>} />
          <Route path='/search/' element={<Search />} />
        </Routes>  
        <Footer />           
      </BrowserRouter> 
    </div>
  )
}

export default App
