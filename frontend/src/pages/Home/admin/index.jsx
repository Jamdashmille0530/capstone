import React from "react";
import { Link } from "react-router-dom";
function admin() {
  return (
    <>
      <div className="flex justify-evenly grid-cols-3 pt-6">
        <Link to="/profile">
          <button className=" border-green-900 border-2 border-solid rounded-xl p-4 text-7xl">
            Scholar
          </button>
        </Link>
        <Link to="/application">
          <button className="border-green-900 border-2 border-solid rounded-xl p-4 text-7xl">
            Application
          </button>
        </Link>
        <Link to="/adminChat">
          <button className="border-green-900 border-2 border-solid rounded-xl p-4 text-7xl">
            Chat
          </button>
        </Link>
      </div>
    </>
  );
}

export default admin;
