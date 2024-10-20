import React from "react";
import { useSelector } from "react-redux";
import { selectAddedToCartProducts } from "../redux/cartSlice";

const Cart = () => {
  const addedToCartProducts = useSelector(selectAddedToCartProducts);

  return (
    <div className="fixed right-0 z-1 bg-slate-200 w-[300px] h-screen transition-transform duration-300">
      <div className="flex flex-col gap-2">
        {addedToCartProducts.map((product) => (
          <div className="flex border border-red-100 ">
            <img src={product.imageUrl} className="w-16" />
            <div className="flex">
              <h4>{product.name}</h4>
              <h4>{product.price}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
