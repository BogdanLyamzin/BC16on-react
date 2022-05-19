import HeaderMenu from './components/HeaderMenu';
import ToggleButton from './components/ToogleButton';
import Section from './components/Section';
import BuyList from "./components/BuyList";
import Vote from "./components/Vote";
import Button from './components/Button';

import './App.css';

import menuItems from "./data/menu.json";

function App() {
  return (
    <div className="App">
      {/* <Section title="Buy list">
        <BuyList />
      </Section> */}
      <Section title="Vote">
        <Vote />
      </Section>
      {/* <Button className="navbar-btn">
        Click me
      </Button> */}
      {/* <HeaderMenu items={menuItems} /> */}
      {/* 
        const props = {
          items: menuItems
        };
        const obj = new HeaderMenu(props);
        obj.render()
      */}
      {/* <ToggleButton text="Click me" /> */}
      {/* <ToggleButton text="Touch me" /> */}
    </div>
  );
}

export default App;
