import { Navigate, Route, Routes } from "react-router-dom";

import PublicRoute from "./shared/components/PublicRoute";
import PrivateRoute from "./shared/components/PrivateRoute";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MyBooksPage from "./pages/MyBooksPage";
import MyFavoriteBooksPage from "./pages/MyFavoriteBooksPage";

const MyRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route element={<PublicRoute />}>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Route>

            <Route element={<PrivateRoute />}>
                <Route path="my-books" element={<MyBooksPage />} />
                <Route path="my-favorite-books" element={<MyFavoriteBooksPage />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    )
}

export default MyRoutes;