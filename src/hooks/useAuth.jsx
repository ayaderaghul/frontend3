// import {useState, useEffect} from "react"

// export function useAuth() {
//     const [token, setToken] = useState(() => localStorage.getItem("token"))

//     const saveToken = (newToken) =>{
//         setToken(newToken)
//         localStorage.setItem("token", newToken)
//     }

//     const logout = () =>{
//         setToken(null)
//         localStorage.removeItem("token")
//     }
//     return {token, saveToken, logout}
// }


import {createContext, useContext, useState,useEffect} from "react"

const AuthContext = createContext()

export function AuthProvider({children}) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() =>{
        const token = localStorage.getItem("token")
        if (token) {
            setUser({token})
        }
        setLoading(false)
    }, [])

    const login=(token) =>{
        localStorage.setItem("token", token)
        setUser({token})
    }

    const logout = () =>{
        localStorage.removeItem("token")
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{user,login,logout,loading}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext)
}