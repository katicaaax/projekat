import { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";

const StateContext = createContext({
    user: null,
    token:  null,
    setUser: () => {},
    setToken: () => {}
})

export const ContextProvider = ({children}) => {
   const [user, setUser] = useState({});
   const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));

   const setToken = (token) => {
    _setToken(token)
    if(token){
        localStorage.setItem('ACCESS_TOKEN', token); //cuvamo u local storage userov token
    }else {
        localStorage.removeItem('ACCESS_TOKEN')
    }
   }
   
    return (
        <StateContext.Provider value={{ //duple zagrade jer prenosim objekat
user,
token,
setUser,
setToken

        }}> 
{children} 
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)