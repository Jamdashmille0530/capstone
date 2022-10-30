import React from 'react'
import {
  getAllUserInfo,
  updateUserRole,
  rejectApplicant,
  acceptApplicant,
} from 'utils/admin.routes'

//import .

const Application = () => {
  const { users, isLoading, mutate } = getAllUserInfo()
  if (isLoading) {
    return <div>Loading...</div>
  }

  const userApplication = users.filter(
    (user) => user.role === 'APPLICANT' || user.role === 'SCHOLAR'
  )

  return (
    <div className="flex flex-col min-h-screen ">
      <div className="overflow-x-auto lg:-mx-8 ">
        <div className="py-2 inline-block lg:px-8 ">
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
                    firstName
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-2 py-3 text-left border border-slate-300"
                  >
                    middleName
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-2 py-3 text-left border border-slate-300"
                  >
                    lastName
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-2 py-1 text-left border border-slate-300"
                  >
                    email
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-2 py-3 text-left border border-slate-300"
                  >
                    address
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-2 py-3 text-left border border-slate-300"
                  >
                    idPicture
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-2 py-3 text-left border border-slate-300"
                  >
                    gradeSlip
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-2 py-3 text-left border border-slate-300"
                  >
                    NCAE
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-2 py-3 text-left border border-slate-300"
                  >
                    certificateOfIndigency
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-2 py-3 text-left border border-slate-300"
                  >
                    autobiography
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-2 py-3 text-left border border-slate-300"
                  >
                    pantawidID
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-2 py-3 text-left border border-slate-300"
                  >
                    sketchAddress
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-2 py-3 text-left border border-slate-300"
                  >
                    role
                  </th>
                  {/* <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-2 py-3 text-left "
                  ></th> */}
                  {/* <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-2 py-3 text-left border border-slate-300"
                  >
                    createdAt
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-2 py-3 text-left border border-slate-300"
                  >
                    updatedAt
                  </th> */}
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-2 py-3 text-left border border-slate-300"
                  >
                    birthCertificate
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-2 py-3 text-left border border-slate-300"
                  >
                    electricBill
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-2 py-3 text-left border border-slate-300"
                  >
                    eslip
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-2 py-3 text-left border border-slate-300"
                  >
                    tbill
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-2 py-3 text-left border border-slate-300"
                  >
                    waterBill
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-2 py-3 text-left border border-slate-300"
                  >
                    program
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-2 py-3 text-left border border-slate-300"
                  >
                    school
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-2 py-3 text-left border border-slate-300"
                  >
                    year
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-2 py-3 pr-20 text-left  "
                  ></th>
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
                    {/* --------- ROLE-------- */}
                    <td class="text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
                      {user.role}
                    </td>
                    {/* <td class="text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
                      <button
                        className="px-6 py-2 mt-4 border-green-700 text-black bg-green-300 rounded-lg hover:bg-gray-400 "
                        // onClick={async () => {
                        //   await updateUserRole(user.id, "ADMIN");
                        //   mutate();
                        // }}
                      >
                        Update
                      </button>
                    </td> */}
                    {/* --------- ROLE-------- */}
                    {/* <td class="text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
                      {user.createdAt}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
                      {user.updatedAt}
                    </td> */}
                    <td class="text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
                      {user.bcert}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
                      {user.ebill}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
                      {user.eslip}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
                      {user.tbill}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
                      {user.wbill}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
                      {user.program}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
                      {user.school}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
                      {user.year}
                    </td>
                    {/*accept and reject*/}
                    <td class="text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
                      <button
                        className="px-3 py-2 mt-4 border-green-700 text-black bg-green-300 rounded-lg hover:bg-gray-400 "
                        onClick={async () => {
                          await acceptApplicant(user.id, user.email)
                          alert('Accepted, sent to email')
                        }}
                      >
                        Accept
                      </button>
                      <button
                        className="ml-2 px-3 py-2 mt-4 border-green-700 text-black bg-red-300 rounded-lg hover:bg-gray-400 "
                        onClick={async () => {
                         
                          await rejectApplicant(user.id, user.email)
                           alert('Rejected, sent to email')
                        }}
                      >
                        Reject
                      </button>
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
export default Application
