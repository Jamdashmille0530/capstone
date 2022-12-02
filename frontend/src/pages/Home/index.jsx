import React, { useContext } from "react";
import * as Style from "./styles";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import Lao1 from "assets/lao1.PNG";
import Lao2 from "assets/lao2.PNG";
import Lao3 from "assets/lao3.PNG";
import Lao4 from "assets/lao4.PNG";
import Apply from "assets/apply.png";
import Submit from "assets/submit.png";
import Fill from "assets/fillout.png";
import Signup from "assets/applyRegister_Black.png";
import AuthContext from "context/AuthProvider";

import { getAllUserWithoutPass } from "utils/user.route";

const Profile = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const picture = [
    {
      id: 1,
      photo: Lao1,
    },
    {
      id: 2,
      photo: Lao2,
    },
    {
      id: 3,
      photo: Lao3,
    },
    {
      id: 4,
      photo: Lao4,
    },
  ];

  const { auth } = useContext(AuthContext);

  return (
    <>
      <div className="min-h-screen ">
        <div className=" md:h-screen md:mb-4">
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            customTransition="background-image 1.5s linear"
            transitionDuration={1000}
            arrows={false}
          >
            {picture.map((e) => (
              <Style.CarouselPhoto key={e.id} background={e.photo} />
            ))}
          </Carousel>
        </div>

        <div>
          <h1 className="md:mt-4 text-2xl font-bold text-center text-black mb-8 -mt-20.2 border-solid border-2 p-4 border-green-900">
            How to Apply
          </h1>
          <div className=" md:mx-36 md:mb-32">
            <tr>
              <td>
                <h1 className=" text-5xl font-bold text-green-700">01</h1>
                <h1 className="text-2xl font-bold text-green-700">Apply</h1>
                <p className=" mb-10">
                  Click on the Sign Up button to start the application process.
                </p>
              </td>
              <td>
                <br></br>
                <img
                  src={Apply}
                  className="hidden md:flex w-24 h-26 rounded-md mx-6 -mt-11"
                />
              </td>
              <Link to="/signuptwo">
                <td>
                  <text className="text-5xl ml-7 font-bold text-green-700">
                    02
                  </text>

                  <h1 className="text-2xl ml-7 font-bold text-green-700">
                    Sign Up{' '}
                  </h1>

                  <p className="mb-10 ml-7">
                    If you are not yet a scholar, sign up to be one of us.
                  </p>
                </td>
              </Link>
              <td>
                <br></br>
                <img
                  src={Signup}
                  className="hidden md:flex  w-24 h-26 rounded-md mx-6 -mt-11"
                />
              </td>
            </tr>

            <tr>
              <td>
                <h1 className="text-5xl font-bold text-green-700">03</h1>
                <h1 className="text-2xl font-bold text-green-700">
                  Fill out the froms
                </h1>
                Fill all the forms presented with precise and credible
                information.
              </td>
              <td>
                <br></br>
                <img
                  src={Fill}
                  className="hidden md:flex  w-24 h-26 rounded-md mx-6 -mt-11"
                />
              </td>
              <td>
                <h1 className="text-5xl ml-7 font-bold text-green-700">04</h1>
                <h1 className="text-2xl ml-7 font-bold text-green-700">
                  Submit
                </h1>
                <p className="mb-10 ml-7">
                  Click on the submit button after filling all the forms with
                  the needed data.
                </p>
              </td>
              <td>
                <br></br>
                <img
                  src={Submit}
                  className="hidden md:flex  w-24 h-26 rounded-md mx-6 -mt-11"
                />
              </td>
            </tr>
          </div>
        </div>
        <div className=" bg-white  bg-opacity-50 gap-5">
          <h1 className="text-2xl font-bold text-center text-black font-serif mt-24 mb-9 p-4 border-solid border-2 border-green-800">
            Requirements
          </h1>
          <div className="flex justify-evenly ">
            <table className="grid sm:grid-auto md:grid-cols-3 gap-5 m-auto pb-8 pt-8 bg">
              <tr>
                <td>
                  <div className="flex flex-wrap bg-white rounded-md m-auto p-2 box-border h-56 w-40 border-2  border-green-900 ">
                    <h1 className="text-2xl font-bold text-green-900">
                      ID Picture
                    </h1>

                    <p>
                      Passport Size with white background of Student Applicant
                    </p>
                  </div>
                </td>

                <td>
                  <div className="flex flex-wrap bg-white rounded-md p-2 m-auto ml-0.5 mr-0.5 box-border h-56 w-40 border-2  border-green-900">
                    <h1 className="text-2xl font-bold text-green-900">
                      Grade Slip
                    </h1>

                    <p className="-mt-4">
                      Form 137 and Form 138 of the Student Applicant
                    </p>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="flex flex-wrap bg-white rounded-md p-2 m-auto mr-0.5 box-border h-56 w-40 border-2 border-green-900">
                    <h1 className="text-2xl font-bold text-green-900">
                      Enrollment Slip
                    </h1>

                    <p>
                      Photocopy of Registration Form of the Student Applicant
                    </p>
                  </div>
                </td>

                <td>
                  <div className="flex flex-wrap bg-white rounded-md p-2 m-auto box-border h-56 w-40 border-2 border-green-900">
                    <h1 className="text-4xl font-bold text-green-900">NCAE</h1>

                    <p>Photocopy of National Career Assessment Examination</p>
                  </div>
                </td>
              </tr>

              <tr>
                <td>
                  <div className="flex flex-wrap bg-white rounded-md p-2 m-auto mr-0.5 box-border h-56 w-40 border-2 border-green-900">
                    <h1 className="text-2xl font-bold text-green-900">
                      Electric Bill
                    </h1>

                    <p>Photocopy of Electric bill in household</p>
                  </div>
                </td>

                <td>
                  <div className="flex flex-wrap bg-white rounded-md p-2 m-auto box-border h-56 w-40 border-2 border-green-900">
                    <h1 className="text-2xl font-bold text-green-900">
                      Water Bill
                    </h1>

                    <p>Photocopy of Water bill in household</p>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          <div className="flex justify-evenly">
            <div className="  bg-white  mb-20 -mt-0 border-t-2">
              <div className="grid sm:grid-auto md:grid-cols-3 gap-5 m-auto pb-8 pt-8 ">
                <tr>
                  <td>
                    <div className="flex flex-wrap bg-white rounded-md p-2 m-auto box-border h-56 w-40 border-2 border-green-900">
                      <h1 className="text-2xl font-bold text-green-900 ">
                        WiFi Bill
                      </h1>

                      <p className="-mt-7">
                        Photocopy of WiFi bill in household
                      </p>
                    </div>
                  </td>

                  <td>
                    <div className="flex flex-wrap bg-white rounded-md ml-1 mr-1 p-2 m-auto box-border h-56 w-40 border-2 border-green-900">
                      <h1 className="text-2xl font-bold text-green-900">
                        Birth Certificate
                      </h1>

                      <p>Photocopy and Original Copy of PSA</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="flex flex-wrap bg-white rounded-md p-2 mr-1 m-auto box-border h-56 w-40 border-2 border-green-900">
                      <h1 className="text-2xl font-bold text-green-900">
                        Indigency
                      </h1>

                      <p>Certificate of Indigency</p>
                    </div>
                  </td>

                  <td>
                    <div className="flex flex-wrap bg-white rounded-md p-2 m-auto box-border h-56 w-40 border-2 border-green-900">
                      <h1 className="text-2xl font-bold text-green-900">
                        Auto-biography
                      </h1>

                      <p>Handwritten Autobiography</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="flex flex-wrap bg-white rounded-md p-2 mr-1 m-auto box-border h-56 w-40 border-2 border-green-900">
                      <h1 className="text-2xl font-bold text-green-900">
                        Pantawid ID
                      </h1>

                      <p>Photocopy and Original copy of Pantawid ID</p>
                    </div>
                  </td>

                  <td>
                    <div className="flex flex-wrap bg-white rounded-md p-2 m-auto box-border h-56 w-40 border-2 border-green-900">
                      <h1 className="text-2xl font-bold text-green-900">
                        Home Address
                      </h1>

                      <p>Sketch of Home Address</p>
                    </div>
                  </td>
                </tr>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Profile;
