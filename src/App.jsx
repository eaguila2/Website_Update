import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';
import Content from './components/Content'
import Header from './components/Header'
export default function App() {
  return (
    <>
    <Navbar />
    <Header />
    <Content />
    </>
    
  )
}
