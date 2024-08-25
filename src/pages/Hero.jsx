import React from 'react';

const HeroSection = () => {
  return (
    <section className="w-full h-screen md:h-[75vh] lg:h-screen py-16 sm:py-24 md:py-32 flex items-center justify-center">
      <div className="mx-auto max-w-[43rem]">
        <div className="text-center">
          <p className="text-xl sm:text-2xl md:text-3xl font-medium leading-8 text-gray-500">
            Get your tasks done
          </p>
          <h1 className="my-4 sm:my-6 md:my-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-black">
            Productivity tool for
            <span className="text-blue-700 gap-3"> Events..</span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl leading-relaxed text-slate-500">
            Simplify your event planning with our tool—manage everything from invites to schedules seamlessly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
