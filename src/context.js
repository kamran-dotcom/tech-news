import React, { useContext } from "react";

// context creation
const AppContext = React.createContext();

// create provider
const AppProvider = ({children}) =>{
    return (
        <AppContext.Provider value={"kamran"}>{children}</AppContext.Provider>
    );
}

// custom hook creation

const useGlobalHook = () =>{
    return useContext(AppContext);
}

export {AppContext,AppProvider, useGlobalHook};