import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import POSApp from './apps/pos/POSApp';
import KitchenApp from './apps/kitchen/KitchenApp';
import WebApp from './apps/web/WebApp';
import Logo from './components/Logo';

function Portal() {
  return (
    <div style={{ display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center', background: '#111' }}>
      <div className="card" style={{ textAlign: 'center', width: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ marginBottom: '40px' }}>
          <Logo layout="stacked" size="lg" />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%' }}>
          <Link to="/pos" className="btn-primary" style={{ textDecoration: 'none' }}>Counter POS (iPad)</Link>
          <Link to="/kitchen" className="btn-primary" style={{ textDecoration: 'none' }}>Kitchen / Orders (Tablet)</Link>
          <Link to="/web" className="btn-primary" style={{ textDecoration: 'none', background: '#333' }}>Online Website</Link>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portal />} />
        <Route path="/pos" element={<POSApp />} />
        <Route path="/kitchen" element={<KitchenApp />} />
        <Route path="/web" element={<WebApp />} />
      </Routes>
    </BrowserRouter>
  );
}
