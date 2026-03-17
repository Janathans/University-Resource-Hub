import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BackendService } from '../services/BackendService'

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields')
      return
    }

    setLoading(true)
    setError('')
    try {
      const result = await BackendService.login(formData)
      if (result.token) {
        navigate('/')
      } else {
        setError(result.message || 'Invalid credentials')
      }
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
      <div className="gradient-bg"></div>
      <div className="glass-card fade-in" style={{ width: '100%', maxWidth: '450px' }}>
        <h2 style={{ marginBottom: '0.5rem', textAlign: 'center' }}>Welcome Back</h2>
        <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '2rem', fontSize: '0.9rem' }}>
          Sign in to your UniHub account to managed academic resources.
        </p>

        {error && (
          <div style={{ 
            background: 'rgba(239, 68, 68, 0.1)', 
            border: '1px solid var(--error)', 
            color: 'var(--error)', 
            padding: '0.8rem', 
            borderRadius: '12px', 
            marginBottom: '1.5rem',
            fontSize: '0.85rem'
          }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          <div>
            <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.4rem', display: 'block' }}>Email Address</label>
            <input 
              type="email" 
              placeholder="name@university.edu" 
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div>
            <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.4rem', display: 'block' }}>Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>

          <button type="submit" className="btn-primary" disabled={loading} style={{ marginTop: '1rem', height: '48px' }}>
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        <p style={{ marginTop: '2rem', textAlign: 'center', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
          Don't have an account?{' '}
          <Link to="/register" style={{ color: 'var(--primary)', cursor: 'pointer', fontWeight: '600', textDecoration: 'none' }}>
            Register
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login
