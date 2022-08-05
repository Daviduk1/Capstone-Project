import React, {useState, createContext} from 'react'
//import axios from 'axios'

const UserContext = createContext();

export const UserProvider = (props) => {
    const [user, setUser] = useState({});
    const [items, setItemsGlobal] = useState([]);


    return (
        <UserContext.Provider value={{user, setUser, items, setItemsGlobal}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContext;