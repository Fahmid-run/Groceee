import { BiTrash } from "react-icons/bi";
import CartPageCard from "../components/Ui/CartPageCard";
import OrderSummery from "../components/Ui/OrderSummery";

function Cart() {
  return (
    <div className="grid grid-cols-3 gap-10 py-10">
      <div className="left-content col-span-2">
        <div className="cart--title ">
          <h1 className="text-3xl">Your Cart</h1>
          <div className="flex justify-between items-center">
            <p className="font-light text-gray-700">
              Your have {} items in your cart.{' '}
              <span className="text-primary-600">Free shipping eligible</span>
            </p>
            <span className="font-light text-gray-700 ">
              <BiTrash className="text-gray-400 mx-2 "></BiTrash>
              clear all
            </span>
          </div>
          <hr />
        </div>

        <CartPageCard></CartPageCard>
        <CartPageCard></CartPageCard>
        <CartPageCard></CartPageCard>

      </div>

      <div className="right-content col-span-1">
        <OrderSummery></OrderSummery>
      </div>
    </div>
  );
}

export default Cart