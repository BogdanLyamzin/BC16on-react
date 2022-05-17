import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";

// import menuItems from "./data/menuItems.json";

import './App.scss';

import {menuItems} from "./menuItems";

function App() {
  return (
    <div className="App">
      {/* createElement("div") */}
      <Navbar menuItems={menuItems} />
      {/* Navbar() */}
      <Main />
      <Footer />
    </div>
  );
}

export default App;
