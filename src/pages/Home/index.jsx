import { Banner } from '../../components/Banner';
import { About } from '../../components/About';
import { ProductsPreview } from '../../components/ProductsPreview';

const Home = () => {
  return (
    <div className="bg-black overflow-hidden">
      <Banner />
      <ProductsPreview products={[
        {name: 'salad', description: 'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design. The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design', imgUrl: 'https://res.cloudinary.com/dlv0lekro/image/upload/v1657056151/food-ordering-app/1_mfgcb5.png'},
        {name: 'salad', description: 'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design. The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design', imgUrl: 'https://res.cloudinary.com/dlv0lekro/image/upload/v1657056151/food-ordering-app/1_mfgcb5.png'},
        {name: 'salad', description: 'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design. The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design', imgUrl: 'https://res.cloudinary.com/dlv0lekro/image/upload/v1657056151/food-ordering-app/1_mfgcb5.png'},
        {name: 'salad', description: 'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design. The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design', imgUrl: 'https://res.cloudinary.com/dlv0lekro/image/upload/v1657056151/food-ordering-app/1_mfgcb5.png'},
        ]}/>
      <About />
    </div>
  );
};

export default Home;