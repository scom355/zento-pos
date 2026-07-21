import Logo from '../../components/Logo';

export default function WebApp() {
  return (
    <div style={{ maxWidth: '480px', margin: '0 auto', background: 'var(--c-black-soft)', minHeight: '100vh' }}>
      <header style={{ padding: '20px', textAlign: 'center', borderBottom: '1px solid var(--c-border)', display: 'flex', justifyContent: 'center' }}>
        <Logo layout="stacked" size="sm" />
      </header>
      
      <div style={{ padding: '20px' }}>
        <div style={{ background: 'var(--c-orange)', color: 'white', padding: '15px', borderRadius: 'var(--r-md)', textAlign: 'center', marginBottom: '20px' }}>
          <strong>Order online now!</strong> Delivery in A Coruña
        </div>
        
        <h2>Popular Items</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '15px' }}>
          <div className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h3>Classic Dürüm</h3>
              <p style={{ color: 'var(--c-text-secondary)', fontSize: '14px' }}>Freshly baked bread, grilled meat.</p>
              <strong style={{ color: 'var(--c-orange)' }}>€6.50</strong>
            </div>
            <button className="btn-primary" style={{ padding: '10px 15px' }}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
}
