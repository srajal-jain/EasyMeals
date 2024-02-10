import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center">
      <h1 className="m-4 p-4 font-bold text-2xl">Cart</h1>
      <button
        className="p-3 bg-red-500 text-white rounded-lg"
        onClick={handleClearCart}
      >
        Clear Cart 🚮
      </button>
      {cartItems.length === 0 && (
        <h1>Your Cart is empty! Please add items to your cart</h1>
      )}
      <div className="w-6/12 m-auto">
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
