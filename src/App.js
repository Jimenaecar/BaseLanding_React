// import logo from './logo.svg';
// import './App.css';
import React from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Section from "./components/Section"


//azucar sintactico: JSX => JS + HTML/XML

function App() {
  return (
    <> 
       <Navbar/>
       <Section/>
       <Footer/>
    </>
  );
}

export default App;

