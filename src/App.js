import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { About } from './components/About';
import { Tabs } from './components/Tabs';

function App() {
  return (
    <div className="App flex flex-col h-screen">
      <Header />
      <main className="flex-1 overflow-y-auto p-5">
        <Banner />
        <About />
        <Tabs list={[ 'breakfast', 'brunch' ]} />
      </main>
    </div>
  );
}

export default App;
