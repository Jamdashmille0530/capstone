import { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo2 from 'assets/logolao.png'
import { useForm } from 'react-hook-form'
import AuthContext from 'context/AuthProvider'
import { loginUser } from 'utils/auth.routes'

const Input = ({ text, type, placeholder, args }) => {
  return (
    <div className="mt-4">
      <label className="block">{text}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none
              focus:ring-1 focus:ring-green-600"
        {...args}
      />
    </div>
  )
}

const Login = () => {
  const [error, setError] = useState('')
  const { setAuth, auth } = useContext(AuthContext)
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  const response = (resp) => {
    console.log(resp)
  }

  useEffect(() => {
    google.accounts.id.initialize({
      client_id: 'CLIENT_ID',
      callback: response,
    })

    google.accounts.id.renderButton(document.getElementById('test'), {
      theme: 'outline',
      size: 'large',
    })
  }, [])

  const onSubmit = async (data) => {
    try {
      const res = await loginUser(data)
      const accessToken = res.data?.accessToken
      const user = res.data?.user

      localStorage.setItem('user', JSON.stringify(user))
      localStorage.setItem('accessToken', JSON.stringify(accessToken))
      setAuth(user)
      navigate('/Profile', { replace: true })
    } catch (error) {
      setError(error?.response.data?.message)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <div className="flex justify-center">
          <div className="w-6/12 sm:w-4/12 px-2">
            <img
              src={logo2}
              className="rounded max-w-full h-20 align-middle border-none"
            />
          </div>
        </div>
        <h3 className="text-2xl font-bold text-center text-black">
          Login to your account
        </h3>
        {/* <input type="file" accept="*.jpeg" /> */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-4">
            <Input
              type={'email'}
              placeholder="Email"
              text="Email"
              args={register('email')}
            />
            <Input
              type={'password'}
              placeholder="Password"
              text="Password"
              args={register('password')}
            />
            {error.length > 0 && (
              <span style={{ color: 'red', fontSize: '11px' }}>{error}</span>
            )}
            <div className="flex items-baseline justify-between">
              <button
                type="submit"
                className="px-6 py-2 mt-4 text-white bg-green-700 rounded-lg hover:bg-green-900"
              >
                Login
              </button>
              {/**
              Button
               */}
              <br />
              <div id="test"></div>
              <a
                href="/Profile"
                className="text-sm text-green-600 hover:underline"
              >
                Forgot password?
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
