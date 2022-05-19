import React from "react";

const ProjectCard = ({ title, img, technologies, links }) => {
  return (
    <article className="card">
      <p className="text">{title}</p>
      <div className="technologies">
        {technologies?.map((technology) => (
          <button key={technology} className="btn-technology">
            {technology}
          </button>
        ))}
      </div>
      <img src={img} alt={`${title} Image`} className="image" loading="lazy" />
      <div className="links">
        {links?.map(({ text, url }) => (
          <a
            key={text}
            className="btn-link"
            href={url}
            target="_blank"
            rel="noopener"
          >
            {text}
          </a>
        ))}
      </div>
    </article>
  );
};

export default ProjectCard;
