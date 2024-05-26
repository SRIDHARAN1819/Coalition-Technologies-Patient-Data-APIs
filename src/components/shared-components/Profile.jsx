import React from "react";
import jose_png from "../../assets/png/dr_jose1.png";
import settings_icon from "../../assets/svgs/setting.svg";
import vertical_menu_icon from "../../assets/svgs/vertical_menu.svg";

function Profile() {
  return (
    <div className="profile_div flex items-center gap-2">
      {/* Display Name */}
      <div className="displayname_div flex items-center justify-center gap-2">
        <img
          src={jose_png}
          alt="profile image"
          className="w-[50px] h-[50px] rounded-full object-cover object-center"
        />
        <div className="text-sm flex flex-col">
          <span className="profile_name font-semibold">Dr. Jose Simmons</span>
          <span className="designation text-slate-400">
            General Practitioner
          </span>
        </div>
      </div>

      {/* Demarcator */}
      <div className="demarcation_div h-[40px] border-r-slate-200 border-r-[1px]"></div>
      {/* Settings Icon */}
      <img src={settings_icon} alt="settings icon" className="cursor-pointer" />
      {/* Vertical Menu Icon */}
      <img src={vertical_menu_icon} alt="vertical icon" className="cursor-pointer" />
    </div>
  );
}

export default Profile;
