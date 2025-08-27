"use client"
import Navbar from './components/navbar';
import HomePage from './home/page';

export default function Home() {
  return (
    <div>
      {/* Fixed Navbar - will stick on scroll with transparent background */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      
      {/* Main content - no padding needed since navbar is transparent */}
      <div>
        <section className="min-h-screen" id="home">
          <HomePage />
        </section>
        
        {/* Add more sections here if needed */}
        {/* 
        <section className="min-h-screen" id="about">
          <AboutPage />
        </section>
        <section className="min-h-screen" id="services">
          <ServicesPage />
        </section>
        */}
      </div>
    </div>
  );
}