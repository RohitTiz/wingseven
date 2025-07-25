// pages/SpecializationsPage.jsx
const SpecializationsPage = () => (
  <div style={{ 
    padding: '40px',
    minHeight: 'calc(100vh - 120px)',
    backgroundColor: '#f5f5f5'
  }}>
    <h1 style={{ color: '#333', marginBottom: '20px' }}>Specializations Page</h1>
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '20px'
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <h3 style={{ color: '#444', marginBottom: '10px' }}>Specialization 1</h3>
        <p style={{ color: '#666' }}>Description of this specialization</p>
      </div>
    </div>
  </div>
);
export default SpecializationsPage;