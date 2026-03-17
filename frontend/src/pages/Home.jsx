import React from 'react'
import Navbar from '../components/layout/Navbar'
import ResourceCard from '../components/resources/ResourceCard'

const Home = () => {
  const dummyResources = [
    { id: 1, title: 'Network Security Fundamentals', type: 'LECTURE_NOTE', program: 'BSc Computer Science', uploader: 'John Doe' },
    { id: 2, title: 'Data Structures Guide 2024', type: 'GUIDE', program: 'Software Engineering', uploader: 'Jane Smith' },
    { id: 3, title: 'Calculus I - 2023 Paper', type: 'PAST_PAPER', program: 'Information Technology', uploader: 'Alex Wilson' },
    { id: 4, title: 'Ethics in AI - Lecture 5', type: 'LECTURE_NOTE', program: 'CS & AI', uploader: 'Maria Garcia' },
  ]

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
          <div style={{ position: 'relative' }}>
            <input type="text" placeholder="Search by title, module, or program..." style={{ paddingLeft: '3rem' }} />
            <span style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }}>🔍</span>
          </div>
          
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', justifyContent: 'center' }}>
            <select style={{ width: 'auto' }}>
              <option>All Programs</option>
              <option>Computer Science</option>
              <option>Engineering</option>
              <option>Medicine</option>
            </select>
            <select style={{ width: 'auto' }}>
              <option>All Types</option>
              <option>Lecture Notes</option>
              <option>Guides</option>
              <option>Past Papers</option>
            </select>
          </div>
        </div>
      </header>

      <section>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem' }}>Latest Resources</h2>
          <button className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>Upload Yours</button>
        </div>
        
        <div className="resource-grid">
          {dummyResources.map(res => (
            <ResourceCard key={res.id} {...res} />
          ))}
        </div>
      </section>

      <footer style={{ marginTop: '8rem', padding: '4rem 0', borderTop: '1px solid var(--glass-border)', textAlign: 'center', color: 'var(--text-secondary)' }}>
        <p>© 2026 University Resource Hub. Built for the community.</p>
      </footer>
    </div>
  )
}

export default Home
