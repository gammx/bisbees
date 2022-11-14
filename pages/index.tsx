import { useState } from 'react';
import { useTransition, animated } from '@react-spring/web';

const heroSlides = [
  { src: '/hero/mantaraya.png', text: "The little Bisbee's ain't so little!" },
  { src: '/hero/drone_take.png', text: "Get the full experience in Los Cabos" }
];

export default function Home() {
  const [heroIndex, setHeroIndex] = useState(0);

  const transitions = useTransition(heroIndex, {
    key: heroIndex,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 1500 },
    onRest: (_ab, _b, item) => {
      setTimeout(() => {
        if (item === heroIndex) {
          setHeroIndex(state => (state + 1) % heroSlides.length);
        }
      }, 5000);
    },
    exitBeforeEnter: true
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
        {transitions((style, i) => (
          <animated.div
            className="w-full h-full flex items-end justify-between bg-cover bg-center bg-no-repeat absolute top-0 left-0 p-12"
            style={{ ...style, backgroundImage: `url(${heroSlides[i].src})` }}
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
      <main></main>
    </>
  );
}