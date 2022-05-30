import {Routes, Route} from "react-router-dom";

import HeaderMenu from './modules/HeaderMenu';

import HomePage from "./pages/HomePage";
import SinglePostPage from "./pages/SinglePostPage";
import PostsSearchPage from "./pages/PostsSearchPage";
import MyBooksPage from "./pages/MyBooksPage";
import ContactsPage from "./pages/ContactsPage";
import NotFoundPage from "./pages/NotFoundPage";

import './App.css';

function App() {

  return (
    <div className="App">
      <HeaderMenu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts/:id" element={<SinglePostPage />} />
        <Route path="/posts-search" element={<PostsSearchPage />} />
        <Route path="/my-books" element={<MyBooksPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
