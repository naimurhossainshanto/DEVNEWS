import React from 'react'
import HeadTop from '../others/HeadTop'
import HeadLog from '../others/HeadLog'
import Navbar from '../others/Navbar'
import { motion } from 'motion/react'
const Header = () => {
  return (
   <div>
    <HeadTop/>
    <HeadLog/>
    <Navbar/>

    
   </div>
  )
}

export default Header
