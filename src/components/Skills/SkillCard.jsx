const SkillCard = ({ img, technology }) => {
  return (
    <article className="card">
      <img
        src={img}
        alt={`Logo ${technology}`}
        className="icon"
        loading="lazy"
      />
      <p>{technology}</p>
    </article>
  );
};

export default SkillCard;
