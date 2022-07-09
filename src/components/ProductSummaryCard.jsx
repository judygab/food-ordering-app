import { useDispatch } from "react-redux";
import { incrementProductAmount, decrementProductAmount } from "../stores/cart/cartSlice";

export const ProductsSummaryCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex p-1 sm:p-2 border-b border-b-gray-200">
      <div className="product-image border border-grey-200 rounded-lg w-full sm:w-1/3">
        <img src={product.imgUrl} alt={product.name} />
      </div>
      <div className="product-info p-2 sm:p-4">
        <h3>{product.name}</h3>
        <p className="text-gray-600">{product.description}</p>
      </div>
      <div className="product-price-qt flex flex-col items-center justify-center">
        <div className="price">{`${product.price}$`}</div>
        <div className="quantity flex">
          <button className="p-1" disabled={product.amount <= 0} onClick={() => dispatch(decrementProductAmount(product.id))}>-</button>
            <span className="p-1">{product.amount}</span>
          <button className="p-1" onClick={() => dispatch(incrementProductAmount(product.id))}>+</button>
        </div>
      </div>
    </div>
  )
}