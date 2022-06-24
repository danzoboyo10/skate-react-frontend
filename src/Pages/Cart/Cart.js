import { useState, useEffect } from 'react'
import './Cart.scss'
import CartItems from './CartItems';

const Cart = (props) => {
  
  const [ cartItems, setCartItems ] = useState(null);
  const URL = 'https://skate-react.herokuapp.com/cart'

  const getCartData = async () => {
    if(!props.user) return;
    // JSON Web Token AKA JWT - edited at 4:30pm
    const token = await props.user.getIdToken();
    console.log(token);
    const response = await fetch(URL, {
      method: 'GET', // edited at 4:30pm
      headers: {
        'Authorization': 'Bearer ' + token
      }
    });
    const data = await response.json();
      setCartItems(data);
    };

  const deleteCartItem = async (id) => {
    if(!props.user) return;
    await fetch(URL + '/' + id, { method: 'DELETE' });
    getCartData();
  }

  useEffect(() => { // Edited useEffect at 4:30pm
    if(props.user) {
      getCartData();
    } else {
      setCartItems(null)
    }
  }, [props.user]);

  return (
    <div className="cart">
      <div className="cart-list">
        <CartItems 
          cartItems={cartItems} 
          deleteCartItems={deleteCartItem}
          user={props.user}
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