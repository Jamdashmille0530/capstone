import React from 'react'
import {
  getAllUserInfo,
  updateUserRole,
  rejectApplicant,
  acceptApplicant,
} from 'utils/admin.routes'

//import .

const Admin = () => {
  const { users, isLoading, mutate } = getAllUserInfo()
  if (isLoading) {
    return <div>Loading...</div>
  }
  const Input = ({ text, type, placeholder }) => {
    return (
      <div className="mt-2">
        <label className="block">{text}</label>
        <input
          type={type}
          placeholder={placeholder}
          // className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none
          //     focus:ring-1 focus:ring-green-600"
        />
      </div>
    )
  }
  const userApplication = users.filter((user) => user.role === 'SCHOLAR')
  return (
    <div className="flex justify-center min-h-screen mt-7">
      <div className="overflow-x-auto lg:-mx-11 ">
        <div className="py-2 inline-block lg:px-8 ">
          <h1 className="text-2xl font-bold text-center text-black font-serif mt-24 mb-9 p-4 border-solid border-2 border-green-800">
            Scholar
          </h1>
          <div className=" border-b border-black lg:px-8 ">
            <table className="table table-striped border-separate border-spacing-2 border border-slate-400  shadow overflow-hidden ">
              <thead className=" bg-green-400 text-green-500">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-2 py-3 text-left border border-slate-300"
                  >
                    No.
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-2 py-3 text-left border border-slate-300"
                  >
                    First Name
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-2 py-3 text-left border border-slate-300"
                  >
                    Middle Name
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-2 py-3 text-left border border-slate-300"
                  >
                    Last Name
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-2 py-1 text-left border border-slate-300"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-2 py-3 text-left border border-slate-300"
                  >
                    Address
                  </th>

                  {/* <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-2 py-3 text-left border border-slate-300"
                  >
                    role
                  </th> */}
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-2 py-3 text-left border border-slate-300"
                  >
                    Program
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-2 py-3 text-left border border-slate-300"
                  >
                    School
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-2 py-3 text-left border border-slate-300"
                  >
                    Year
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-2 py-3 text-left border border-slate-300"
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {userApplication.map((user, i) => (
                  <tr class="border-b">
                    <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900 ">
                      {i + 1}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
                      {user.fname}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
                      {user.mname}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
                      {user.lname}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
                      {user.email}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
                      {user.address}
                    </td>

                    {/* --------- ROLE-------- */}
                    {/* <td class="text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
                      {user.role}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
                      {user.role}
                    </td> */}
                    {/* user.school */}
                    {/* <td class="text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
                      <button
                        className="px-6 py-2 mt-4 border-green-700 text-black bg-green-300 rounded-lg hover:bg-gray-400 "
                        // onClick={async () => {
                        //   await updateUserRole(user.id, {school:" " });
                        //   mutate();
                        // }}
                      >
                        Update
                      </button>
                    </td> */}
                    {/* --------- ROLE-------- */}
                    <td class="text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
                      <input type="text" placeholder="Program">
                        <div className="mt-1">{user.program}</div>
                      </input>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
                      <input type="text" placeholder="School">
                        <div className="mt-1">{user.school}</div>
                      </input>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
                      <input type="text" placeholder="Year">
                        <div className="mt-1">{user.year}</div>
                      </input>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Admin
