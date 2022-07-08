import { Tabs } from "../../components/Tabs";
import Button from "../../components/elements/Button";
import { ProductsSummary } from "../../components/ProductsSummary";

const Cart = () => {
  return (
    <div className="bg-white h-screen text-black mx-auto mt-2 border border-gray-200 p-4 md:w-2/3 rounded-lg shadow-md sm:p-6 lg:p-8">
      <Tabs list={['Summary', 'Payment', 'Delivery']} />
      <ProductsSummary />
      <Button>Place Order</Button>
    </div>
  );
};

export default Cart;
