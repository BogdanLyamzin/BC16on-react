import './App.css';
// import {createElement} from "react-dom";

const pageHeader = "Welcome to Hell!";
const pageNumber = 1;
const westerosHouses = ["Таргариены", "Баратеоны", "Старки", "Ланнистеры", "Тиррелы", "Аррен", "Грейджои", "Мартеллы"];

const house = {
  name: "Ланнистеры",
  grandlord: "Тайвин"
}

function App() {
  return (
    <>
      <header>
        <div className='header-img' />
        {pageHeader}
      </header>

      <main>
        Page № {pageNumber}
        <p>{false}</p>
        <p>{true}</p>
        <p>{undefined}</p>
        <div>{westerosHouses}</div>
        {/* <div>{house}</div> */}
        <img src="" />
        <form>
          <label htmlFor="id">Ваше имя</label>
          <input id="name" autoComplete="true" disabled placeholder='Введите имя' />
          {/* disabled="true" */}
        </form>
      </main>
      <footer>Page footer</footer>
    </>
    // const header = createElement("header", null, "Welcome to Hell!");
    /*
    header = {
      tag: "header",
      attributes: [],
      content: "Welcome to Hell"
    }
    */
  );
}

export default App;
