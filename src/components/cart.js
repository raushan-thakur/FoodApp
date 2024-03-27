import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const clearCartt = () => {
    dispatch(clearCart());
  };
  return (
    <div className="">
      <button
        className="p-2 m-2 bg-green-100"
        onClick={() => {
          clearCartt();
        }}
      >
        {" "}
        Clear Cart
      </button>
      <h1 className="font-bold text-2xl">Cart Items - {cartItems.length}</h1>
      <div className="flex flex-wrap justify-center">
        {cartItems.map((item) => (
          <FoodItem key={item.card.info.id} {...item?.card?.info} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
