// Data
import skillsData from "./skillsData";
// Components
import SkillCard from "./SkillCard";

const SkillsContainer = () => {
  return (
    <div className="container">
      {skillsData.map(({ technology, img }) => (
        <SkillCard key={technology} technology={technology} img={img} />
      ))}
    </div>
  );
};

export default SkillsContainer;
