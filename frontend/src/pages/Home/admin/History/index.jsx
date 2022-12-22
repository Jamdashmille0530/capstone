import React from 'react'
import { getAllUserInfo, updateUserRole } from 'utils/admin.routes'
//import .

const History = () => {
//   const { users, isLoading, mutate } = getAllUserInfo()
//   if (isLoading) {
//     return <div>Loading...</div>
//   }

//   console.log(users)
  return (
    <div className="flex flex-col ">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="border-b">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    firstName
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    middleName
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    lastName
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    email
                  </th>
                  
                 
                
                  
                  
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    role
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  ></th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    createdAt
                  </th>
                  {/* <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    updatedAt
                  </th>
                  */}
                  
                 
                  
                
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr class="border-b">
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {user.fname}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {user.mname}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {user.lname}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {user.email}
                    </td>
                    {/* --------- ROLE-------- */}
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {user.role}
                    </td>
                    {/* <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      <button
                        className="px-6 py-2 mt-4 border-green-700 text-black bg-green-300 rounded-lg hover:bg-gray-400 "
                        onClick={async () => {
                          await updateUserRole(user.id, 'ADMIN')
                          mutate()
                        }}
                      >
                        Update
                      </button>
                    </td> */}
                    {/* --------- ROLE-------- */}
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {user.createdAt}
                    </td>
                    {/* <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {user.updatedAt}
                    </td>
                    */}
                    {/* <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {user.program}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {user.school}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {user.year}
                    </td> */}
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
export default History
