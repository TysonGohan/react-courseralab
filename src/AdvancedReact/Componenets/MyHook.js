import { useEffect } from "react";

const useMyHook = (varName) =>
{
    useEffect( () =>
        {
            console.log(varName)
        }, [varName]
    );

}

export { useMyHook };