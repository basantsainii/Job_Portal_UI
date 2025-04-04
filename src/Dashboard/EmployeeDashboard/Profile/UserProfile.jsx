import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ModalContext } from "../../../Modal/ModalContext.jsx";
import axios from "axios";
import toast from "react-hot-toast";
import { BackendContext } from "../../../Components/BackendDomainContext.jsx";


const UserEducation = ()=> {
  return (
    <div className="mt-4 grid gap-4">
      {/* {educations.map((edu) => {
        return ( */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm flex flex-col sm:flex-row justify-between items-start">
            <div>
              <h4 className="font-medium">Bachelor's in Computer Science</h4>
              <p className="text-gray-600">XYZ University</p>
              <p className="text-gray-500 text-sm">2018 - 2022 | Full-time</p>
            </div>
            <i className="fa-solid fa-pen-to-square text-blue-800 cursor-pointer"></i>
          </div>
        {/* );
      })} */}
    </div>
  );
}

function UserProfile() {
  const [profileData, setProfileData] = useState({});
  const [userData, setUserData] = useState();
  const { setActiveModal } = useContext(ModalContext);
  const { BackEndDomain } = useContext(BackendContext);

  const userProfileData = (Resume) => {
    if (Resume) {
      const resumeName = decodeURIComponent(
        Resume.split("/").pop().split("-")[1]
      );
      setUserData(resumeName);
    }
  };

  const FetchUserProfile = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.get(
        `${BackEndDomain}/api/fetch-user-profile`,
        {
          headers: { Authorization: token },
        }
      );
      if (res.status === 200) {
        setProfileData(res?.data?.userProfileData);
        userProfileData(res?.data?.userProfileData?.resume);
      }
    } catch (err) {
      toast.error(err?.response?.data?.message);
    }
  };

  useEffect(() => {
    FetchUserProfile();
    return () => {
      setProfileData({});
      setUserData();
    };
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8 bg-slate-50">
      {!profileData ? (
        <div class="mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4">
          <div class="flex animate-pulse space-x-4">
            <div class="size-10 rounded-full bg-gray-200"></div>
            <div class="flex-1 space-y-6 py-1">
              <div class="h-2 rounded bg-gray-200"></div>
              <div class="space-y-3">
                <div class="grid grid-cols-3 gap-4">
                  <div class="col-span-2 h-2 rounded bg-gray-200"></div>
                  <div class="col-span-1 h-2 rounded bg-gray-200"></div>
                </div>
                <div class="h-2 rounded bg-gray-200"></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white shadow-md rounded-xl p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-6">
          <div
            onClick={() => setActiveModal("dp")}
            className="w-24 h-24 border-2 border-blue-900 rounded-full bg-blue-200 flex items-center justify-center hover:cursor-pointer overflow-hidden"
          >
            {!profileData?.dp ? (
              <span className="text-blue-500 text-xl">+</span>
            ) : (
              <img
                src={profileData?.dp}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-semibold">
              {profileData?.fname} {profileData?.lname}
            </h2>
            <p className="text-gray-500">Web Developer - Full Stack</p>
            <p className="text-gray-600 flex items-center justify-center sm:justify-start gap-2 mt-2">
              <i className="fa-solid fa-envelope text-blue-800"></i>{" "}
              {profileData?.email}
            </p>
            <p className="text-gray-600 flex items-center justify-center sm:justify-start gap-2">
              <i className="fa-solid fa-phone text-blue-800"></i>{" "}
              {profileData?.phone}
            </p>
          </div>
        </div>
      )}

      <div className="bg-white shadow-md rounded-xl p-4 sm:p-6 mt-6">
        <div className="flex justify-between">
          <h3 className="text-xl font-semibold">Resume</h3>
          <p
            className="text-blue-800 cursor-pointer"
            onClick={() => setActiveModal("resume")}
          >
            Update
          </p>
        </div>
        <div className="mt-4">
          {profileData?.resume ? (
            <div className="flex flex-col sm:flex-row justify-between items-center border p-3 rounded-lg">
              <p className="font-medium text-center sm:text-left">{userData}</p>
              <div className="flex gap-4 mt-2 sm:mt-0">
                <a
                  href={profileData?.resume}
                  download={userData}
                  className="text-blue-800"
                >
                  <i className="fa-solid fa-download p-2 rounded-full hover:bg-blue-100"></i>
                </a>
                <i className="fa-solid fa-trash text-red-500 p-2 rounded-full hover:bg-red-100 cursor-pointer"></i>
              </div>
            </div>
          ) : (
            <p className="text-gray-400 text-center sm:text-left">
              Upload your resume for employers
            </p>
          )}
        </div>
      </div>

      <div className="bg-white shadow-md rounded-xl p-4 sm:p-6 mt-6">
        <div className="flex justify-between">
          <h3 className="text-xl font-semibold">Education</h3>
          <p className="text-blue-800 cursor-pointer">Update</p>
        </div>

        
          {/* // user education */}
          <UserEducation />
        
      </div>

      <div className="bg-white shadow-md rounded-xl p-4 sm:p-6 mt-6">
        <div className="flex justify-between">
          <h3 className="text-xl font-semibold">Key Skills</h3>
          <p className="text-blue-800 cursor-pointer">Update</p>
        </div>
        <div className="mt-4 flex gap-2 flex-wrap justify-center sm:justify-start">
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
            React
          </span>
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
            Node.js
          </span>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-xl p-6 mt-6">
        <div className="flex justify-between">
          <h3 className="text-xl font-semibold">Personal Details</h3>
          <p className="text-blue-800 cursor-pointer">Update</p>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4 text-gray-600">
          <p>
            <span className="font-medium">Gender:</span> Male
          </p>
          <p>
            <span className="font-medium">Date of Birth:</span> 13 August
          </p>
          <p>
            <span className="font-medium">Languages:</span> Hindi, English
          </p>
          <p>
            <span className="font-medium">Address:</span> Saharanpur
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
