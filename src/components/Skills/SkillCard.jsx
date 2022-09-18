const SkillCard = ({ src, technology }) => {
  return (
    <article className="card">
      <img
        src={src}
        alt={`Logo ${technology}`}
        className="icon"
        loading="lazy"
      />
      <p>{technology}</p>
    </article>
  );
};

export default SkillCard;
