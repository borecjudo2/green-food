import React, {createContext, useState} from 'react'

interface LoginContext {
  isLogin: boolean
  open: () => void
  close: () => void
}

export const LoginContext = createContext<LoginContext>({
  isLogin: false,
  open: () => {},
  close: () => {}
})

export const LoginState = ({ children }: {children: React.ReactNode}) => {
  const [isLogin, setIsLogin] = useState(false)

  const open = () => setIsLogin(true)

  const close = () => setIsLogin(false)

  return (
    <LoginContext.Provider value={{ isLogin, open, close }}>
      { children }
    </LoginContext.Provider>
  )
}