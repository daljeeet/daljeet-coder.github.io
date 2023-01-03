import React from 'react'

const ProjectCards = ({project, name}) => {
  return (
    <>
    <div className="card card__one">
      <div className="card__bg"></div>
      <img src={project} alt="" />
      <div className="card__text">
        <p className="card__title">{name}</p>
      </div>
    </div>
    </>
  )
}

export default ProjectCards