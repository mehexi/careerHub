import React from "react";
import { faDollarSign, faLocation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ShowJob = ({ job, toggleJobs }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary
  } = job;
  return (
    <div className="flex flex-col gap-6 border p-10">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold font-poppins text-gray-700">
            {job_title}
          </h1>
          <p className="text-gay-500 ">{company_name}</p>
        </div>
        <div className="flex gap-3">
          <span className="border px-5 py-2 border-blue-700 rounded text-blue-700">
            {remote_or_onsite}
          </span>
          <span className="border px-5 py-2 border-blue-700 rounded text-blue-700">
            {job_type}
          </span>
        </div>
        <div className="flex gap-3 text-gray-500 text-xl text-base">
          <span><FontAwesomeIcon icon={faLocation}/> {location}</span>
          <span>
          <FontAwesomeIcon icon={faDollarSign} /> Salary: {salary}
          </span>
        </div>

        <button className="px-6 py-3 w-fit bg-gradient-to-tr from-[#566cfa] to-[#6f40ef] text-md font-semibold font-poppins text-white rounded ">view details</button>
      </div>
    </div>
  );
};

export default ShowJob;
