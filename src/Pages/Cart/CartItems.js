import { useParams } from "react-router-dom";

const CartItems = (props) => {
  console.log(props)
  const { id } = useParams();

  const handleRemoveCartItem = (id) => {
    props.deleteCartItems(id);
    props.history.push('/cart');
  };

  const loaded = () => {
    return props.cartItems.map((items) => (
      <div className="cart-items--list">
        <section className="cart-items--list-img">
          <img src={items.buildId.boardId.bigImg} />
        </section>
        <section className="cart-items--list-name">
          {items.buildId.name}
        </section>
        <section className="cart-items--list-delete">
          <button onClick={() => handleRemoveCartItem(items._id)}>Delete</button>
        </section>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>
  };

  return props.cartItems ? loaded() : loading();
}

export default CartItems