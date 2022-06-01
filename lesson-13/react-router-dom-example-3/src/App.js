import {Routes, Route} from "react-router-dom";

import Menu from "./modules/Menu";

import HomePage from "./pages/HomePage";
import PeoplePage from "./pages/PeoplePage";
import SinglePeoplePage from "./pages/SinglePeoplePage";
import SinglePeopleFilmsPage from "./pages/SinglePeopleFilmsPage";

import './App.css';

function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/people" element={<PeoplePage />} />
        <Route path="/people/:id" element={<SinglePeoplePage />}>
          <Route path="films" element={<SinglePeopleFilmsPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
