import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser))
      } catch (err) {
        console.error('Failed to parse user from localStorage', err)
      }
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setUser(null)
    navigate('/login')
  }

  const getFirstName = (fullName) => {
    if (!fullName) return ''
    return fullName.split(' ')[0]
  }

  return (
    <nav className="nav fade-in">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <div className="logo">UniHub</div>
      </Link>
      <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        <Link to="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Discover</Link>
        <Link to="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Programs</Link>
        {user ? (
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>Hi, {getFirstName(user.fullName)}</span>
            <button onClick={handleLogout} className="btn-secondary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}>Sign Out</button>
          </div>
        ) : (
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <button className="btn-primary">Sign In</button>
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Navbar
