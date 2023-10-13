import reducer from "../context/reducer"
import React, { createContext, useContext, useReducer } from 'react'; 




const initalState = {
    currentUser : null,
    openLogin : false,
}

const Context = createContext(initalState)

export const useValue = () => {
    return useContext(Context)
}




const ContextProvider = ({children}) => {
  const [state , dispatch] = useReducer(reducer , initalState)
    return (
     <Context.Provider value = {{state , dispatch}}>{children}</Context.Provider>
    )
  }
export default ContextProvider;

