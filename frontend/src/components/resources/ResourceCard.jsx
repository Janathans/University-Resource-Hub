import React from 'react'
import { Link } from 'react-router-dom'

const ResourceCard = ({ id, title, resourceType, degreeProgram, uploadedBy }) => {
  return (
    <div className="glass-card fade-in">
      <span className="tag">{resourceType ? resourceType.replace('_', ' ') : 'RESOURCE'}</span>
      <h3 style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>{title}</h3>
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>{degreeProgram}</p>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--glass-border)', paddingTop: '1rem' }}>
        <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>By {uploadedBy}</span>
        <Link to={`/resources/${id}`}>
          <button style={{ background: 'none', border: 'none', color: 'var(--primary)', fontWeight: '600', cursor: 'pointer' }}>View</button>
        </Link>
      </div>
    </div>
  )
}

export default ResourceCard
