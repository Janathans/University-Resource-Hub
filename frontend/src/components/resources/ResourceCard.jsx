import React from 'react'

const ResourceCard = ({ title, type, program, uploader }) => {
  return (
    <div className="glass-card fade-in">
      <span className="tag">{type.replace('_', ' ')}</span>
      <h3 style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>{title}</h3>
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>{program}</p>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--glass-border)', paddingTop: '1rem' }}>
        <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>By {uploader}</span>
        <button style={{ background: 'none', border: 'none', color: 'var(--primary)', fontWeight: '600', cursor: 'pointer' }}>View</button>
      </div>
    </div>
  )
}

export default ResourceCard
