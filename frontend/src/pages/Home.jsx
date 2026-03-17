import React, { useEffect, useState } from 'react'
import Navbar from '../components/layout/Navbar'
import ResourceCard from '../components/resources/ResourceCard'
import resourceService from '../services/resourceService'

const Home = () => {
  const [resources, setResources] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  
  // Search and Filter states
  const [searchQuery, setSearchQuery] = useState('')
  const [program, setProgram] = useState('All Programs')
  const [type, setType] = useState('All Types')

  const fetchResources = async () => {
    setLoading(true)
    setError(null)
    try {
      let data;
      if (searchQuery) {
        data = await resourceService.searchResources(searchQuery)
      } else if (program !== 'All Programs' || type !== 'All Types') {
        data = await resourceService.filterResources(program, type)
      } else {
        data = await resourceService.getAllResources()
      }
      setResources(data)
    } catch (err) {
      setError('Failed to load resources. Make sure the backend is running.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchResources()
  }, [program, type])

  const handleSearch = (e) => {
    e.preventDefault()
    fetchResources()
  }

  return (
    <div className="container">
      <div className="gradient-bg"></div>
      <Navbar />
      
      <header style={{ textAlign: 'center', marginTop: '4rem', marginBottom: '6rem' }}>
        <h1 className="hero-title fade-in" style={{ animationDelay: '0.1s' }}>University Resource Hub</h1>
        <p className="fade-in" style={{ animationDelay: '0.2s', color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
          A community-driven platform to share and discover high-quality academic resources across all degree programs.
        </p>
        
        <div className="fade-in" style={{ animationDelay: '0.3s', marginTop: '3rem', maxWidth: '600px', margin: '3rem auto 0' }}>
          <form onSubmit={handleSearch} style={{ position: 'relative' }}>
            <input 
              type="text" 
              placeholder="Search by title..." 
              style={{ paddingLeft: '3rem' }} 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <span style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }}>🔍</span>
          </form>
          
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', justifyContent: 'center' }}>
            <select style={{ width: 'auto' }} value={program} onChange={(e) => setProgram(e.target.value)}>
              <option>All Programs</option>
              <option>Computer Science</option>
              <option>Engineering</option>
              <option>Medicine</option>
              <option>Information Technology</option>
              <option>Software Engineering</option>
            </select>
            <select style={{ width: 'auto' }} value={type} onChange={(e) => setType(e.target.value)}>
              <option>All Types</option>
              <option>Lecture Note</option>
              <option>Guide</option>
              <option>Past Paper</option>
            </select>
          </div>
        </div>
      </header>

      <section>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem' }}>
            {searchQuery || program !== 'All Programs' || type !== 'All Types' ? 'Filtered Results' : 'Latest Resources'}
          </h2>
        </div>
        
        {loading ? (
          <div style={{ textAlign: 'center', padding: '4rem' }}>Loading resources...</div>
        ) : error ? (
          <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--error)' }}>{error}</div>
        ) : resources.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-secondary)' }}>No resources found.</div>
        ) : (
          <div className="resource-grid">
            {resources.map(res => (
              <ResourceCard key={res.id} {...res} />
            ))}
          </div>
        )}
      </section>

      <footer style={{ marginTop: '8rem', padding: '4rem 0', borderTop: '1px solid var(--glass-border)', textAlign: 'center', color: 'var(--text-secondary)' }}>
        <p>© 2026 University Resource Hub. Built for the community.</p>
      </footer>
    </div>
  )
}

export default Home
