import React, { useEffect, useState } from "react";
import "../assets/styles/dashboard_grid.css";
import search_icon from "../assets/svgs/search.svg";
import { useErrorAndLoading } from "../context/ErrorLoadingContext";
import { fetchUserDetails } from "../api/api";
import ReusableProfile from "./shared-components/ReusableProfile";
import horizontal_menu from "../assets/svgs/horizontal_menu.svg";

function LeftSidebar() {
  const [data, setData] = useState();
  const { setError, error, setLoading } = useErrorAndLoading();
  const loadingState = true;
  const [selectedIndex, setSelectedIndex] = useState(3); 

  console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(loadingState);
      try {
        const fetchedData = await fetchUserDetails();
        setData(fetchedData);
        setLoading(!loadingState);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(!loadingState);
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
    setSelectedIndex(index);
  };

  return (
    <div id="dashboard_grid_child" className="leftsidebar_div bg-custom-white h-screen py-4 pr-2">
      {/* Title */}
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-2xl pl-4">Patients</h1>
        <img src={search_icon} alt="search icon" className="pr-2"/>
      </div>
      {/* Cards */}
      <section className="cards mt-5">
        {data.slice(0, 10).map((item, index) => (
          <ReusableProfile
            key={index}
            image={item.profile_picture}
            displayName={item.name}
            age_height={`${item.gender}, ${item.age}`}
            isSelected={index === selectedIndex}
            onClick={() => handleProfileClick(index)}
          />
        ))}
      </section>
    </div>
  );
}

export default LeftSidebar;