import {useEffect} from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import useLogin from "../../shared/hooks/useLogin";

import RegisterForm from "../../client/RegisterForm";

import { signup } from "../../redux/auth/auth-operations";


const RegisterPage = ()=> {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const isLogin = useLogin();

    useEffect(()=> {
        if(isLogin){
            navigate("/my-books");
        }
    }, [isLogin, navigate]);

    const registerUser = (data) => {
        dispatch(signup(data));
    }

    return (
        <div className="container">
            <h2>Register Page</h2>
            <RegisterForm onSubmit={registerUser} />
        </div>
    )
}

export default RegisterPage;