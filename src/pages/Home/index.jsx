import { Banner } from '../../components/Banner';
import { About } from '../../components/About';
import { ProductsPreview } from '../../components/ProductsPreview';

const Home = () => {
  return (
    <div className="bg-black overflow-hidden">
      <Banner />
      <About />
      <ProductsPreview products={[
        {name: 'salad', description: 'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design. The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design'},
        {name: 'salad', description: 'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design. The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design'},
        {name: 'salad', description: 'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design. The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design'},
        {name: 'salad', description: 'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design. The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design'},
        ]}/>
    </div>
  );
};

export default Home;