import React from "react";
import underline from "../../images/underline.svg";
const Skills = () => {
  return (
    <div
      id="skills"
      className=" w-full md:w-5/6 mt-20 md:mt-10 m-auto text-center py-6"
    >
      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="w-fit m-auto px-8 mb-6"
      >
        <h1 className="mb-2 text-4xl">My Skills</h1>
        <div className="">
          <img src={underline} alt="" className="" />
        </div>
      </div>
      <div className="relative ">
        <div className="w-80 h-80 absolute top-[-5rem] z-0 md:left-[-5rem] rounded-full bg-gradient-to-r from-grads/30 to-gradf/30 blur-3xl"></div>
        <div className="w-80 h-80 absolute bottom-[-5rem] z-0 md:right-[-5rem] rounded-full bg-gradient-to-r from-gradf/20 to-grads/30 blur-3xl"></div>
        <div className="bg-lightbg p-10 z-10 rounded-2xl">
          <h3 className="mb-8 border-b-2 w-fit ml-10 px-2 rounded-md">
            Language & Tools :
          </h3>
          <div
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-y-8 gap-x-5"
          >
            <div className="skillBox m-auto rounded-lg hover:animate-bounce duration-1000 cursor-none lg:w-52 w-32 h-20 lg:h-32 bg-gradf/40 py-2 relative ">
              <img
                src="https://user-images.githubusercontent.com/80110392/210499593-ca8b2ba2-c9c1-40d9-b358-a99e3ab2b4bc.svg"
                className="w-1/3 m-auto"
                alt=""
              />
              <div className="bar w-5/6 bg-darkbg rounded-full border-2 border-darkbg h-2 left-[10%] absolute bottom-1 md:bottom-3 overflow-hidden">
                <div className="bg-fontcolor h-1 rounded-full w-5/6 animate-width "></div>
              </div>
            </div>
            <div className="skillBox m-auto rounded-lg hover:animate-bounce duration-1000 cursor-none lg:w-52 w-32 h-20 lg:h-32 bg-gradf/40 py-2 relative ">
              <img
                src="https://user-images.githubusercontent.com/80110392/210498458-d17c5a52-f76d-4f2e-b00e-fe52dca02313.svg"
                className="w-1/3 m-auto"
                alt=""
              />
              <div className="bar w-5/6 bg-darkbg rounded-full border-2 border-darkbg h-2 left-[10%] absolute bottom-1 md:bottom-3">
                <div className="bg-fontcolor h-1 rounded-full w-5/6 animate-width "></div>
              </div>
            </div>
            <div className="skillBox m-auto rounded-lg hover:animate-bounce duration-1000 cursor-none lg:w-52 w-32 h-20 lg:h-32 bg-gradf/40 py-2 relative ">
              <img
                src="https://user-images.githubusercontent.com/80110392/210498475-7c5470b5-9ac0-49fc-a086-100f5abf8733.svg"
                className="w-1/3 m-auto"
                alt=""
              />
              <div className="bar w-5/6 bg-darkbg rounded-full border-2 border-darkbg h-2 left-[10%] absolute bottom-1 md:bottom-3">
                <div className="bg-fontcolor h-1 rounded-full w-3/4 animate-width "></div>
              </div>
            </div>
            <div className="skillBox m-auto rounded-lg hover:animate-bounce duration-1000 cursor-none lg:w-52 w-32 h-20 lg:h-32 bg-gradf/40 py-2 relative ">
              <img
                src="https://user-images.githubusercontent.com/80110392/210501305-35907fe5-ffb0-4feb-ab44-cff59dabc865.svg"
                className="w-1/3 m-auto"
                alt=""
              />
              <div className="bar w-5/6 bg-darkbg rounded-full border-2 border-darkbg h-2 left-[10%] absolute bottom-1 md:bottom-3">
                <div className="bg-fontcolor h-1 rounded-full w-3/4 animate-width "></div>
              </div>
            </div>
            <div className="skillBox m-auto rounded-lg hover:animate-bounce duration-1000 cursor-none lg:w-52 w-32 h-20 lg:h-32 bg-gradf/40 py-2 relative ">
              <img
                src="https://user-images.githubusercontent.com/80110392/210502706-9c859b39-3d3b-4a09-8676-f466af060b6c.svg"
                className="w-1/3 h-3/4 m-auto"
                alt=""
              />
              <div className="bar w-5/6 bg-darkbg rounded-full border-2 border-darkbg h-2 left-[10%] absolute bottom-1 md:bottom-3">
                <div className="bg-fontcolor h-1 rounded-full w-1/4 animate-width "></div>
              </div>
            </div>
            <div className="skillBox m-auto rounded-lg hover:animate-bounce duration-1000 cursor-none lg:w-52 w-32 h-20 lg:h-32 bg-gradf/40 py-2 relative ">
              <img
                src="https://user-images.githubusercontent.com/80110392/212751832-e5077340-d488-4a5c-bcd0-6e0e2dde1c4c.svg"
                className="w-1/3 m-auto"
                alt=""
              />
              <div className="bar w-5/6 bg-darkbg rounded-full border-2 border-darkbg h-2 left-[10%] absolute bottom-1 md:bottom-3">
                <div className="bg-fontcolor h-1 rounded-full w-1/4 animate-width "></div>
              </div>
            </div>

            <div className="skillBox m-auto rounded-lg hover:animate-bounce duration-1000 cursor-none lg:w-52 w-32 h-20 lg:h-32 bg-gradf/40 py-2 relative ">
              <img
                src="https://user-images.githubusercontent.com/80110392/210498509-583509e4-6fba-44c5-9c62-2550b3c03a1e.svg"
                className="w-1/3 m-auto"
                alt=""
              />
              <div className="bar w-5/6 bg-darkbg rounded-full border-2 border-darkbg h-2 left-[10%] absolute bottom-1 md:bottom-3">
                <div className="bg-fontcolor h-1 rounded-full w-3/4 animate-width "></div>
              </div>
            </div>
            <div className="skillBox m-auto rounded-lg hover:animate-bounce duration-1000 cursor-none lg:w-52 w-32 h-20 lg:h-32 bg-gradf/40 py-2 relative ">
              <img
                src="https://user-images.githubusercontent.com/80110392/210502766-3387da2b-a991-4858-b206-d65a83732f12.svg"
                className="w-1/3 m-auto"
                alt=""
              />
              <div className="bar w-5/6 bg-darkbg rounded-full border-2 border-darkbg h-2 left-[10%] absolute bottom-1 md:bottom-3">
                <div className="bg-fontcolor h-1 rounded-full w-1/4 animate-width "></div>
              </div>
            </div>
          </div>
          <h3 className="my-8 border-b-2 w-fit ml-20 px-2 rounded-md">
            Other Skills :
          </h3>
          <div
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-y-8 gap-x-5"
          >
            <div className="skillBox m-auto m-auto rounded-lg hover:animate-bounce duration-1000 cursor-none lg:w-52 w-32 h-20 lg:h-32 bg-gradf/40 py-2 relative ">
              <img
                src="https://user-images.githubusercontent.com/80110392/210502839-ba898ed3-d33a-4b01-a554-15e3d25c9b9d.svg"
                className="w-1/2 m-auto"
                alt=""
              />
              <div className="bar w-5/6 bg-darkbg rounded-full border-2 border-darkbg h-2 left-[10%] absolute bottom-1 md:bottom-3 overflow-hidden">
                <div className="bg-fontcolor h-1 rounded-full w-5/6 animate-width "></div>
              </div>
            </div>
            <div className="skillBox m-auto rounded-lg hover:animate-bounce duration-1000 cursor-none lg:w-52 w-32 h-20 lg:h-32 bg-gradf/40 py-2 relative ">
              <img
                src="https://user-images.githubusercontent.com/80110392/210503032-817da1a7-f7c8-4d59-b6c0-6a7e5270ca38.svg"
                className="w-1/3 m-auto"
                alt=""
              />
              <div className="bar w-5/6 bg-darkbg rounded-full border-2 border-darkbg h-2 left-[10%] absolute bottom-1 md:bottom-3">
                <div className="bg-fontcolor h-1 rounded-full w-1/2 animate-width "></div>
              </div>
            </div>
            <div className="skillBox m-auto rounded-lg hover:animate-bounce duration-1000 cursor-none lg:w-52 w-32 h-20 lg:h-32 bg-gradf/40 py-2 relative ">
              <img
                src="https://user-images.githubusercontent.com/80110392/210502569-a5c19368-14c3-473b-829c-fbb050b42f4e.svg"
                className="w-1/4 m-auto"
                alt=""
              />
              <div className="bar w-5/6 bg-darkbg rounded-full border-2 border-darkbg h-2 left-[10%] absolute bottom-1 md:bottom-3">
                <div className="bg-fontcolor h-1 rounded-full w-3/4 animate-width "></div>
              </div>
            </div>
            <div className="skillBox m-auto rounded-lg hover:animate-bounce duration-1000 cursor-none lg:w-52 w-32 h-20 lg:h-32 bg-gradf/40 py-2 relative ">
              <img
                src="https://user-images.githubusercontent.com/80110392/210502627-042662ed-f5cb-4ede-b978-cfa98ef641b5.svg"
                className="w-1/3 m-auto"
                alt=""
              />
              <div className="bar w-5/6 bg-darkbg rounded-full border-2 border-darkbg h-2 left-[10%] absolute bottom-1 md:bottom-3">
                <div className="bg-fontcolor h-1 rounded-full w-3/4 animate-width "></div>
              </div>
            </div>
            <div className="skillBox m-auto rounded-lg hover:animate-bounce duration-1000 cursor-none lg:w-52 w-32 h-20 lg:h-32 bg-gradf/40 py-2 relative ">
              <img
                src="https://user-images.githubusercontent.com/80110392/211145634-b6732f40-2e9f-48bc-bbab-e2d344a30041.svg"
                className="w-1/2 m-auto mt-4"
                alt=""
              />
              <div className="bar w-5/6 bg-darkbg rounded-full border-2 border-darkbg h-2 left-[10%] absolute bottom-1 md:bottom-3">
                <div className="bg-fontcolor h-1 rounded-full w-1/4 animate-width "></div>
              </div>
            </div>
            <div className="skillBox m-auto rounded-lg hover:animate-bounce duration-1000 cursor-none lg:w-52 w-32 h-20 lg:h-32 bg-gradf/40 py-2 relative ">
              <img
                src="https://avatars.githubusercontent.com/u/8908513?s=200&v=4"
                className="w-1/3 m-auto"
                alt=""
              />
              <div className="bar w-5/6 bg-darkbg rounded-full border-2 border-darkbg h-2 left-[10%] absolute bottom-1 md:bottom-3">
                <div className="bg-fontcolor h-1 rounded-full w-1/4 animate-width "></div>
              </div>
            </div>

            <div className="skillBox m-auto  rounded-lg hover:animate-bounce duration-1000 cursor-none lg:w-52 w-32 h-20 lg:h-32 bg-gradf/40 py-2 relative ">
              <img
                src="https://user-images.githubusercontent.com/80110392/212755675-e84111db-edb8-4822-867d-510f2e200836.svg"
                className="w-1/3 m-auto"
                alt=""
              />
              <div className="bar w-5/6 bg-darkbg rounded-full border-2 border-darkbg h-2 left-[10%] absolute bottom-1 md:bottom-3">
                <div className="bg-fontcolor h-1 rounded-full w-3/4 animate-width "></div>
              </div>
            </div>
            <div className="skillBox m-auto rounded-lg hover:animate-bounce duration-1000 cursor-none lg:w-52 w-32 h-20 lg:h-32 bg-gradf/40 py-2 relative ">
              <img
                src="https://user-images.githubusercontent.com/80110392/212755766-c018bee3-35ca-448c-82de-66903a42e042.svg"
                className="w-1/2 m-auto mt-3"
                alt=""
              />
              <div className="bar w-5/6 bg-darkbg rounded-full border-2 border-darkbg h-2 left-[10%] absolute bottom-1 md:bottom-3">
                <div className="bg-fontcolor h-1 rounded-full w-1/4 animate-width "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
