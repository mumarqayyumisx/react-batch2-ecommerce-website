import React, { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { fetchProducts, selectProducts } from "../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  useEffect(() => {
    dispatch(fetchProducts()).then((result) => {
      console.log({ result });
    });
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <div className="flex p-10 flex-wrap gap-2 justify-start">
      {products.map((product) => (
        <ProductCard
          title={product.name}
          price={product.price}
          imageUrl={product.imageUrl}
          onAddToCart={() => {
            handleAddToCart(product);
          }}
        />
      ))}
    </div>
  );
};

export default Products;
