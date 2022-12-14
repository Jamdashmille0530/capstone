import React, { useContext } from "react";
import plusImg from "../assets/plus.svg";
import GlobalContext from "../context/GlobalContext";
import AuthContext from "context/AuthProvider";
export default function CreateEventButton() {
  const { auth } = useContext(AuthContext);
  const { setShowEventModal } = useContext(GlobalContext);
  return (
    <>
      {auth?.role === 'ADMIN' && (
        <div className="hidden md:flex">
          <button
            onClick={() => setShowEventModal(true)}
            className="border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl"
          >
            <img src={plusImg} alt="create_event" className="w-7 h-7" />
            <span className="pl-3 pr-7"> Create</span>
          </button>
        </div>
      )}
    </>
  )
}
