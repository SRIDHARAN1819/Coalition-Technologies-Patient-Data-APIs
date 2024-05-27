import React from "react";
import horizontal_menu_icon from "../../assets/svgs/horizontal_menu.svg";
import jose_png from "../../assets/png/dr_jose1.png";

const ReusableProfile = ({
  image = jose_png,
  icon = horizontal_menu_icon,
  displayName = "Dr. Jose Simmons",
  age_height = "Female, 56",
  isSelected = false,
  onClick,
}) => {
  return (
    <div
      className={`profile_div pl-4 pr-2 flex py-3 items-center gap-2 w-full justify-between cursor-pointer hover:bg-custom-paleAqua ${
        isSelected ? "bg-custom-paleAqua" : ""
      }`}
      onClick={onClick}
    >
      {/* Display Name */}
      <div className="displayname_div flex items-center justify-center gap-2">
        <img
          src={image}
          alt="profile image"
          className="w-[40px] h-[40px] rounded-full object-cover object-center"
        />
        <div className="text-sm flex flex-col">
          <span className="profile_name font-semibold">{displayName}</span>
          <span className="designation text-slate-400">{age_height}</span>
        </div>
      </div>
      {/* horizontal Menu Icon */}
      <img src={icon} alt="vertical icon" className="cursor-pointer" />
    </div>
  );
};

export default ReusableProfile;
