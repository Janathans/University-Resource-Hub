import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'

const ResourceDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [resource, setResource] = useState(null)

  useEffect(() => {
    // Simulate fetching resource details
    // In a real app, this would call BackendService.getResourceById(id)
    const mockResource = {
      id,
      title: 'Network Security Fundamentals',
      description: 'Comprehensive notes covering symmetric and asymmetric encryption, digital signatures, and network protocols like SSL/TLS. Includes practical examples and exam preparation tips.',
      type: 'LECTURE_NOTE',
      program: 'BSc Computer Science',
      module: 'CS302 - Network Security',
      uploader: 'John Doe',
      date: '2024-03-15',
      fileUrl: '#'
    }
    setResource(mockResource)
  }, [id])

  if (!resource) return <div className="container"><p>Loading...</p></div>

  return (
    <div className="container">
      <div className="gradient-bg"></div>
      <Navbar />
      
      <div className="fade-in" style={{ marginTop: '2rem' }}>
        <button 
          onClick={() => navigate(-1)}
          style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
        >
          ← Back to Resources
        </button>

        <div className="glass-card" style={{ padding: '3rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
            <div>
              <span className="tag" style={{ marginBottom: '1rem' }}>{resource.type.replace('_', ' ')}</span>
              <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{resource.title}</h1>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>{resource.program} • {resource.module}</p>
            </div>
            <button className="btn-primary" style={{ padding: '1rem 2rem' }}>Download PDF</button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem', borderTop: '1px solid var(--glass-border)', paddingTop: '2rem' }}>
            <div>
              <h3 style={{ marginBottom: '1rem' }}>Description</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>{resource.description}</p>
            </div>
            
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
              <h4 style={{ marginBottom: '1rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Resource Info</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'block' }}>Uploaded By</label>
                  <span>{resource.uploader}</span>
                </div>
                <div>
                  <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'block' }}>Upload Date</label>
                  <span>{resource.date}</span>
                </div>
                <div>
                  <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'block' }}>File Format</label>
                  <span>PDF (2.4 MB)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResourceDetail
