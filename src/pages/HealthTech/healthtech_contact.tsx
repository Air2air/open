import { Link } from "react-router-dom";
const title = `HealthTech Contact`;
const subtitle = `Subtitle about HealthTech`;
const text = `To learn more about how we help these ventures email us or visit us on LinkedIn`;
const HealthTechContactPage = ({ nextPath, nextName, section }) => {
  return (
    <>
<div className="wrapper">
<div className="chip health">{section}</div>
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
export default HealthTechContactPage;
