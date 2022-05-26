import useForm from "../../shared/hooks/useForm";

import {initialState} from "./initialState";

const LoginForm = ({onSubmit}) => {
    const {state, handleChange, handleSubmit} = useForm(initialState, onSubmit);

    const {email, password} = state;

    return (
        <form action="" onSubmit={handleSubmit}>
            <input value={email} name="email" type="email" onChange={handleChange} />
            <input value={password} name="password" type="password" onChange={handleChange} />
            <button type="submit">login</button>
        </form>
    )
}

export default LoginForm;