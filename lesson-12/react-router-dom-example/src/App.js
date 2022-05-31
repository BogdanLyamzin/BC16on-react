import {lazy, Suspense} from "react";
import {Routes, Route} from "react-router-dom";

import HeaderMenu from './modules/HeaderMenu';

import './App.css';

const HomePage = lazy(()=> import("./pages/HomePage"));
const SinglePostPage = lazy(()=>import("./pages/SinglePostPage"));
const PostsSearchPage = lazy(()=>import("./pages/PostsSearchPage"));
const MyBooksPage = lazy(()=>import("./pages/MyBooksPage"));
const ContactsPage = lazy(()=>import("./pages/ContactsPage"));
const NotFoundPage = lazy(()=>import("./pages/NotFoundPage"));
const CommentsPage = lazy(()=>import("./pages/CommentsPage"));

function App() {

  return (
    <div className="App">
      <HeaderMenu />
      <Suspense fallback={<p>....Loading</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts/:id" element={<SinglePostPage />}>
            <Route path="comments" element={<CommentsPage />} />
          </Route>
          <Route path="/posts-search" element={<PostsSearchPage />} />
          <Route path="/my-books" element={<MyBooksPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
