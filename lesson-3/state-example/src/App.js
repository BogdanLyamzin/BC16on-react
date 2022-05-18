import HeaderMenu from './components/HeaderMenu';
import ToggleButton from './components/ToogleButton';

import './App.css';

import menuItems from "./data/menu.json";

function App() {
  return (
    <div className="App">
      <HeaderMenu items={menuItems} />
      {/* 
        const props = {
          items: menuItems
        };
        const obj = new HeaderMenu(props);
        obj.render()
      */}
      <ToggleButton text="Click me" />
      <ToggleButton text="Touch me" />
    </div>
  );
}

export default App;
