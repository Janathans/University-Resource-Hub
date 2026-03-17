import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import resourceService from '../services/resourceService'

const ResourceDetail = () => {
  const { id } = useParams()
  const [resource, setResource] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchResource = async () => {
      try {
        const data = await resourceService.getResourceById(id)
        setResource(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchResource()
  }, [id])

  if (loading) return <div className="container"><Navbar /><div style={{ textAlign: 'center', marginTop: '5rem' }}>Loading resource...</div></div>
  if (error) return <div className="container"><Navbar /><div style={{ textAlign: 'center', marginTop: '5rem', color: 'var(--error)' }}>Error: {error}</div></div>
  if (!resource) return <div className="container"><Navbar /><div style={{ textAlign: 'center', marginTop: '5rem' }}>Resource not found</div></div>

  return (
    <div className="container">
      <div className="gradient-bg"></div>
      <Navbar />
      
      <div className="fade-in" style={{ marginTop: '4rem', maxWidth: '800px', margin: '4rem auto' }}>
        <Link to="/" style={{ color: 'var(--primary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
          <span>←</span> Back to Resources
        </Link>
        
        <div className="glass-card" style={{ padding: '3rem' }}>
          <span className="tag" style={{ marginBottom: '1.5rem' }}>{resource.resourceType.replace('_', ' ')}</span>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{resource.title}</h1>
          
          <div style={{ display: 'flex', gap: '2rem', marginBottom: '3rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            <div><strong>Program:</strong> {resource.degreeProgram}</div>
            <div><strong>Module:</strong> {resource.moduleName}</div>
            <div><strong>Uploaded By:</strong> {resource.uploadedBy}</div>
          </div>
          
          <h3 style={{ marginBottom: '1rem' }}>Description</h3>
          <p style={{ lineHeight: '1.7', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
            {resource.description || 'No description provided for this resource.'}
          </p>
          
          <div style={{ padding: '2rem', background: 'rgba(255,255,255,0.03)', borderRadius: '16px', border: '1px solid var(--glass-border)', textAlign: 'center' }}>
            <p style={{ marginBottom: '1.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Ready to use this resource for your studies?
            </p>
            <a href={resource.fileUrl} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-block' }}>
              Download Resource
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResourceDetail
