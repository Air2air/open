import Button from "../../components/Button/button";
import Chip from "../../components/Chip/chip";
const title = `PharmaTech Series B Stage`;
const subtitle = `optional Subtitle about PharmaTech`;
const text = `Your company is now ready to scale. This stage of venture capital supports actual product manufacturing, marketing and sales operations. To expand, you'll likely need a much larger capital investment than earlier ones. Series B funding differs from Series A. Whereas Series A investors will measure your potential, for Series B they want to see actual performance and evidence of a commercially viable product or service to support future fundraising. Performance metrics give investors confidence that you and your team can achieve success at a larger scale. `;
const PharmaTechSeriesBPage = ({ nextPath, nextName, section }) => {
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
export default PharmaTechSeriesBPage;
