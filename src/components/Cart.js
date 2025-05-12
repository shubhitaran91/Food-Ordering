import ItemList from "./ItemList";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const handleclearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-3xl font-bold">Cart</h1>
      <h2 className="text-2xl font-bold">Total Items: {cartItems.length}</h2>
      <button
        className="bg-amber-500 px-4 rounded-lg my-4"
        onClick={handleclearCart}
      >
        Clear Cart
      </button>
      <div className="w-6/12 bg-gray-100 shadow-lg p-4 m-auto">
        {cartItems.length === 0 && (
          <h1 className="text-3xl font-bold">Cart is Empty</h1>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
