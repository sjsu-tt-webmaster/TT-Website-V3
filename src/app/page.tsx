"use client"

import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';

const PILLARS = [
  {
    name: "Brotherhood",
    caption:
      "We forge lifelong bonds of fraternal friendship, a journey that develops a network of lasting personal and professional relationships. We foster an inviting, safe, and social environment in which our members become lifelong friends.",
  },
  {
    name: "Professionalism",
    caption:
      "We develop and nurture engineers with strong communication, problem-solving, collaboration, and leadership skills that we demonstrate in our profession, our community, and in our lives.",
  },
  {
    name: "Community Service",
    caption:
      "We are known for our service to our college, university and the larger community. Our service projects create a unifying environment for learning and personal growth for our members.",
  },
];

const Home = function Home() {
  const [showSecondText, setShowSecondText] = useState(false);
  return (
    <>
      <section className="relative flex w-full h-[95vh] items-center justify-center px-8 text-center overflow-hidden">
        <Image
          src="/professional.jpeg"
          alt="Theta Tau background"
          layout="fill"
          objectFit="cover"
          objectPosition="center bottom" // Crop from the top by positioning the image's bottom part in view
          priority
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-black/60" /> {/* Dark overlay with stronger opacity */}
        
        {/* Text Content */}
        <div className="relative z-10 flex flex-col items-center px-4">
          <h1 className="text-center text-4xl font-extrabold text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Theta Tau
          </h1>
          <TypeAnimation
            className="ml-2 mt-4 text-center text-lg font-medium text-gray-300 sm:text-xl md:text-2xl lg:text-3xl"
            sequence={[
              'San José State University',
              () => {
                // Add a delay before showing the second text
                setTimeout(() => setShowSecondText(true), 1000); // 1000 ms = 1 second delay
              }
            ]}
            speed={30}
            repeat={1}
            wrapper="p"
          />
          {showSecondText && (
            <TypeAnimation
              className="ml-2 mt-4 text-center text-lg font-medium text-gray-300 sm:text-xl md:text-2xl lg:text-3xl"
              sequence={['A Professional Co-ed Engineering Fraternity']}
              speed={30}
              repeat={1}
              wrapper="p"
            />
          )}
        </div>
      </section>
      <section className="flex w-full flex-col items-center justify-center bg-gray-700 px-8 py-16 text-center text-white">
        <div className="w-full max-w-4xl mb-8">
          <h4 className="text-center font-bold sm:text-2xl md:text-3xl lg:text-4xl">The premier professional engineering fraternity</h4>
        </div>
        <div className="flex w-full max-w-4xl items-center justify-between gap-8 text-left">
          <div className="w-1/2">
            <h1 className="font-bold mb-4 text-yellow-400 sm:text-base md:text-lg lg:text-xl">WHO ARE WE?</h1>
            <p className="mt-2 font-light">
              Theta Tau is a co-ed professional engineering fraternity at San Jose State University dedicated to fostering a close-knit brotherhood of like-minded individuals. 
              Our purpose is to develop and uphold a high standard of professional excellence while nurturing a community that encourages members to support each other’s growth, 
              both professionally and socially. Through mentorship, networking, and community service, Theta Tau empowers its members to excel in their careers and make a positive 
              impact on the surrounding community. Join us to build lasting friendships, enhance your leadership skills, and become part of a network that will support you for life.
            </p>
          </div>
          <div className="w-1/2">
            <Image
              src="/sisterhood.JPG"
              alt="SISTERHOOD RAHH"
              width={1536} height={1369}
              className="mt-6 rounded-lg"
            />
          </div>
        </div>
      </section>
      <section className="flex w-full flex-col items-center justify-center px-8 py-16 text-center">
        <div className="max-w-6xl">
          <h4 className="font-semibold uppercase tracking-widest">Our Three Pillars</h4>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.name}
                className="rounded bg-gray-700 p-6 text-white transition hover:-translate-y-1 hover:bg-white hover:text-darkRed hover:shadow"
              >
                <h5 className="text-2xl font-semibold">{pillar.name}</h5>
                <p className="mt-4 font-light">{pillar.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative flex w-full h-[90vh] items-center justify-center px-8 text-center overflow-hidden">
        <Image
          src="/brotherhood.jpg"
          alt="FAQ background"
          layout="fill"
          objectFit="cover"
          objectPosition="center-top" // Crop from the top by positioning the image's bottom part in view
          priority
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-black/60" /> {/* Dark overlay with stronger opacity */}
        
        {/* Text Content */}
        <div className="relative z-10 flex flex-col items-center px-4">
          <h1 className="text-center text-4xl font-extrabold text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Join Today!
          </h1>
        </div>
      </section>
    </>
  );
};
export default Home;
