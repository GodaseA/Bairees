import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Hero from './pages/Hero/Hero'
import About from './pages/About/About'
import AdvisoryServices from './pages/AdvisoryServices/AdvisoryServices'
import Founder from './pages/Founder/Founder'
import Architecture from './pages/Architecture/Architecture'
import Contact from './pages/Contact/Contact'
import Navbar from './components/Navbar/Navbar'
import ContactPopup from './pages/ContactPopup/ContactPopup'
import Footer from './components/Footer/Footer'
import HomePage from './components/Home/HomePage'
import WhyBaiRees from './pages/WhyBaiRees/WhyBaiRees'
import OurImpact from './pages/OurImpact/OurImpact'
import WhoWeWorkWith from './pages/WhoWeWorkWith/WhoWeWorkWith'
import Sidebar from './components/Sidebar/Sidebar'
import EmotionalHook from './pages/EmotionalHook/EmotionalHook'
import StrategyCallButton from './components/StrategyCallButton/StrategyCallButton'
import SevenRMethodology from './pages/SevenRMethodology/SevenRMethodology'

const App = () => {

  const [showPopup, setShowPopup] = useState(false);
  const [stopPopup, setStopPopup] = useState(false);

  useEffect(() => {

    if (stopPopup) return;

    const timer = setInterval(() => {
      setShowPopup(true);
    }, 10000); // 20 seconds

    return () => clearInterval(timer);

  }, [stopPopup]);

  return (
    <>


      {/* 
      <Routes>
        <Route path="/" element={<HomePage />} />
         <Route path="/architecture" element={< Architecture />} />
        <Route path="/founder" element={<Founder />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/advisory" element={<AdvisoryServices />} />
      </Routes> */}


      <Navbar />
      <Sidebar />
      <Hero />
      <AdvisoryServices />
      <Architecture />
      <EmotionalHook />
      {/* <About /> */}
      <SevenRMethodology/>
      <WhyBaiRees />
      <OurImpact />
      <WhoWeWorkWith />
            <Founder />
      <Contact />
      <Footer />
      <StrategyCallButton/>


      {/* <ContactPopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        onSubmit={() => setStopPopup(true)}
      /> */}
    </>
  )
}

export default App