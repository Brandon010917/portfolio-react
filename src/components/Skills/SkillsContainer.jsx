// Data
import skillsData from "./skillsData";
// Components
import SkillCard from "./SkillCard";

const SkillsContainer = () => {
  return (
    <div className="container">
      {skillsData.map(({ technology, src }) => (
        <SkillCard key={technology} technology={technology} src={src} />
      ))}
    </div>
  );
};

export default SkillsContainer;
