import React from 'react'
import HeroSection from './HeroSession'
import FeaturesSlider from '../../components/FeaturesSlider'
import ServicePage from './ServicePage'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FactsAndFigure from './FactsAndFigure'

const Home = () => {
  return (
      <>
          <Header />
          <HeroSection />
          <FeaturesSlider />
          <FactsAndFigure/>
          <ServicePage />
          <Footer/>
      </>
  )
}

export default Home