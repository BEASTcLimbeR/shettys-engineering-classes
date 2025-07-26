"use client";

import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import WhyUsSection from '../components/WhyUsSection';
import CoursesSection from '../components/CoursesSection';
import TrackRecordSection from '../components/TrackRecordSection';
import AboutFounderSection from '../components/AboutFounderSection';
import MissionOfferSection from '../components/MissionOfferSection';
import ContactSection from '../components/ContactSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';
import { Box } from '@mui/material';

export default function Home() {
  return (
    <>
      <Header />
      <Box sx={{ pt: '70px' }}> {/* Add top padding to account for fixed header */}
        <section id="home"><HeroSection /></section>
        <section id="about"><WhyUsSection /></section>
        <section id="courses"><CoursesSection /></section>
        <section id="track-record"><TrackRecordSection /></section>
        <section id="founder"><AboutFounderSection /></section>
        <section id="mission"><MissionOfferSection /></section>
        <section id="contact"><ContactSection /></section>
        <section id="testimonials"><TestimonialsSection /></section>
        <section id="faq"><FAQSection /></section>
      </Box>
      <Footer />
    </>
  );
}
