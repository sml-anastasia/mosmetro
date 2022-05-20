import React, { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState(false);

    const login = () => {
        setAuth(true)
    }

    const value = {auth, login};

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}