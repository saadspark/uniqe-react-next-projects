import React from 'react';
import { Outlet } from "react-router-dom";  
import VerticalNavbar from './components/NaveBars/VerticalNavbar';

export default function App() {
  return (
    <>
     <VerticalNavbar />
     <Outlet />
    </>
  );
}
