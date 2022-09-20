import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { signUp } from "utils/user.route";
import { useNavigate } from "react-router-dom";
import laovid from "assets/loavid.gif";




const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    await signUp(data);
    navigate("/signUp", { replace: true });
  };


  return (
    <>
      <div className="flex justify-center py-5 pt-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="pl-6">
            <div className="w-96 pl-2 pr-2 pt-5 pb-4 bg-white rounded-lg overflow-hidden md:max-w-lg ">
              <div className="md:flex">
                <div className="w-full px-4 py-6 ">
                  <div className="required">
                    <div className="mb-1">
                      {" "}
                      <span className="text-sm">First Name</span>{" "}
                      <input
                        type="text"
                        className="h-12 px-2 w-full  border-gray-400 border-2 rounded focus:outline-none focus:border-green-700"
                        {...register("fname")}
                      />{" "}
                      
                    </div>
                  </div>
                  <div className="Middle Name">
                    <div className="mb-1">
                      {" "}
                      <span className="text-sm">Middle Name</span>{" "}
                      <input
                        type="text"
                        className="h-12 px-2 w-full border-gray-400 border-2 rounded focus:outline-none focus:border-green-700"
                        {...register("mname")}
                      />{" "}
                    </div>
                  </div>
                  <div className="Last Name">
                    <div className="mb-1">
                      {" "}
                      <span className="text-sm">Last Name</span>{" "}
                      <input
                        type="text"
                        className="h-12 px-2 w-full border-gray-400 border-2 rounded focus:outline-none focus:border-green-700"
                        {...register("lname")}
                      />{" "}
                    </div>
                  </div>
                  <div className="Email">
                    <div className="mb-1">
                      {" "}
                      <span className="text-sm">Email</span>{" "}
                      <input
                        type="text"
                        className="h-12 px-2 w-full border-gray-400 border-2 rounded focus:outline-none focus:border-green-700"
                        {...register("email")}
                      />{" "}
                    </div>
                  </div>
                  <div className="Address">
                    <div className="mb-1">
                      {" "}
                      <span className="text-sm">Address</span>{" "}
                      <textarea
                        type="text"
                        className="h-24 py-1 px-2 w-full border-2 border-gray-400 rounded focus:outline-none focus:border-green-700 resize-none"
                        {...register("address")}
                      ></textarea>{" "}
                    </div>
                  </div>
                  <div className="mb-1"></div>
                  <div className="mt-3 text-right">
                    {" "}
                    <a href="/">Cancel</a>{" "}
                    <button
                      className="ml-2 h-10 w-32 bg-green-700 rounded text-white hover:bg-green-900"
                      type="submit"
                    >
                      Next
                    </button>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className=" pl-2">
          <img src={laovid} />
        </div>
      </div>
    </>
  );
};

export default Signup;
