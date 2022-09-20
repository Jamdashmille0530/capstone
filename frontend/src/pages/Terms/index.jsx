import React from "react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <>
      <div className="flex justify-center my-4 ml-1 mt-14 pb-24">
        <div className="flex flex-wrap  rounded-md p-2 box-border h-96 w-96 border-2  border-green-900 bg-green-900">
          <h1 className="text-3xl font-bold text-white">Our Mission</h1>
          <p className="text-center text-l font-semibold text-white font-mono">
            “Providing individuals with the opportunities to change their lives
            and the community”
          </p>
          <p className="text-white">
            Lao Foundation Inc. works to build people of character and skill by
            providing the necessary education, livelihood skills, and support to
            help them improve their lives. Our goal is to empower the less
            fortunate to attain a better life for themselves and the entire
            community.
          </p>
        </div>
        <div className="flex flex-wrap bg-white rounded-md p-2 box-border h-96 w-96 border-2  border-green-900 ">
          <h1 className="text-3xl font-bold text-green-900">Our Vision</h1>
          <p className="text-l font-semibold text-green-900">
            “Empowerment through Education, Values Formation, Livelihood
            Training and Leadership Development”
          </p>
          <p className="text-green-900">
            We believe that long-lasting change comes from within. That is why
            the Lao Foundation is focused on developing and investing in
            individuals, their families, as well as the community at large
            through various programs, not only to help them succeed in life, but
            also to encourage them to help others succeed. By providing them
            with education, values formation, and other necessary programs, it
            is our goal to mold empowered individuals that can contribute to
            building a sustainable and healthy community.
          </p>
          <div className="grid grid-cols-none place-content-end mx-80">
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;
