import { Tabs } from "../../components/Tabs";
import Button from "../../components/elements/Button";
import { ProductsSummary } from "../../components/ProductsSummary";
import { useSelector } from "react-redux";
import { getProductsCart } from "../../stores/cart/cartSlice";
import { StripeWrapper } from "../../components/PaymentForm";
import { AddressForm } from "../../components/AddressForm";
import useTabSwitch from "../../hooks/useTabSwitch";
import { ReactComponent as ArrowRightSvg } from "../../assets/icons/arrow-right-long-svgrepo-com.svg";

const Cart = () => {
  const cart = useSelector(getProductsCart);
  const tabs = ['Summary', 'Delivery', 'Payment'];
  const [currentTab, handleTabSwitch] = useTabSwitch(tabs, 'Summary');

  if (!cart || cart.products.length === 0) {
    return (
      <div className="bg-white text-black flex items-center justify-center p-4">
        <h1>Cart is empty</h1>
      </div>
    )
  }
  return (
    <div className="bg-white h-screen text-black mx-auto mt-2 border border-gray-200 p-4 md:w-2/3 rounded-lg shadow-md sm:p-6 lg:p-8">
      <Tabs list={tabs} onTabSwitch={handleTabSwitch} activeTab={currentTab} />
        <div className={`tabs ${currentTab !== 'Summary' ? "hidden" : ""}`}>
          <ProductsSummary />
          <div className="flex justify-end p-2">
            <Button variant="dark" className="flex items-center" onClick={() => handleTabSwitch('Delivery')}><span className="mr-1">Next</span><ArrowRightSvg /></Button>
          </div>
        </div>
        <div className={`tabs ${currentTab !== 'Delivery' ? "hidden" : ""}`}>
          <AddressForm onTabSwitch={handleTabSwitch} /> 
        </div>
        <div className={`tabs ${currentTab !== 'Payment' ? "hidden" : ""}`}>
          <StripeWrapper />
        </div>
    </div>
  );
};

export default Cart;
