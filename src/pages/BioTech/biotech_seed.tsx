import Button from "../../components/Button/button";
import Chip from "../../components/Chip/chip";
const title = `BioTech Seed Stage`;
const subtitle = `optional Subtitle about BioTech`;
const text = `The seed stage 
Your company now has a degree of experience and can demonstrate potential to develop into a vibrant company. You now need a pitch deck to demonstrate to VCs that your idea is a viable investment opportunity. Most of the modest sums you raise in the seed stage are for specific activities like:
	▪	Market research 
	▪	Business plan development 
	▪	Setting up a management team  
	▪	Product development `;
const BioTechSeedPage = ({ nextPath, nextName, section }) => {
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
export default BioTechSeedPage;
