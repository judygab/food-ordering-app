import { Banner } from '../../components/Banner';
import { Tabs } from '../../components/Tabs';

const Home = () => {
  return (
    <div className="bg-black overflow-hidden">
      <Banner />
      <Tabs list={['breakfast', 'brunch']} />
    </div>
  );
};

export default Home;
