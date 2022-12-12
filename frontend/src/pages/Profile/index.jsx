import React from "react";
import * as Style from "./styles";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Vue from "vue";
import VCalendar from "v-calendar";
import css from "./style.css";
import { Link } from "react-router-dom";
import Calendar from "components/Calendar";
import Lao1 from "assets/lao1.PNG";
import Lao2 from "assets/lao2.PNG";
import Lao3 from "assets/lao3.PNG";
import Lao4 from "assets/lao4.PNG";
import { useState } from "react";
import { getUser, me } from "utils/user.route";
import { useContext } from "react";
import AuthContext from "context/AuthProvider";
import laovid from "assets/loavid.gif";
// import Calendar from "react-calendar";
const Profile = () => {
  const [date, setDate] = useState(new Date());
  const { auth } = useContext(AuthContext);

  return (
    <>
      <div className="page-content page-container" id="page-content">
        <div className="padding">
          <div className="row container d-flex justify-content-center">
            <div className="col-xl-6 col-md-12">
              <div className="card user-card-full">
                <div className="row m-l-0 m-r-0">
                  <div className="col-sm-4 bg-c-lite-green user-profile">
                    <div className="card-block text-center text-white">
                      <div className=" pb-14  m-b-25">
                        {/* <img
                          src="https://img.icons8.com/bubbles/100/000000/user.png"
                          class="img-radius w-32 -my-7"
                          alt="User-Profile-Image"
                        /> */}

                        <div className="flex justify-around -my-24 -mx-10">
                          <div className="grid grid-cols-none place-items-start text-black">
                            <h1 className="font-bold">
                              Name: {auth?.lname}, {auth?.fname} {auth?.mname}{" "}
                            </h1>
                            {/* {auth?.role === "SCHOLAR" && (
                              <h1 className="font-bold">Year: {auth?.year}</h1>
                            )} */}
                          </div>
                          {/* {auth?.role === "SCHOLAR" && (
                            <div className="grid grid-cols-none place-content-center -my-12 text-black">
                              <h1 className="font-bold">
                                Program: {auth?.program}{" "}
                              </h1>
                              <h1 className="font-bold">
                                School: {auth?.school}
                              </h1>
                            </div>
                          )} */}
                        </div>
                      </div>
                    </div>
                  </div>
                  {auth?.role === "ADMIN" && (
                    <div className="">
                      <img src={laovid} />
                    </div>
                  )}
                  {auth?.role === "SCHOLAR" && (
                    <div>
                      <div className="app">
                        <div className="calendar-container border-2 border-green-700">
                          {/* <Calendar onChange={setDate} value={date} /> */}
                          <Calendar />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
