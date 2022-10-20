import React from 'react'
import Calendar from "components/Calendar";
import AuthContext from "context/AuthProvider";
function Scholar() {
    
  return (
    <>
      
      
                  <div>
                    <div className="app">
                      <div className="calendar-container border-2 border-green-700">
                        {/* <Calendar onChange={setDate} value={date} /> */}
                        <Calendar />
                      </div>
                    </div>
                  </div>
                
              
    </>
  );
}

export default Scholar