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
          <h1 className="text-2xl font-bold text-center text-black font-serif mt-24 mb-9 p-4 border-solid border-2 border-green-800">
            Applicant and Scholar attachment
          </h1>
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="border-b">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-2 py-3 text-left border border-slate-300"
                  >
                    No.
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    First Name
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Middle Name
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Last Name
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Role
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
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-2 py-3 text-left border border-slate-300"
                  >
                    Id Picture
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-2 py-3 text-left border border-slate-300"
                  >
                    Grade Slip
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-2 py-3 text-left border border-slate-300"
                  >
                    NCAE Result
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-2 py-3 text-left border border-slate-300"
                  >
                    Certificate Of Indigency
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-2 py-3 text-left border border-slate-300"
                  >
                    Autobiography
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-2 py-3 text-left border border-slate-300"
                  >
                    Pantawid ID
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-2 py-3 text-left border border-slate-300"
                  >
                    Sketch Address
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-2 py-3 text-left border border-slate-300"
                  >
                    Birth Certificate
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-2 py-3 text-left border border-slate-300"
                  >
                    Enrollment Slip
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-2 py-3 text-left border border-slate-300"
                  >
                    Electric Bill
                  </th>

                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-2 py-3 text-left border border-slate-300"
                  >
                    Telephone bill
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-2 py-3 text-left border border-slate-300"
                  >
                    Water Bill
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr class="border-b">
                    <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900 ">
                      {i + 1}
                    </td>
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

                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {user.createdAt}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
                      {user.idPicture}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
                      {user.gradeSlip}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
                      {user.ncae}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
                      {user.indigency}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
                      {user.autobiography}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
                      {user.pantawidId}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
                      {user.sketchAddress}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
                      {user.bcert}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
                      {user.eslip}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
                      {user.ebill}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
                      {user.tbill}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
                      {user.wbill}
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

            {/* TABLE PARA SA REMOVED */}
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
