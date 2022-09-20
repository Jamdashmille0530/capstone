import React from "react";
import laovid from "assets/loavid.gif";

const Signup = () => {
  return (
    <>
      <div className="flex justify-start w-auto pl-2">
        <div className=" px-8 py-6 mt-4 text-left bg-white shadow-lg">
          <div className="md:flex">
            <div className="w-full px-4 py-6 ">
              <div className="mb-1">
                {" "}
                <span className="text-2xl text-gray-700 ">
                  Attach All The Needed Files For Your Application
                </span>{" "}
              </div>
              <div className="grid grid-cols-2">
                <div className="mb-1">
                  {" "}
                  <span>ID Picture</span>
                  <div className="relative border-dotted h-25 w-64  rounded-lg border-2 border-green-600 bg-gray-100 flex justify-center items-center">
                    <div className="absolute">
                      <div className="flex flex-col items-center">
                        {" "}
                        <i className="fa fa-folder-open fa-3x text-green-600"></i>{" "}
                        <span className="text-sm block text-gray-400 font-normal">
                          Attach your files here
                        </span>{" "}
                      </div>
                    </div>{" "}
                    <input
                      type="file"
                      class="h-full w-full opacity-0"
                      name=""
                    />
                  </div>
                </div>
                <div className="mb-1">
                  {" "}
                  <span>Grade Slip</span>
                  <div className="relative border-dotted h-25 w-64 rounded-lg border-2 border-green-600 bg-gray-100 flex justify-center items-center">
                    <div className="absolute">
                      <div className="flex flex-col items-center">
                        {" "}
                        <i className="fa fa-folder-open fa-3x text-blue-700"></i>{" "}
                        <span className="text-sm block text-gray-400 font-normal">
                          Attach you files here
                        </span>{" "}
                      </div>
                    </div>{" "}
                    <input
                      type="file"
                      class="h-full w-full opacity-0"
                      name=""
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="mb-1">
                  {" "}
                  <span>Photocopy of Enrollment Slip</span>
                  <div className="relative border-dotted h-25 w-64 rounded-lg border-2 border-green-600 bg-gray-100 flex justify-center items-center">
                    <div className="absolute">
                      <div className="flex flex-col items-center">
                        {" "}
                        <i className="fa fa-folder-open fa-3x text-blue-700"></i>{" "}
                        <span className="text-sm block text-gray-400 font-normal">
                          Attach you files here
                        </span>{" "}
                      </div>
                    </div>{" "}
                    <input
                      type="file"
                      class="h-full w-full opacity-0"
                      name=""
                    />
                  </div>
                </div>
                <div className="mb-1 ">
                  {" "}
                  <span>Telephone Bill</span>
                  <div className="relative border-dotted h-25 w-64  rounded-lg border-2 border-green-600 bg-gray-100 flex justify-center items-center">
                    <div className="absolute">
                      <div className="flex flex-col items-center">
                        {" "}
                        <i className="fa fa-folder-open fa-3x text-green-700"></i>{" "}
                        <span className="text-sm block text-gray-400 font-normal">
                          Attach you files here
                        </span>{" "}
                      </div>
                    </div>{" "}
                    <input
                      type="file"
                      class="h-full w-full opacity-0"
                      name=""
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="mb-1">
                  {" "}
                  <span>Electric Bill</span>
                  <div className="relative border-dotted h-25 w-64 rounded-lg border-2 border-green-600 bg-gray-100 flex justify-center items-center">
                    <div className="absolute">
                      <div className="flex flex-col items-center">
                        {" "}
                        <i className="fa fa-folder-open fa-3x text-green-700"></i>{" "}
                        <span className="block text-gray-400 font-normal">
                          Attach you files here
                        </span>{" "}
                      </div>
                    </div>{" "}
                    <input
                      type="file"
                      class="h-full w-full opacity-0"
                      name=""
                    />
                  </div>
                </div>
                <div className="mb-1">
                  {" "}
                  <span>Water Bill</span>
                  <div className="relative border-dotted h-25 w-64 rounded-lg border-2 border-green-600 bg-gray-100 flex justify-center items-center">
                    <div className="absolute">
                      <div className="flex flex-col items-center">
                        {" "}
                        <i className="fa fa-folder-open fa-3x text-green-700"></i>{" "}
                        <span className="block text-gray-400 font-normal">
                          Attach you files here
                        </span>{" "}
                      </div>
                    </div>{" "}
                    <input
                      type="file"
                      class="h-full w-full opacity-0"
                      name=""
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="mb-1">
                  {" "}
                  <span>
                    Photocopy of your National Career Assessment Examination
                    (NCAE)
                  </span>
                  <div className="relative border-dotted h-25 w-64 rounded-lg border-2 border-green-600 bg-gray-100 flex justify-center items-center">
                    <div className="absolute">
                      <div className="flex flex-col items-center">
                        {" "}
                        <i className="fa fa-folder-open fa-3x text-green-700"></i>{" "}
                        <span className="block text-gray-400 font-normal">
                          Attach you files here
                        </span>{" "}
                      </div>
                    </div>{" "}
                    <input
                      type="file"
                      class="h-full w-full opacity-0"
                      name=""
                    />
                  </div>
                </div>
                <div className="mb-1">
                  {" "}
                  <span>
                    Photocopy and Original Copy of PSA Birth Certificate
                  </span>
                  <div className="relative border-dotted h-25 w-64 rounded-lg border-2 border-green-600 bg-gray-100 flex justify-center items-center">
                    <div className="absolute">
                      <div className="flex flex-col items-center">
                        {" "}
                        <i className="fa fa-folder-open fa-3x text-green-700"></i>{" "}
                        <span className="block text-gray-400 font-normal">
                          Attach you files here
                        </span>{" "}
                      </div>
                    </div>{" "}
                    <input
                      type="file"
                      class="h-full w-full opacity-0"
                      name=""
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="mb-1">
                  {" "}
                  <span>Certificate of Ingdigency</span>
                  <div className="relative border-dotted h-25 w-64 rounded-lg border-2 border-green-600 bg-gray-100 flex justify-center items-center">
                    <div className="absolute">
                      <div className="flex flex-col items-center">
                        {" "}
                        <i className="fa fa-folder-open fa-3x text-green-700"></i>{" "}
                        <span className="block text-gray-400 font-normal">
                          Attach you files here
                        </span>{" "}
                      </div>
                    </div>{" "}
                    <input
                      type="file"
                      class="h-full w-full opacity-0"
                      name=""
                    />
                  </div>
                </div>
                <div className="mb-1">
                  {" "}
                  <span>Autobiography</span>
                  <div className="relative border-dotted h-25 w-64 rounded-lg border-2 border-green-600 bg-gray-100 flex justify-center items-center">
                    <div className="absolute">
                      <div className="flex flex-col items-center">
                        {" "}
                        <i className="fa fa-folder-open fa-3x text-green-700"></i>{" "}
                        <span className="block text-gray-400 font-normal">
                          Attach you files here
                        </span>{" "}
                      </div>
                    </div>{" "}
                    <input
                      type="file"
                      class="h-full w-full opacity-0"
                      name=""
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="mb-1">
                  {" "}
                  <span>Photocopy and Original Copy of Pantawid ID</span>
                  <div className="relative border-dotted h-25 w-64 rounded-lg border-2 border-green-600 bg-gray-100 flex justify-center items-center">
                    <div className="absolute">
                      <div className="flex flex-col items-center">
                        {" "}
                        <i className="fa fa-folder-open fa-3x text-green-700"></i>{" "}
                        <span className="block text-gray-400 font-normal">
                          Attach you files here
                        </span>{" "}
                      </div>
                    </div>{" "}
                    <input
                      type="file"
                      class="h-full w-full opacity-0"
                      name=""
                    />
                  </div>
                </div>
                <div className="mb-1">
                  {" "}
                  <h1 className="pb-6">Sketch of Home Address</h1>
                  <div className="relative border-dotted h-25 w-64 rounded-lg border-2 border-green-600 bg-gray-100 flex justify-center items-center">
                    <div className="absolute">
                      <div className="flex flex-col items-center">
                        {" "}
                        <i className="fa fa-folder-open fa-3x text-green-700"></i>{" "}
                        <span className="block text-gray-400 font-normal">
                          Attach you files here
                        </span>{" "}
                      </div>
                    </div>{" "}
                    <input
                      type="file"
                      class="h-full w-full opacity-0"
                      name=""
                    />
                  </div>
                </div>
              </div>
              <div className="mb-1"></div>
              <div className="mt-3 text-right">
                {" "}
                <a href="/signuptwo">Back</a>{" "}
                <button
                  className="ml-2 h-10 w-32 bg-green-700 rounded text-white hover:bg-green-900"
                  onClick={
                    
                      alert ("You have submitted your application")
                    
                  }
                >
                  Submit
                </button>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="flex max-h-full pt-5 pl-2 ">
          <img src={laovid} />
        </div>
      </div>
    </>
  );
};

export default Signup;
