import {useEffect} from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector, shallowEqual } from "react-redux";

import RegisterForm from "../../client/RegisterForm";

import { signup } from "../../redux/auth/auth-operations";
import {isUserLogin} from "../../redux/auth/auth-selectors";

const RegisterPage = ()=> {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const isLogin = useSelector(isUserLogin, shallowEqual);

    useEffect(()=> {
        if(isLogin){
            navigate("/my-books");
        }
    }, [isLogin]);

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