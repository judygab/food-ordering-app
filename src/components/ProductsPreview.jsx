import { ProductPreviewCard } from "./ProductPreviewCard";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useDispatch } from "react-redux";
import { addToCart } from "../stores/cart/cartSlice";

export const ProductsPreview = ({ products }) => {
  const dispatch = useDispatch();

  const onAddProduct = (product) => {
    dispatch(addToCart(product));
  }
  
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        <div className="container mx-auto pb-4 w-2/3">
            <Carousel responsive={responsive}>
                {products.map((product, index) => {
                        return (
                            <div className="w-full p-3" key={index}>
                                <ProductPreviewCard product={product} onAddProduct={onAddProduct} />
                            </div>
                        );
                    })}
            </Carousel>
        </div>
    )
};