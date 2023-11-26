import ReactDOM from 'react-dom'
import React from 'react';
import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero";
import { Footer } from './components/Footer'
import { Routes, Route, Link, Navigate } from "react-router-dom";

export function App() {
  return (
    <>
        <Navbar /> 
        <Hero />  
        <Footer />
    </>
  );
}