import { ProductPreviewCard } from "./ProductPreviewCard";

export const ProductsPreview = ({ products }) => {
    return (
        <div className="container mx-auto w-2/3 flex flex-wrap">
            {products.map((product, index) => {
                return (
                    <div className="w-full p-3" key={index}>
                        <ProductPreviewCard product={product} />
                    </div>
                );
            })}
        </div>
    )
};