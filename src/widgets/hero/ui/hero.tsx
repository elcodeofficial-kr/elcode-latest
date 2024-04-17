import HeroBg from "@/shared/main/assets/images/hero_background.jpg";

export const Hero = () => {
  return (
    <>
      <section
        className="h-[900px] bg-cover bg-left-top relative bg-blend-darken bg-opacity-20 bg-black"
        style={{ backgroundImage: `url(${HeroBg})` }}
      >
        <div className="absolute top-0 left-0 bg-gradient-to-b from-black  h-48 w-full "></div>
        <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black  h-48 w-full "></div>
      </section>
    </>
  );
};
