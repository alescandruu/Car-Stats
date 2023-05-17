import React, { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
    const [data, setData] = useState(null);

    const updateData = (newData) => setData(newData);

    const ContextValues = {
        data, 
        updateData,
    }

    return (
        <Context.Provider value={ContextValues}>
            {children}
        </Context.Provider>
    )
}
