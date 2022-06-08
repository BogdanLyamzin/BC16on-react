import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector, shallowEqual } from "react-redux";

import LoginForm from "../../client/LoginForm";

import {login} from "../../redux/auth/auth-operations";
import {isUserLogin} from "../../redux/auth/auth-selectors";

const LoginPage = ()=> {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const isLogin = useSelector(isUserLogin, shallowEqual);

    useEffect(()=> {
        if(isLogin){
            navigate("/my-books");
        }
    }, [isLogin]);

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