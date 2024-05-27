import React, { useEffect, useState } from 'react'
import { useErrorAndLoading } from "../context/ErrorLoadingContext";
import { fetchUserDetails } from "../api/api";
import { useSelectedIndex } from "../context/SelectedIndexContext";
import "../assets/styles/dashboard_grid.css";
import DisplayDetails from './shared-components/DisplayDetails';
import LabResults from './shared-components/LabResults';


function RightSidebar() {
  const [data, setData] = useState();
  const { setError, error, setLoading } = useErrorAndLoading();
  const { selectedIndex, updateSelectedIndex } = useSelectedIndex();
  const loadingState = true;
  
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
  console.log(data[selectedIndex]);
  const details = data[selectedIndex];
  console.log(data);

  return (
    <div id='dashboard_grid_child' className='rightsidebar_div bg-custom-lightGray space-y-8'>
      <DisplayDetails details={details} />
      <LabResults details={details} />
    </div>
  )
}

export default RightSidebar