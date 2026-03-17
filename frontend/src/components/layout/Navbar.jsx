import React from 'react'

const Navbar = () => {
  return (
    <nav className="nav fade-in">
      <div className="logo">UniHub</div>
      <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        <a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Discover</a>
        <a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Programs</a>
        <button className="btn-primary">Sign In</button>
      </div>
    </nav>
  )
}

export default Navbar
