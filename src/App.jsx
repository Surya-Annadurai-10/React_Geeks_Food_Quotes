import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Nav from '../../react_vite/src/nav/nav'
import Footer from '../../react_vite/src/footer/footer'
import MyComponents from './myComponents/myComponents'
import styles from './App.module.css'

function App() {
 

  return (
    <>
    <div>
    <Nav />
     <MyComponents />
     <Footer />
    </div>
   
    </>
  )
}

export default App
