import Button from "../../components/Button/button";
import Chip from "../../components/Chip/chip";
const title = `BioTech  Group Expertise`;
const subtitle = `optional Subtitle about BioTech`;
const text = `Biotech is a technology based on biology, meaning that living organisms and biological shd processes are used in the production of biotech. `;

const BioTechPage = ({ nextPath, nextName, section }) => {
  return (
    <>
      {section ? <Chip section={section} /> : ""}
      <div className="wrapper">
        <div className="content">
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          <p>{text}</p>
        </div>
        <Button section={section} nextPath={nextPath} nextName={nextName} />
      </div>
    </>
  );
};
export default BioTechPage;
