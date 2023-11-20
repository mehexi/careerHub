import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  faDollarSign,
  faLocation,
  faPhone
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { saveToDb } from "../../database/fakedb";

const JobDetails = () => {
  const JobDetails = useLoaderData();
//   console.log(JobDetails[0]);
  const {
    id,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    job_title,
    contact_information
  } = JobDetails[0];

  return (
    <div className="grid grid-cols-3 w-9/12 mt-[130px] gap-6 mb-[130px]">
      <div className="col-span-2 flex flex-col gap-6 text-md">
        <h1>
          <b>Job Description:</b> {job_description}
        </h1>
        <h1>
          <b>Job Resposibility:</b> {job_responsibility}
        </h1>
        <h1>
          {" "}
          <b>Educational Requirments:</b>{" "}
        </h1>
        <h1>{educational_requirements}</h1>
        <h1>
          {" "}
          <b>Experiences:</b>{" "}
        </h1>
        <h1>{experiences}</h1>
      </div>
      <div className=" flex flex-col gap-6">
        <div className=" p-9 flex flex-col text-lg gap-3 bg-gradient-to-tr from-[#7E90FE]/10 to-[#9873FF]/10 rounded-md">
          <h1>
            <b>job details :</b>
          </h1>
          <hr className="border border-blue-100" />
          <div className="flex flex-col gap-3">
            <h1>
              {" "}
              <FontAwesomeIcon className="w-4 h-4" icon={faDollarSign} />{" "}
              <b>Salary:</b> {salary}
            </h1>
            <h1>
              {" "}
              <FontAwesomeIcon className="w-4 h-4" icon={faCalendar} />{" "}
              <b>Job title: </b>
              {job_title}
            </h1>
          </div>
          <h1>
            {" "}
            <b>Contact Information: </b>
          </h1>
          <hr className="border border-blue-100" />
          <div className="flex flex-col gap-3">
            <h1>
              <FontAwesomeIcon className="w-4 h-4" icon={faPhone} />{" "}
              <b>Phone</b> {contact_information.phone}
            </h1>
            <h1>
              <FontAwesomeIcon className="w-4 h-4" icon={faEnvelope} />{" "}
              <b>Email:</b> {contact_information.email}
            </h1>
            <h1>
              <FontAwesomeIcon className="w-4 h-4" icon={faLocation} />{" "}
              <b>Address</b> {contact_information.address}
            </h1>
          </div>
        </div>
        <button
          onClick={() => saveToDb(id)}
          className="bg-gradient-to-tr from-[#7E90FE] to-[#9873FF] w-full py-4 rounded-md font-bold text-white"
        >
          apply now
        </button>
      </div>
    </div>
  );
};

export default JobDetails;
