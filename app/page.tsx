"use client"
import Navbar from './components/navbar';
import HomePage from './home/page';

export default function Home() {
  return (
   <>
    <Navbar />
      <div className="relative z-10 pt-[90px]">
        <section className="min-h-screen" id="home">
          <HomePage />
        </section>
      </div>
</>
  );
}
