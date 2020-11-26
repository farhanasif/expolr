import React, {useState} from 'react';

const AuthContext = React.createContext();

const AuthProvider = (props)=>{
    const [CurrentUser, setCurrentUser] = useState({});
    const [IsLoggedIn, setIsLoggedIn] = useState(false);

    return(
        <AuthContext.Provider value = {{ 
            CurrentUser:setCurrentUser,
            setCurrentUser:setCurrentUser,
            IsLoggedIn:IsLoggedIn,
            setIsLoggedIn:setIsLoggedIn,
             }}
             >
            {props.children}
        </AuthContext.Provider>
    );
}

export {AuthContext, AuthProvider};