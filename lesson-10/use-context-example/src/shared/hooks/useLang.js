import { useContext } from "react";

import { langContext } from "../../langContext";

const useLang = () => {
    const langValue = useContext(langContext);

    return langValue;
}

export default useLang;