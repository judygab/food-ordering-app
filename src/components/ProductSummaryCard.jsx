export const ProductsSummaryCard = ({ product }) => {
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
        <div className="price">$</div>
        <div className="quantity flex">
          <button className="p-1">-</button>
            <span className="p-1">5</span>
          <button className="p-1">+</button>
        </div>
      </div>
    </div>
  )
}