import {Navbar} from "./components/Navbar"
import { Hero } from "./components/Hero";
import { Desc } from "./components/Desc";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { RegisterPage } from "./components/RegisterPage";
import { Contact } from "./components/Contact";
export function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Desc />
      <Contact />
    </>
  );
}
