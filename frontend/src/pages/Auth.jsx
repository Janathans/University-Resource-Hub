import React, { useState } from 'react'

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
      <div className="gradient-bg"></div>
      
      <div className="glass-card fade-in" style={{ width: '100%', maxWidth: '450px' }}>
        <h2 style={{ marginBottom: '0.5rem', textAlign: 'center' }}>{isLogin ? 'Welcome Back' : 'Join the Community'}</h2>
        <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '2rem', fontSize: '0.9rem' }}>
          {isLogin ? 'Sign in to access academic resources.' : 'Create an account to share and discover resources.'}
        </p>

        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          {!isLogin && (
            <div>
              <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.4rem', display: 'block' }}>Full Name</label>
              <input type="text" placeholder="John Doe" />
            </div>
          )}
          
          <div>
            <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.4rem', display: 'block' }}>Email Address</label>
            <input type="email" placeholder="john@university.edu" />
          </div>

          <div>
            <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.4rem', display: 'block' }}>Password</label>
            <input type="password" placeholder="••••••••" />
          </div>

          <button type="submit" className="btn-primary" style={{ marginTop: '1rem' }}>
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <p style={{ marginTop: '2rem', textAlign: 'center', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
          {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
          <span 
            onClick={() => setIsLogin(!isLogin)} 
            style={{ color: 'var(--primary)', cursor: 'pointer', fontWeight: '600' }}
          >
            {isLogin ? 'Sign Up' : 'Log In'}
          </span>
        </p>
      </div>
    </div>
  )
}

export default Auth
