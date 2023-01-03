import React, { useEffect } from "react";
import "./project.css";
import cultfitImg from "../../images/cultfit.png";
import dpdzines from '../../images/dpdzines.png'
import engage from '../../images/engage.png'
import ProjectCards from "./ProjectCards";

const Projects = () => {
  useEffect(() => {
    animate();
  }, []);
  const animate = () => {
    const cards = document.querySelector(".cards");
    const images = document.querySelectorAll(".card__img");
    const backgrounds = document.querySelectorAll(".card__bg");
    const range = 40;

    // const calcValue = (a, b) => (((a * 100) / b) * (range / 100) -(range / 2)).toFixed(1);
    const calcValue = (a, b) => ((a / b) * range - range / 2).toFixed(1); // thanks @alice-mx

    let timeout;
    let projectSec = document.getElementById("projects");
    projectSec.addEventListener(
      "mousemove",
      ({ x, y }) => {
        if (timeout) {
          window.cancelAnimationFrame(timeout);
        }
        timeout = window.requestAnimationFrame(() => {
          const yValue = calcValue(y, window.innerHeight);
          const xValue = calcValue(x, window.innerWidth);

          cards.style.transform = `rotateX(${yValue}deg) rotateY(${xValue}deg)`;

          [].forEach.call(images, (image) => {
            image.style.transform = `translateX(${-xValue}px) translateY(${yValue}px)`;
          });

          [].forEach.call(backgrounds, (background) => {
            background.style.backgroundPosition = `${xValue * 0.45}px ${
              -yValue * 0.45
            }px`;
          });
        });
      },
      false
    );
  };
  return (
    <div
      id="projects"
      className="w-5/6 m-auto flex-col text-center over-flow-hidden "
    >
      <h1 className="my-10">Projects</h1>
      <div className="cards bg-lightbg rounded-2xl shadow-2xl py-4 px-8 text-left origin-center">
        <h3>My projects </h3>
        <div className="flex">
        <ProjectCards project={cultfitImg} name="CultFit.com-clone" />
        <div className="card card__two">
          <div className="card__bg"></div>
          <img src={cultfitImg} alt="" />
          <div className="card__text">
            <p className="card__title">CultFit-clone</p>
          </div>
        </div>
        </div>
        <div className="flex my-6">
        <div className="card card__one">
        <ProjectCards project={dpdzines} name="dpDzines.com" />
        </div>
        <div className="card card__three">
          <div className="card__bg"></div>
          <img src={cultfitImg} alt="" />
          <div className="card__text">
            <p className="card__title">dpDzines.com</p>
          </div>
        </div>
        </div>
        <div className="flex my-6">
        <div className="card card__one">
          <ProjectCards project={engage} name="Engagebay.com -clone" />
        </div>
        <div className="card card__three">
          <div className="card__bg"></div>
          <img src={cultfitImg} alt="" />
          <div className="card__text">
            <p className="card__title">dpDzines.com</p>
          </div>
        </div>
        </div>
        {/* <div className="card card__two">
    <div className="card__bg"></div>
    <img className="card__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/62105/3dr_chihiro.png" alt='' />
    <div className="card__text">
      <p className="card__title">Spirited Away</p>
    </div>
  </div> */}
        {/* <div className="card card__three">
    <div className="card__bg"></div>
    <img className="card__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/62105/3dr_howlcastle.png" alt='' />
    <div className="card__text">
      <p className="card__title">Howl's Moving Castle</p>
    </div>
  </div> */}
      </div>
    </div>
  );
};

export default Projects;
