import BooksContext from "./booksContext";

import Routes from "./Routes";

import "./shared/styles/style.scss";

function App() {

  return (
    <div className="App">
      <BooksContext>
        <Routes />
      </BooksContext>
    </div>
  );
}

export default App;
