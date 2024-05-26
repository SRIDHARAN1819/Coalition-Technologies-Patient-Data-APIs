import React from 'react';
import { components } from '../components';

const { Header } = components;

function Dashboard() {
  return (
    <div className='w-full h-screen bg-custom-lightGray p-5'>
      <Header />
    </div>
  );
}

export default Dashboard;
