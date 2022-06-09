import {useEffect} from "react";
import { useDispatch } from "react-redux";

import Navbar from "./client/Navbar";

import Routes from "./Routes";

import { getCurrentUser } from "./redux/auth/auth-operations";

import "./shared/styles/style.scss";

function App() {

  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <div className="App">
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;
