import { useEffect, useState } from "react"

export const useNavBarStyle = () => {
    const [actualPath, setActualPath] = useState();
    useEffect(() => {
        setActualPath(window.location.pathname);
    }, [window.location.pathname]);
    const onSelectItem = () => {
        setActualPath(window.location.pathname);
    }
    return {
        actualPath,
        onSelectItem
    }

}
