import { useState } from 'react';
import Logo from '../../components/Logo';
import { categories, menuItems } from '../../data/menu';

export default function POSApp() {
  const [activeCategory, setActiveCategory] = useState('grill');
  const [cart, setCart] = useState([]);

  // Filter items based on selected category
  const displayItems = menuItems.filter(item => item.category === activeCategory);

  // Add item to cart
  const addToCart = (item) => {
    setCart(prevCart => {
      const existing = prevCart.find(cartItem => cartItem.id === item.id);
      if (existing) {
        return prevCart.map(cartItem => 
          cartItem.id === item.id 
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  // Update item quantity in cart
  const updateQuantity = (id, delta) => {
    setCart(prevCart => {
      return prevCart.map(item => {
        if (item.id === id) {
          const newQuantity = item.quantity + delta;
          return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
        }
        return item;
      }).filter(item => item.quantity > 0);
    });
  };

  // Remove item from cart
  const removeItem = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  // Handle checkout
  const handleCheckout = () => {
    if (cart.length === 0) return;
    alert(`Order Sent to Kitchen! Total: €${totalPrice.toFixed(2)}`);
    setCart([]); // Clear cart
  };

  return (
    <div style={{ padding: '20px', height: '100vh', display: 'flex', flexDirection: 'column', boxSizing: 'border-box' }}>
      {/* HEADER */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <Logo size="sm" />
        <div style={{ color: 'var(--c-text-secondary)', fontSize: '18px', fontWeight: 'bold' }}>Counter POS Terminal</div>
      </header>
      
      {/* MAIN CONTENT AREA */}
      <div style={{ display: 'flex', gap: '20px', flex: 1, overflow: 'hidden' }}>
        
        {/* LEFT PANEL: Menu Categories & Items */}
        <div style={{ flex: 3, display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          {/* Categories Grid */}
          <div className="card" style={{ padding: '15px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px' }}>
              {categories.map(cat => (
                <button 
                  key={cat.id}
                  className="btn-primary" 
                  onClick={() => setActiveCategory(cat.id)}
                  style={{ 
                    height: '70px', 
                    fontSize: '18px',
                    background: activeCategory === cat.id ? 'var(--c-orange)' : 'var(--c-black-mute)',
                    border: activeCategory === cat.id ? '2px solid var(--c-white)' : '2px solid transparent',
                    color: activeCategory === cat.id ? '#FFF' : 'var(--c-text-secondary)'
                  }}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Items Grid */}
          <div className="card" style={{ flex: 1, overflowY: 'auto', padding: '15px' }}>
            <h2 style={{ marginBottom: '15px', color: 'var(--c-white)' }}>
              {categories.find(c => c.id === activeCategory)?.name} Menu
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px' }}>
              {displayItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => addToCart(item)}
                  style={{
                    background: 'var(--c-black-soft)',
                    border: '1px solid var(--c-border)',
                    borderRadius: 'var(--r-md)',
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    cursor: 'pointer',
                    transition: 'border-color 0.2s'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--c-orange)'}
                  onMouseOut={(e) => e.currentTarget.style.borderColor = 'var(--c-border)'}
                >
                  <span style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--c-white)' }}>{item.name}</span>
                  <span style={{ fontSize: '16px', color: 'var(--c-orange)' }}>€{item.price.toFixed(2)}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* RIGHT PANEL: Cart & Checkout */}
        <div className="card" style={{ flex: 1.5, display: 'flex', flexDirection: 'column', padding: '0' }}>
          <div style={{ padding: '20px', borderBottom: '1px solid var(--c-border)', background: 'var(--c-black)' }}>
            <h2 style={{ margin: 0, color: 'var(--c-white)' }}>Current Order</h2>
          </div>
          
          <div style={{ flex: 1, overflowY: 'auto', padding: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {cart.length === 0 ? (
              <div style={{ color: 'var(--c-text-secondary)', textAlign: 'center', marginTop: '40px' }}>
                Order list is empty...
              </div>
            ) : (
              cart.map(item => (
                <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--c-black)', padding: '15px', borderRadius: 'var(--r-sm)', border: '1px solid var(--c-border)' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 'bold', color: 'var(--c-white)', marginBottom: '5px' }}>{item.name}</div>
                    <div style={{ color: 'var(--c-orange)' }}>€{(item.price * item.quantity).toFixed(2)}</div>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <button 
                      onClick={() => updateQuantity(item.id, -1)}
                      style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--c-black-mute)', color: 'white', border: 'none', fontSize: '20px', cursor: 'pointer' }}
                    >-</button>
                    <span style={{ fontSize: '18px', width: '20px', textAlign: 'center', color: 'var(--c-white)' }}>{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, 1)}
                      style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--c-orange)', color: 'white', border: 'none', fontSize: '20px', cursor: 'pointer' }}
                    >+</button>
                    <button 
                      onClick={() => removeItem(item.id)}
                      style={{ marginLeft: '10px', background: 'transparent', border: 'none', color: '#ff4444', cursor: 'pointer', fontSize: '24px' }}
                    >×</button>
                  </div>
                </div>
              ))
            )}
          </div>

          <div style={{ padding: '20px', background: 'var(--c-black)', borderTop: '1px solid var(--c-border)', borderRadius: '0 0 var(--r-md) var(--r-md)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', color: 'var(--c-white)' }}>
              <span>Total</span>
              <span style={{ color: 'var(--c-orange)' }}>€{totalPrice.toFixed(2)}</span>
            </div>
            <button 
              className="btn-primary" 
              onClick={handleCheckout}
              disabled={cart.length === 0}
              style={{ 
                width: '100%', 
                padding: '20px', 
                fontSize: '20px',
                opacity: cart.length === 0 ? 0.5 : 1,
                cursor: cart.length === 0 ? 'not-allowed' : 'pointer'
              }}
            >
              PAY & SEND TO KITCHEN
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
}
