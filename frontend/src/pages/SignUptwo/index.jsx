import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { signUp } from 'utils/user.route'
import { useNavigate } from 'react-router-dom'
import laovid from 'assets/loavid.gif'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object().shape({
  fname: yup.string().required('First Name is Required'),
  mname: yup.string().required('Middle Name is Required'),
  lname: yup.string().required('Last Name is Required'),
  email: yup.string().email().required('Please insert a valid email'),
  address: yup.string().required('Please enter an Address'),
})

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })

  const navigate = useNavigate()

  const onSubmit = async (data) => {
    await signUp(data)
    navigate('/signUp', { replace: true })
  }

  return (
    <>
      <div className="flex justify-center py-5 pt-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="pl-6">
            <div className="w-96 pl-2 pr-2 pt-5 pb-4 bg-white rounded-lg overflow-hidden md:max-w-lg ">
              <div className="md:flex">
                <div className="w-full px-4 py-6 ">
                  <div className="required">
                    <div className="mb-1">
                      {' '}
                      {/* <span className="text-sm">First Name</span>{" "} */}
                      <input
                        className="h-12 px-2 mb-3.5 w-full  border-gray-400 border-2 rounded focus:outline-none focus:border-green-700"
                        {...register('fname')}
                        placeholder="First Name *"
                        type="text"
                      />{' '}
                      <p className="text-red-600">{errors.fname?.message}</p>
                    </div>
                  </div>
                  <div className="Middle Name">
                    <div className="mb-1">
                      {' '}
                      {/* <span className="text-sm">Middle Name</span>{" "} */}
                      <input
                        className="h-12 px-2 mb-3.5 w-full border-gray-400 border-2 rounded focus:outline-none focus:border-green-700"
                        {...register('mname')}
                        placeholder="Middle Name *"
                        type="text"
                      />{' '}
                      <p className="text-red-600">{errors.mname?.message}</p>
                    </div>
                  </div>
                  <div className="Last Name">
                    <div className="mb-1">
                      {' '}
                      {/* <span className="text-sm">Last Name</span>{" "} */}
                      <input
                        className="h-12 px-2 mb-3.5 w-full border-gray-400 border-2 rounded focus:outline-none focus:border-green-700"
                        {...register('lname')}
                        placeholder="Last Name *"
                        type="text"
                      />{' '}
                      <p className="text-red-600">{errors.lname?.message}</p>
                    </div>
                  </div>
                  <div className="Email">
                    <div className="mb-1">
                      {' '}
                      {/* <span className="text-sm">Email</span>{' '} */}
                      <input
                        className="h-12 px-2 mb-3.5 w-full border-gray-400 border-2 rounded focus:outline-none focus:border-green-700"
                        {...register('email')}
                        placeholder="Email *"
                        type="text"
                      />{' '}
                      <p className="text-red-600">{errors.email?.message}</p>
                    </div>
                  </div>
                  <div className="Address">
                    <div className="mb-1">
                      {' '}
                      {/* <span className="text-sm">Address</span>{' '} */}
                      <textarea
                        className="h-24 py-1 mb-3.5 px-2 w-full border-2 border-gray-400 rounded focus:outline-none focus:border-green-700 resize-none"
                        {...register('address')}
                        placeholder="Address *"
                        type="text"
                      ></textarea>{' '}
                      <p className="text-red-600">{errors.address?.message}</p>
                    </div>
                  </div>
                  <div className="mb-1"></div>
                  <div className="mt-3 text-right">
                    {' '}
                    <a href="/">Cancel</a>{' '}
                    <button className="ml-2 h-10 w-32 bg-green-700 rounded text-white hover:bg-green-900">
                      Next
                    </button>{' '}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className=" pl-2">
          <img src={laovid} />
        </div>
      </div>
    </>
  )
}

export default Signup
