import React from 'react'
import HeroSection from './HeroSession'
import FeaturesSlider from '../../components/FeaturesSlider'
import ServicePage from './ServicePage'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FactsAndFigure from './FactsAndFigure'
import AboutUs from './AboutUs'
import Client from './Client'
import Testimonial from './Testimonial'

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <FeaturesSlider />
      <AboutUs />
      <FactsAndFigure />
          <ServicePage />
          <Testimonial />
      <Client />
      <Footer />
    </>
  );
}

export default Home