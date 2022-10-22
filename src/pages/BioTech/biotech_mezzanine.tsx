import Button from "../../components/Button/button";
import Chip from "../../components/Chip/chip";
const title = `BioTech Mezzanine Stage`;
const subtitle = `optional Subtitle about BioTech`;
const text = `MThe final stage of venture capital marks your transition to a liquidity event, either an exit via going public or M&A. You've reached maturity and now need financing to support major events.  `;
const BioTechMezzaninePage = ({ nextPath, nextName, section }) => {
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
export default BioTechMezzaninePage;
