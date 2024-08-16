import BlurFade from "../magicui/blur-fade";

export const StorySection = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start py-10 px-20">
      <h1 className="gotu text-5xl font-semibold">My Story</h1>
      <div className="flex flex-col gap-10 py-10 w-[80%]">
        <BlurFade delay={0.3} inView>
          <p className="text-lg tracking-wide font-medium text-left leading-8">
            Throughout my life, creativity has been my guiding light. From a
            young age, I discovered the joy of artistic expression through
            painting and sculpting. As the years went by, my passion for
            creation evolved, leading me to embark on an exciting
            entrepreneurial adventure. For seven remarkable years, I immersed
            myself in the world of baking, running my own online bakery. With
            each customized cake, I learned the art of understanding people's
            desires, transforming their visions into masterpieces that captured
            the essence of their celebrations.
          </p>
        </BlurFade>
        <BlurFade delay={0.3} inView>
          <p className="text-lg tracking-wide font-medium text-left leading-8">
            Drawing from my experience as an entrepreneur, I understood the
            importance of putting users at the center of the design process.
            Eager to expand my horizons and make a broader impact, I set my
            sights on the field of UX design.
          </p>
        </BlurFade>
        <BlurFade delay={0.3} inView>
          <p className="text-lg tracking-wide font-medium text-left leading-8">
            Life has a way of presenting new opportunities. Transitioning into
            UX design allowed me to combine my love for creativity, customer
            understanding, and problem-solving. I discovered the power of
            empathy, diving deep into the minds and hearts of users to uncover
            their needs, aspirations, and pain points. It's a journey that has
            challenged and inspired me every step of the way.
          </p>
        </BlurFade>
        <BlurFade delay={0.3} inView>
          <p className="text-lg tracking-wide font-medium text-left leading-8">
            Today, I stand as a passionate UX designer, bringing together my
            diverse background, keen artistic eye, and the insatiable desire to
            create meaningful experiences. With every project, I strive to weave
            together the threads of user insights, aesthetics, and seamless
            functionality, crafting designs that resonate with both the heart
            and mind. The journey continues, as I embrace new challenges, seek
            fresh inspirations, and collaborate with fellow creatives and
            visionaries. With each chapter, I am driven by the belief that
            design has the power to transform lives and make the world a more
            delightful place.
          </p>
        </BlurFade>
      </div>
    </div>
  );
};
