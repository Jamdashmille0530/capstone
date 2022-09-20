import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";

function Dashy() {
  const [date, setDate] = useState(new Date());

  return (
    <>
      <div className="flex justify-center">
        <div className="app">
          <h1 className="header">React Calendar</h1>
          <div className="calendar-container">
            <Calendar onChange={setDate} value={date} />
          </div>
          <div className="text-center">
            Selected date: {date.toDateString()}
          </div>
          <div className="flex justify-end">
            <Link to="/">
              <button className="p-2 rounded-lg bg-green-600 text-gray-50 ">
                Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashy;
