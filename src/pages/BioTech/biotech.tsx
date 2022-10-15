import { Link } from "react-router-dom";
import Chip from "../../components/Chip/chip";
const title = `BioTech  Expertise`;
const subtitle = `optional Subtitle about BioTech`;
const text = `Mission statement Mission statement Mission statement Mission statement
        Mission statement Mission statement Mission statement Mission statement`;
        
const BioTechPage = ({ nextPath, nextName, section }) => {
  return (
    <>
      <div className="wrapper">
        {section ? <Chip section='Bio' /> : ""}

        <div className="content">
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          <p>{text}</p>
        </div>
        <Link className="btn" to={nextPath}>
          {nextName} <span>&gt;</span>
        </Link>
      </div>
    </>
  );
};
export default BioTechPage;
