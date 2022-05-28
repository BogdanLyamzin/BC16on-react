import { useState, createContext } from "react";

export const langContext = createContext("ua");

const LangContext = ({children}) => {
    const [lang, setLang] = useState("ua");

    const switchLang = () => {
        setLang(prevLang => {
            const newLang = prevLang === "ua" ? "ru" : "ua";
            return newLang;
        })
    }

    return (
        <langContext.Provider value={{lang, switchLang}}>
            {children}
        </langContext.Provider>
    )
}

export default LangContext;