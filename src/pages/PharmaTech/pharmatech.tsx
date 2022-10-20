import Button from "../../components/Button/button";
import Chip from "../../components/Chip/chip";
const title = `PharmaTech  Group Expertise`;
const subtitle = `optional Subtitle about PharmaTech`;
const text = `Innovative technologies, such as AI, blockchain, cloud computing, and machine learning can be applied across the healthcare product lifecycle. PharmaTech may be best explained as encompassing the various ways these new technologies can be leveraged to help companies complete different aspects of the work required within the pharma R&D space.`;
const PharmaTechPage = ({ nextPath, nextName, section }) => {
  return (
    <>
{section ? <Chip section={section} /> : ""}
<div className="wrapper">

<div className="content">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <p>{text}</p>
      </div>

        <Button section={section} nextPath={nextPath} nextName={nextName} />      </div>
    </>
  );
};
export default PharmaTechPage;
