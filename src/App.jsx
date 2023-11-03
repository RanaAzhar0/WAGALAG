import React from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import SectionWithCards from './component/Service'
import Events from './component/Events'
import Plans from './component/Plans'
import Offers from './component/Offers'
import ColumnSection from './component/ColumnSection'
import Footer from './component/Footer'

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <SectionWithCards/>
    <Events/>
    <Plans/>
    <Offers/>
    <ColumnSection/>
      <Footer/>
    </>
  )
}

export default App
