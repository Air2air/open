import Button from "../../components/Button/button";
import Chip from "../../components/Chip/chip";
const title = `HealthTech Group Expertise`;
const subtitle = `optional Subtitle about HealthTech`;
const text = `Healthtech (oftentimes referred to as digital health) is a technology for better delivery, payment, and/or consumption of care. It is mostly about personal health, meaning patients engage with their personal health, and everything that happens outside of the hospital, like telehealth and remote monitoring. Healthtech is about prevention and monitoring rather than treatment. `;
const HealthTechPage = ({ nextPath, nextName, section }) => {
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
export default HealthTechPage;
