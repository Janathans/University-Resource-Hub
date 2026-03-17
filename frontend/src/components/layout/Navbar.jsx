import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="nav fade-in">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <div className="logo">UniHub</div>
      </Link>
      <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        <Link to="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Discover</Link>
        <Link to="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Programs</Link>
        <Link to="/login" style={{ textDecoration: 'none' }}>
          <button className="btn-primary">Sign In</button>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
