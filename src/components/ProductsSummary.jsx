import { useSelector } from "react-redux";
import { getProductsCart } from "../stores/cart/cartSlice";
import { ProductsSummaryCard } from "./ProductSummaryCard";

export const ProductsSummary = () => {
  const cart = useSelector(getProductsCart);

  return (
    <div className="flex flex-col">
      {cart && cart.products?.map((product, index) => {
        return (
          <ProductsSummaryCard product={product} key={index} />
        )
      })}
    </div>
  )
}