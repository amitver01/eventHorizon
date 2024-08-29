/* eslint-disable react/prop-types */
import {createContext, useEffect, useState} from "react";
import axios from 'axios';


export const UserContext = createContext({});

export function UserContextProvider({children}){
  const [user, setUser ] = useState(null);
  useEffect(() => {
    if (!user) {
      axios.get('https://backend-event-qj0c.onrender.com/api/auth/profile').then(({data}) =>{
        setUser(data);
      })
    }
  },[]);
  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  )
}