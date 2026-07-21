import Logo from '../../components/Logo';

export default function KitchenApp() {
  return (
    <div style={{ padding: '20px', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <Logo size="sm" />
        <button className="btn-primary">Nuevo Pedido Telefónico</button>
      </header>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', flex: 1 }}>
        <div className="card">
          <h2 style={{ borderBottom: '2px solid var(--c-orange)', paddingBottom: '10px' }}>Nuevos Pedidos</h2>
          <div style={{ marginTop: '10px', padding: '15px', background: 'var(--c-black-mute)', borderRadius: 'var(--r-sm)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <strong>#1042</strong> <span style={{ color: 'var(--c-orange)' }}>Web a Domicilio</span>
            </div>
            <div style={{ margin: '10px 0' }}>2x Menú Dürüm<br/>1x Patatas Fritas</div>
            <button className="btn-primary" style={{ width: '100%' }}>EMPEZAR A PREPARAR</button>
          </div>
        </div>
        
        <div className="card">
          <h2 style={{ borderBottom: '2px solid #FACC15', paddingBottom: '10px' }}>En Preparación</h2>
          {/* Items preparing */}
        </div>
        
        <div className="card">
          <h2 style={{ borderBottom: '2px solid #4ADE80', paddingBottom: '10px' }}>Listo / Imprimir</h2>
          {/* Ready items */}
        </div>
      </div>
    </div>
  );
}
