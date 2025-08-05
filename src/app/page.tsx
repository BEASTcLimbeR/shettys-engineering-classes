"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import WhyUsSection from '../components/WhyUsSection';
import CoursesSection from '../components/CoursesSection';
import TrackRecordSection from '../components/TrackRecordSection';
import CodingSection from '../components/CodingSection';
import AboutFounderSection from '../components/AboutFounderSection';
import MissionOfferSection from '../components/MissionOfferSection';
import ContactSection from '../components/ContactSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';
import { Box } from '@mui/material';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          background: 'linear-gradient(90deg, #1976d2, #42a5f5, #90caf9)',
          transformOrigin: '0%',
          scaleX,
          zIndex: 10000,
        }}
      />
      
      <Header />
      <Box sx={{ pt: '70px' }}> {/* Add top padding to account for fixed header */}
        <section id="home"><HeroSection /></section>
        <section id="about"><WhyUsSection /></section>
        <section id="courses"><CoursesSection /></section>
        <section id="track-record"><TrackRecordSection /></section>
        <section id="coding"><CodingSection /></section>
        <section id="founder"><AboutFounderSection /></section>
        <section id="mission"><MissionOfferSection /></section>
        <section id="testimonials"><TestimonialsSection /></section>
        <section id="contact"><ContactSection /></section>
        <section id="faq"><FAQSection /></section>
      </Box>
      <Footer />

      {/* Custom Scrollbar Styles */}
      <style jsx global>{`
        /* Webkit browsers (Chrome, Safari, Edge) */
        ::-webkit-scrollbar {
          width: 10px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(25, 118, 210, 0.1);
          border-radius: 5px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #1976d2, #42a5f5);
          border-radius: 5px;
          border: 2px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #1565c0, #1976d2);
          transform: scale(1.05);
        }
        
        ::-webkit-scrollbar-corner {
          background: rgba(25, 118, 210, 0.1);
        }
        
        /* Firefox */
        * {
          scrollbar-width: thin;
          scrollbar-color: #1976d2 rgba(25, 118, 210, 0.1);
        }
        
        /* Smooth scrolling for the entire page */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar for specific elements */
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #1976d2 rgba(25, 118, 210, 0.1);
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(25, 118, 210, 0.05);
          border-radius: 4px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #1976d2, #42a5f5);
          border-radius: 4px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #1565c0, #1976d2);
        }
      `}</style>
    </>
  );
}
