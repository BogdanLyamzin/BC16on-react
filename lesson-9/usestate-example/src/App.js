import HeaderMenu from './components/HeaderMenu';
import ToggleButton from './components/ToogleButton';
import BuyList from './components/BuyList';

import './App.css';

import menuItems from "./data/menu.json";

function App() {
  return (
    <div className="App">
      <BuyList />
      {/* <ToggleButton text="Click me" /> */}
     {/* <HeaderMenu items={menuItems} /> */}
    </div>
  );
}

export default App;
