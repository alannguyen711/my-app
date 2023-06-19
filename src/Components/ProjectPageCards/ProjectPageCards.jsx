import React from 'react';
import './ProjectPageCards.css';
import propTypes from 'prop-types';
import Arrow from '../../Assets/arrow.svg';

function ProjectPageCards({
  name, type, description, image,
}) {
  return (
    <div>
      <div className="individual-project">
        <div className="project-image-container">
          <img src={image} alt="TCW project card" className="project-image" />
        </div>
        <div className="project-text">
          <div className="project-name">{name}</div>
          <div className="project-type">{type}</div>
          <div className="project-description">{description}</div>
          <div className="view-project-arrow">
            <div className="view-project">VIEW PROJECT</div>
            <div className="arrow-projects"><img src={Arrow} alt="right-pointing arrow" /></div>
          </div>
        </div>
      </div>
    </div>
  );
}

ProjectPageCards.propTypes = {
  name: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  image: propTypes.node.isRequired,
};

export default ProjectPageCards;
