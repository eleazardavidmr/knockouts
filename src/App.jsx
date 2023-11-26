import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero";
import { Desc } from "./components/Desc";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { Contact } from "./components/Contact";
export function App() {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}