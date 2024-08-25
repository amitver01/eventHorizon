import React from 'react';

const HeroSection = () => {
  return (
    <section className="w-full h-screen py-8 sm:py-16 md:py-24 flex items-center justify-center">
      <div className="mx-auto max-w-[43rem]">
        <div className="text-center">
          <p className="text-lg font-medium leading-8 text-gray-500">Get your tasks done</p>
          <h1 className="my-3 sm:my-4 md:my-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-10 tracking-tight text-black">
            Productivity tool for
            <span className="text-blue-700"> Events..</span>
          </h1>
          <p className="text-lg leading-relaxed text-slate-500">
          Simplify your event planning with our tool—manage everything from invites to schedules seamlessly.
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default HeroSection;
