import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import useLogin from "../../shared/hooks/useLogin";

import LoginForm from "../../client/LoginForm";

import {login} from "../../redux/auth/auth-operations";

const LoginPage = ()=> {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const isLogin = useLogin();

    useEffect(()=> {
        if(isLogin){
            navigate("/my-books");
        }
    }, [isLogin, navigate]);

    const loginUser = (data) => {
        dispatch(login(data));
    };

    return (
        <div className="container">
            <h2>Login Page</h2>
            <LoginForm onSubmit={loginUser} />
        </div>
    )
}

export default LoginPage;