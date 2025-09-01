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
import ClientLayout from './components/ClientLayout';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const pageContent = (
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
    </>
  );

  return (
    <ClientLayout>
      {pageContent}
    </ClientLayout>
  );
}
