const AboutHero = () => {
  return (
    <div className="w-full min-h-screen h-full flex">
      <div className="w-2/5 flex items-end justify-start py-14 px-32">
        <div className="w-[300px] h-auto">
          <img
            src="/about.png"
            alt="about"
            className="object-cover pointer-events-none select-none w-full"
          />
        </div>
      </div>
      <div className="w-3/5  flex items-center justify-start relative">
        <div className="absolute top-32 -left-[40%]">
          <h1 className="text-[8rem] gotu font-light pointer-events-none select-none">
            ASHNA
          </h1>
        </div>
        <div className="absolute top-56 -left-[3%] mt-2">
          <h1 className="text-[8rem] gotu font-light pointer-events-none select-none">
            MONGA
          </h1>
        </div>
        <div className="absolute top-32 left-[35%] mt-2">
          <img
            src="/butterfly.png"
            alt="butterfly"
            className="object-cover pointer-events-none select-none w-full"
          />
        </div>
        <p className="w-[90%] text-xl font-medium mt-72 gotu tracking-wide -ml-14 leading-8 pointer-events-none select-none">
          I'm Ashna, a vibrant and passionate UX designer and researcher with an
          artistic flair. From Pastry Artist to UX Designer, I bring creativity,
          user understanding, and a passion for delightful experiences. Let's
          craft extraordinary digital journeys together.
        </p>
      </div>
    </div>
  );
};

export default AboutHero;
