import Button from "../../components/Button/button";
import Chip from "../../components/Chip/chip";
const title = `PharmaTech PreSeed Stage`;
const subtitle = `optional Subtitle about PharmaTech`;
const text = `Before accessing VC capital, there is the pre-seed or bootstrapping stage. This is the time you spend getting your operations off the ground, and when you begin to build your product or service prototype to assess the viability of your idea. At this point it is unlikely that VCs will provide funding in exchange for equity, so you need to depend on your personal resources and contacts to launch your startup.`;
const PharmaTechPreSeedPage = ({ nextPath, nextName, section }) => {
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
export default PharmaTechPreSeedPage;
