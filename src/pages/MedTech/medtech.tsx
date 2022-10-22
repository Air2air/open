import Button from "../../components/Button/button";
import Chip from "../../components/Chip/chip";
const title = `MedTech Group Expertise`;
const subtitle = `optional Subtitle about MedTech`;
const text = `Medtech technology is commonly used for diagnosis, patient care, treatment, and improvement of a person's health. It is mostly used inside the hospital and is oriented toward diagnosing and treatment rather than prevention. `;
const MedTechPage = ({ nextPath, nextName, section }) => {
 return (
  <>
{section ? <Chip section={section} /> : ""}
<div className="wrapper">

<div className="content">
   <h1>{title}</h1>
   <h2>{subtitle}</h2>
   <p>{text}</p>
   </div>

    <Button section={section} nextPath={nextPath} nextName={nextName} />   </div>
  </>
 );
};
export default MedTechPage;
