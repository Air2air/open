import Button from "../../components/Button/button";
import Chip from "../../components/Chip/chip";
const title = `PharmaTech Group Contact`;
const subtitle = `optional Subtitle about PharmaTech`;
const text = `To learn more about how we help these ventures email us or visit us on LinkedIn`;
const PharmaTechContactPage = ({ nextPath, nextName, section }) => {
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
export default PharmaTechContactPage;
