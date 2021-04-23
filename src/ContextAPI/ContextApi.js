import { createContext, useContext, useReducer } from "react";

const ContextApi = createContext()

export const ContextProvider = ({reducer, initialState, children}) => (
    <ContextApi.Provider value ={useReducer(reducer, initialState)}>
        {children}
    </ContextApi.Provider>
)

export const useStateValue = () => useContext(ContextApi)