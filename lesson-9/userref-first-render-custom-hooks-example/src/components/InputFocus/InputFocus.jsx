import { useEffect, useRef } from "react";
const InputFocus = ({value, placeholder, name}) => {
    const inputRef = useRef(null);

    useEffect(()=> {
        inputRef.current.focus()
    }, []);

    return <input ref={inputRef} type="text" value={value} placeholder={placeholder} name={name} />
}

export default InputFocus;