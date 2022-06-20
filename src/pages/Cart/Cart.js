import { useState, useEffect } from 'react'
import './Cart.scss'
import CartItems from './CartItems';

const Cart = (props) => {
  
  const [ cartItems, setCartItems ] = useState(null);

  const getCart = async () => {
    const response = await fetch(props.URL + 'presets');
    const data = await response.json();
      setCartItems(data);
    };

  useEffect(() => { getCart() }, []);

  return (
    <div className="cart">
      <div className="cart-list">
        <CartItems 
          cartItems={cartItems} 
        />
      </div>
      <div className="cart-payment">
        Payment
      </div>
      <div className="min-height"></div>
    </div>
  )
}

export default Cart