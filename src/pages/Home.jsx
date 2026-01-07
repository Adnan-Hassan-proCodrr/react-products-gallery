import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <section class="hero">
      <div className="hero-content">
        <h1>Hi, I'm  ADNAN_HASSAN</h1>
        <p>Frontend Developer | Build product list & DetailPage </p>
        <NavLink to="/products" className="cta-button">View My Work</NavLink>
      </div>
    </section>
  )
}

export default Home
