import React from "react";
//import .

const Application = () => {
  return (
    <div className="m-auto box-border border-4 border-black w-auto ml-2 mr-2  p-5 mt-5 bg-gray-300">
      <table>
        <thead>
          <tr>
            <td 
              style={{
                width: "50%",
                textAlign: "center",
                border: "3px solid #000000",
              }}
            >
              <th>Name</th>
            </td>
            <td
              class=".td"
              style={{
                width: "50%",
                textAlign: "center",
                border: "3px solid #000000",
              }}
            >
              <th>Address</th>
            </td>
            <td
              class=".td"
              style={{
                width: "50%",
                textAlign: "center",
                border: "3px solid #000000",
              }}
            >
              <th>Phone Number</th>
            </td>
            <td
              class=".td"
              style={{
                width: "50%",
                textAlign: "center",
                border: "3px solid #000000",
              }}
            >
              <th>Email</th>
            </td>
            <td
              class=".td"
              style={{
                width: "50%",
                textAlign: "center",
                border: "3px solid #000000",
              }}
            >
              <th>Actions</th>
            </td>
          </tr>
        </thead>
      </table>
    </div>
  );
};
export default Application;
