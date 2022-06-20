const CartItems = (props) => {

  const loaded = () => {
    return props?.cartItems?.map((items) => (
      <>
        {items?.board?.name}<br></br>
      </>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>
  };

  return props?.cartItems ? loaded() : loading();
}

export default CartItems