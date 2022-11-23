import { useState } from 'react';
import { useTransition, animated } from '@react-spring/web';
import { ArrowForward } from '@styled-icons/ionicons-solid';
import Tournaments from '../components/Tournaments';
import NewsWidget from '../components/NewsWidget';
import SponsorMarquee from '../components/SponsorMarquee';
import YTWidget from '../components/YTWidget';

const heroSlides = [
  { src: '/hero/mantaraya.png', text: "The little Bisbee's ain't so little!" },
  { src: '/hero/drone_take.png', text: "Get the full experience in Los Cabos" }
];

export default function Home() {
  const [heroIndex, setHeroIndex] = useState(0);

  const transitions = useTransition(heroIndex, {
    key: (item: number) => item,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 1500 },
    onRest: (_ab, _b, item) => {
      if (item === heroIndex) {
        setTimeout(() => {
          setHeroIndex(state => (state + 1) % heroSlides.length);
        }, 5000);
      }
    },
    exitBeforeEnter: true,
  });

  return (
    <>
      <header className="relative min-h-screen w-full flex items-end overflow-hidden text-white p-12 bg-royale">
        <div className="flex justify-between w-full items-center font-book z-10">
          <div>
            <p className="font-brand text-3xl md:text-5xl">BISBEE'S</p>
            <p className="text-sm md:text-base">The world's richest tournaments.</p>
          </div>
          <div className="hidden md:block">
            <a href="#" className="underline">REGISTER</a>
          </div>
          <div className="min-w-[200px] hidden md:block"></div>
        </div>
        {transitions(({ opacity }, i) => (
          <animated.div
            className="w-full h-full flex items-end justify-between bg-cover bg-center bg-no-repeat absolute top-0 left-0 p-12"
            style={{ opacity, backgroundImage: `url(${heroSlides[i].src})` }}
          >
            <div></div>
            <div
              className="w-full md:w-auto h-full md:h-auto flex items-center justify-center absolute md:relative top-0 left-0"
            >
              <p className="uppercase text-xs md:text-base md:max-w-[240px]">{heroSlides[i].text}</p>
            </div>
          </animated.div>
        ))}
      </header>
      <main>
        <Tournaments />
        <NewsWidget />
        <SponsorMarquee />
        <section className="flex items-end h-[550px] bg-cover bg-left sm:bg-center bg-no-repeat px-10 py-16" style={{ backgroundImage: 'url(/start_boat.png)' }}>
          <div className="w-full flex flex-col md:flex-row justify-between uppercase text-white">
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
        <section
          className="h-[450px] bg-cover bg-center bg-no-repeat text-white py-20 px-8 xs:px-16"
          style={{ backgroundImage: 'url(/newsletter_banner.png)' }}
        >
          <div className="flex flex-col space-y-8 mb-8 max-w-[300px]">
            <h2 className="font-bold text-4xl xs:text-6xl">Join Our Newsletter</h2>
            <p className="text-sm xs:text-base">Subscribe to stay up to date with the latest news and deals!</p>
          </div>
          <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-8 sm:items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-[300px] bg-transparent outline-none border border-white rounded-xl focus:bg-white/20 transition-colors duration-200 py-3 px-5"
            />
            <button className="hover:translate-x-1 transition-transform duration-200 flex justify-start">
              <ArrowForward size="1.4rem" />
            </button>
          </div>
        </section>
      </main>
    </>
  );
}