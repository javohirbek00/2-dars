import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Main from './components/Header/Main/Main'
import Navbar from './components/Header/Navbar/Navbar'
import Footer from './components/Header/Footer/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  
<div className='container'>
  <Navbar/>
 <Main/>
 <Footer/>
</div>

)
