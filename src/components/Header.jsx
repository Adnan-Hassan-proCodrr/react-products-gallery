import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <h2><span>H</span>assan</h2>
      <nav>
      <Link to={'/'} >Home</Link>
      <Link to={'/products'} >Products</Link>
      </nav>
    </header>
  )
}

export default Header
