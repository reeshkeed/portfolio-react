export const Landing = () => {
  return (
    <section className="h-screen">
      <div className="h-full max-w-screen-xl mx-auto flex flex-col justify-center px-8 gap-[6rem] md:px-24 xl:gap-[8rem]">
        <div className="grid gap-2 md:gap-4">
          <p className="text-dark-100 text-lg md:text-xl xl:text-2xl">
            // Hello! I am
          </p>
          <p className="text-white text-3xl md:text-5xl xl:text-6xl">
            <span className="text-dark-200">$</span> Girish Daloso
          </p>
          <p className="text-primary-600 text-2xl md:text-3xl xl:text-4xl">
            <span className="text-dark-200"> =&gt;</span> web developer
          </p>
        </div>

        <div className="grid gap-2 md:gap-4">
          <p className="text-dark-100 text-lg md:text-xl xl:text-2xl">
            // Experienced in:
          </p>
          <p className="text-white text-2xl md:text-3xl xl:text-4xl">
            <span className="text-dark-200">$</span> Vue.js
          </p>
        </div>
      </div>
    </section>
  );
};
