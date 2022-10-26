import { createContext, useState } from 'react'

const getInitialState = () => {
  const user = localStorage.getItem('user')
  return user ? JSON.parse(user) : null
}

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(getInitialState)

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
