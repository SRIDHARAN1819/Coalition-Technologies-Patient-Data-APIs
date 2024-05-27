import React from "react";
import taylorImage from "../../assets/png/taylor2.png";
import calenderIcon from "../../assets/svgs/calender.svg";
import genderIcon from "../../assets/svgs/gender.svg";
import phoneIcon from "../../assets/svgs/phone.svg";
import insuranceIcon from "../../assets/svgs/insurance.svg";

const DisplayDetails = ({ details }) => {
  const data = details;

  // Utility function to format the date
  const formatDate = (dateString) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let dateParts;
    let month, day, year;

    if (dateString.includes("/")) {
      // MM/DD/YYYY format
      dateParts = dateString.split("/");
      month = months[parseInt(dateParts[0], 10) - 1];
      day = parseInt(dateParts[1], 10);
      year = dateParts[2];
    } else if (dateString.includes("-")) {
      // YYYY-MM-DD format
      dateParts = dateString.split("-");
      year = dateParts[0];
      month = months[parseInt(dateParts[1], 10) - 1];
      day = parseInt(dateParts[2], 10);
    } else {
      return "Invalid Date Format";
    }

    return `${month} ${day}, ${year}`;
  };

  // Section data array
  const sectionData = [
    {
      icon: calenderIcon,
      label: "Date of Birth",
      value: details && formatDate(details.date_of_birth),
    },
    {
      icon: genderIcon,
      label: "Gender",
      value: details && details.gender,
    },
    {
      icon: phoneIcon,
      label: "Contact Info.",
      value: details && details.phone_number,
    },
    {
      icon: phoneIcon,
      label: "Emergency Contacts",
      value: details && details.emergency_contact,
    },
    {
      icon: insuranceIcon,
      label: "Insurance Provider",
      value: details && details.insurance_type,
    },
  ];

  return (
    <div className="w-full bg-custom-white p-4 rounded-[0.5rem]">
      <img
        src={details && details.profile_picture}
        alt="profile picture"
        className="w-[180px] h-[180px] object-cover object-center rounded-full m-auto mb-3"
      />
      <h1 className="font-semibold text-2xl pl-4 my-2 text-center">
        {details && details.name}
      </h1>
      {/* row and column */}
      <section className="space-y-5">
        {sectionData.map((section, index) => (
          <div className="flex items-center gap-5" key={index}>
            <div className="bg-custom-lightGray w-[50px] h-[50px] grid place-content-center rounded-full">
              <img src={section.icon} alt={section.label} />
            </div>
            <div>
              <span className="text-sm">{section.label}</span>
              <p className="text-sm font-semibold">{section.value}</p>
            </div>
          </div>
        ))}
      </section>
      {/* button */}
      <div className="w-full grid place-content-center">
      <button className="mt-5 text-center mx-auto bg-custom-aqua text-black text-xs font-semibold py-3 px-10 rounded-3xl">
        Show All Information
      </button>
      </div>
    </div>
  );
};

export default DisplayDetails;
