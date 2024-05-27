import React, { useEffect, useState } from "react";
import "../assets/styles/dashboard_grid.css";
import search_icon from "../assets/svgs/search.svg";
import { useErrorAndLoading } from "../context/ErrorLoadingContext";
import { fetchUserDetails } from "../api/api";
import { useSelectedIndex } from "../context/SelectedIndexContext";
import ReusableProfile from "./shared-components/ReusableProfile";
import horizontal_menu from "../assets/svgs/horizontal_menu.svg";
import "../assets/styles/scrollbar.css";
import toast from "react-hot-toast";

function LeftSidebar() {
  const [data, setData] = useState();
  const { setError, error, setLoading } = useErrorAndLoading();
  const { selectedIndex, updateSelectedIndex } = useSelectedIndex();
  const loadingState = true;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await fetchUserDetails();
        setData(fetchedData);
        toast.success("Data successfully fetched!")
      } catch (err) {
        setError(err);
        toast.error(err)
      } finally {
      }
    };
    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  const handleProfileClick = (index) => {
    if (index === 3) {
      updateSelectedIndex(index);
    } else {
      toast.error("Only Jessica Taylor can be selected");
    }
  };

  return (
    <div
      id="dashboard_grid_child"
      className="leftsidebar_div bg-custom-white py-4 pr-2"
    >
      {/* Title */}
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-2xl pl-4">Patients</h1>
        <img src={search_icon} alt="search icon" className="pr-2" />
      </div>
      {/* Cards */}
      <section id="cards" className="cards mt-5 max-h-[750px] space-y-2">
        {data.slice(0, 12).map((item, index) => (
          <ReusableProfile
            key={index}
            image={item.profile_picture}
            displayName={item.name}
            age_height={`${item.gender}, ${item.age}`}
            isSelected={index === 3 && selectedIndex === 3}
            onClick={() => handleProfileClick(index)}
            icon={horizontal_menu}
          />
        ))}
      </section>
    </div>
  );
}

export default LeftSidebar;
