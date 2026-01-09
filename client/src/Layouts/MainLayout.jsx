import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ContactSection from '../components/ContactSection/ContactSection';



function MainLayout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <ContactSection/>

    <Footer/>
    </>
  )
}

export default MainLayout
