import { Link } from "react-router-dom";
const title = `MedTech Contact`;
const subtitle = `Subtitle about MedTech`;
const text = `To learn more about how we help these ventures email us or visit us on LinkedIn`;
const MedTechContactPage = ({ nextPath, nextName, section }) => {
  return (
    <>
<div className="wrapper">
<div className="chip med">{section}</div>
<div className="content">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <p>{text}</p>
      </div>
<Link className="btn" to={nextPath}>
        {nextName}
      </Link>
</div>
    </>
  );
};
export default MedTechContactPage;
