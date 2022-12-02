import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import AuthContext from 'context/AuthProvider'
export default function Labels() {
    const { auth } = useContext(AuthContext)
  const { labels, updateLabel } = useContext(GlobalContext);
  return (
    <>
      {auth?.role === 'ADMIN' && (
        <React.Fragment>
          <div className="hidden md:flex">
            <p className="text-gray-500 font-bold mt-10">Label</p>
            {labels.map(({ label: lbl, checked }, idx) => (
              <label key={idx} className="items-center mt-3 block">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() =>
                    updateLabel({ label: lbl, checked: !checked })
                  }
                  className={`form-checkbox h-5 w-5 text-${lbl}-400 rounded focus:ring-0 cursor-pointer`}
                />
                <span className="ml-2 text-gray-700 capitalize">{lbl}</span>
              </label>
            ))}
          </div>
        </React.Fragment>
      )}
    </>
  )
}
