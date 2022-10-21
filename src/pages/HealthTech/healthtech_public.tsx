import Button from "../../components/Button/button";
import Chip from "../../components/Chip/chip";
const title = `HealthTech Public Company Stage`;
const subtitle = `optional Subtitle about HealthTech`;
const text = `An IPO or initial public offering is the natural progression of funding beyond VCs. It's the process of taking your private company public by offering corporate shares on the open market. This can be a very effective way for a growing startup with proven potential or a long-established company to generate funds and reward earlier investors, including the founder and team.`;
const HealthTechPublicPage = ({ nextPath, nextName, section }) => {
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
export default HealthTechPublicPage;
