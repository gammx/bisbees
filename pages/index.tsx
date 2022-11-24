import { ArrowForward } from '@styled-icons/ionicons-solid';
import Image from 'next/image';
import Tournaments from '../components/Tournaments';
import NewsWidget from '../components/NewsWidget';
import SponsorMarquee from '../components/SponsorMarquee';
import YTWidget from '../components/YTWidget';
import Footer from '../components/Footer';
import startBoatImageSrc from '../public/start_boat.png';
import newsletterImageSrc from '../public/newsletter_banner.png';

export default function Home() {
  return (
    <>
      <header className="relative min-h-screen w-full flex items-end overflow-hidden text-white p-12 bg-royale">
        <div className="flex justify-between w-full items-center font-book z-10">
          <div>
            <p className="font-brand text-3xl md:text-5xl">BISBEE'S</p>
            <p className="text-sm md:text-base">The world's richest tournaments.</p>
          </div>
          <div className="hidden md:block">
            <a href="#" className="underline uppercase">Register</a>
          </div>
          <div className="hidden md:block">
            <p className="uppercase text-xs md:text-base md:max-w-[240px]">Get the full experience in Los Cabos</p>
          </div>
        </div>
        <video autoPlay muted loop playsInline src="/hero/default.mp4" className="absolute top-0 left-0 w-full h-full object-cover"></video>
      </header>
      <main>
        <Tournaments />
        <NewsWidget />
        <SponsorMarquee />
        <section className="relative flex items-end h-[550px] bg-cover bg-left sm:bg-center bg-no-repeat px-10 py-16">
          <Image
            fill
            src={startBoatImageSrc}
            alt="Bisbee's Official Start Boat"
            className="absolute top-0 left-0 w-auto h-auto object-cover object-left sm:object-center"
          />
          <div className="w-full flex flex-col md:flex-row justify-between uppercase text-white z-10">
            <div>
              <p className="font-brand text-lg sm:text-[2.5vw] lg:text-3xl">BISBEE'S</p>
              <h1 className="font-black tracking-tighter text-3xl sm:text-[5vw] lg:text-6xl lg:mt-2 mb-2 lg:mb-4">Official Start Boat</h1>
              <div className="flex space-x-4 md:space-x-0 md:justify-between text-2xs sm:text-[1.3vw] lg:text-sm">
                <p>32 ft Intrepid</p>
                <p className="hidden sm:block">Center Console</p>
                <p>Twin 225hp Yamaha Outboards</p>
              </div>
            </div>
            <div className="flex items-end pt-5 md:pt-0 md:pb-5">
              <a href="#" className="flex justify-center items-center h-10 sm:h-[6vw] lg:h-16 bg-[#0066FF] text-sm sm:text-[2vw] lg:text-2xl text-white font-bold uppercase px-5 hover:bg-[#0050c9] transition-colors duration-200">Schedule Now!</a>
            </div>
          </div>
        </section>
        <YTWidget />
        <section className="relative w-full flex flex-col h-[450px] text-white py-20 px-8 xs:px-16">
          <Image
            fill
            src={newsletterImageSrc}
            alt="Girl surfing on a wave"
            className="absolute top-0 left-0 w-auto h-auto object-cover"
          />
          <div className="z-10 flex flex-col space-y-8 mb-8 max-w-[300px]">
            <h2 className="font-bold text-4xl xs:text-6xl">Join Our Newsletter</h2>
            <p className="text-sm xs:text-base">Subscribe to stay up to date with the latest news and deals!</p>
          </div>
          <div className="z-10 flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-8 sm:items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-[300px] bg-transparent outline-none border border-white rounded-xl focus:bg-white/20 transition-colors duration-200 py-3 px-5"
            />
            <button className="hover:translate-x-1 transition-transform duration-200 flex justify-start" aria-label="Subscribe to Newsletter">
              <ArrowForward size="1.4rem" />
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}