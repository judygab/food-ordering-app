import { AddProduct } from "./AddProduct"
export const ProductPreviewCard = ({ product }) => {
    return (
        <div className="w-full md:w-1/2 lg:w-1/3 p-4 m-2 rounded text-white bg-gradient-to-b from-slate-600 to-transparent text-center">
            <h2 className="pb-2 text-lg">{product.name}</h2>
            <p className="mb-2 h-20 line-clamp-4">{product.description}</p>
            <AddProduct onAddProduct={() => {}} />
        </div>
    )
}