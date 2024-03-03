'use client'
import { useEffect, useState } from 'react';
import { Slide, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Layout from '../components/Layout';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {


  return (
    <Layout>
    <Component {...pageProps} />
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      draggable={false}
      closeOnClick
      pauseOnHover
      transition={Slide}
    />


  </Layout>
  );

}


export default MyApp;