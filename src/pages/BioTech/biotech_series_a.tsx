import Button from "../../components/Button/button";
import Chip from "../../components/Chip/chip";
const title = `BioTech Series A Stage`;
const subtitle = `optional Subtitle about BioTech`;
const text = `Series A typically is the first round of venture capital financing. At this stage, your company has usually completed its business plan and has a pitch deck emphasizing product-market fit. You are honing the product and establishing a customer base, ramping up marketing and advertising, and you can demonstrate consistent revenue flow. `;
const BioTechSeriesAPage = ({ nextPath, nextName, section }) => {
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
export default BioTechSeriesAPage;
