import { useState, useEffect } from 'react'
import './Cart.scss'
import CartItems from './CartItems';

const Cart = (props) => {
  
  const [ cartItems, setCartItems ] = useState(null);

  const getCartData = async () => {
    const response = await fetch(props.URL + 'cart');
    const data = await response.json();
      setCartItems(data);
    };

  const deleteCartItem = async (id) => {
    await fetch(props.URL + 'cart/' + id, { method: 'DELETE' });
    getCartData();
  }

  useEffect(() => { getCartData() }, []);

  return (
    <div className="cart">
      <div className="cart-list">
        <CartItems 
          cartItems={cartItems} 
          deleteCartItems={deleteCartItem}
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