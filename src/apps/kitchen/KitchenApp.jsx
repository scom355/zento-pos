import Logo from '../../components/Logo';

export default function KitchenApp() {
  return (
    <div style={{ padding: '20px', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <Logo size="sm" />
        <button className="btn-primary">New Phone Order</button>
      </header>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', flex: 1 }}>
        <div className="card">
          <h2 style={{ borderBottom: '2px solid var(--c-orange)', paddingBottom: '10px' }}>New Orders</h2>
          <div style={{ marginTop: '10px', padding: '15px', background: 'var(--c-black-mute)', borderRadius: 'var(--r-sm)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <strong>#1042</strong> <span style={{ color: 'var(--c-orange)' }}>Web Delivery</span>
            </div>
            <div style={{ margin: '10px 0' }}>2x Dürüm Menu<br/>1x Fries</div>
            <button className="btn-primary" style={{ width: '100%' }}>START PREPARING</button>
          </div>
        </div>
        
        <div className="card">
          <h2 style={{ borderBottom: '2px solid #FACC15', paddingBottom: '10px' }}>Preparing</h2>
          {/* Items preparing */}
        </div>
        
        <div className="card">
          <h2 style={{ borderBottom: '2px solid #4ADE80', paddingBottom: '10px' }}>Ready / Print</h2>
          {/* Ready items */}
        </div>
      </div>
    </div>
  );
}
