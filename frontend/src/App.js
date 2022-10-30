import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from 'components/Navbar'
import Home from 'pages/Home'
import Login from 'pages/Login'
import Signup from 'pages/Signup'
import Dashboard from 'pages/Dashboard'
import Profile from 'pages/Profile'
import SignUptwo from 'pages/SignUptwo'
import Chat from 'pages/Chat'
import Footer from 'components/Footer'
import Terms from 'pages/Terms'
import Dashy from 'pages/Dashy'
import Admin from 'pages/Home/admin'
import AdminChat from 'pages/Home/admin/adminChat'
import Application from 'pages/Home/admin/Application'
import Scholar from 'pages/Home/admin/Scholar'

import { SWRConfig } from 'swr'
import { fetcher } from 'utils/fetcher'
import { useContext } from 'react'
import AuthContext from 'context/AuthProvider'
import Protected from 'lib/protected'

function App() {
  const { auth } = useContext(AuthContext)
  return (
    <SWRConfig
      value={{
        fetcher,
      }}
    >
      <div className="App">
        <Navbar />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signuptwo" element={<SignUptwo />} />
          <Route path="/chat" element={<Chat />} />
          <Route
            path="/login"
            element={!auth ? <Login /> : <Navigate to="/profile" replace />}
          />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/profile"
            element={
              <Protected isLoggedIn={auth}>
                <Profile />
              </Protected>
            }
          />
          <Route path="/footer" element={<Footer />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/dashy" element={<Dashy />} />
          <Route
            path="/admin"
            element={
              <Protected isLoggedIn={auth?.role === 'ADMIN'}>
                <Admin />
              </Protected>
            }
          />
          <Route
            path="/adminChat"
            element={
              <Protected isLoggedIn={auth?.role === 'ADMIN'}>
                <AdminChat />
              </Protected>
            }
          />
          <Route
            path="/application"
            element={
              <Protected isLoggedIn={auth?.role === 'ADMIN'}>
                <Application />
              </Protected>
            }
          />
          <Route
            path="/scholar"
            element={
              <Protected isLoggedIn={auth?.role === 'ADMIN'}>
                <Scholar />
              </Protected>
            }
          />
        </Routes>

        <Footer />
      </div>
    </SWRConfig>
  )
}

export default App
