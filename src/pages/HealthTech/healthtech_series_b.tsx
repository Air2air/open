import { Link } from "react-router-dom";
const title = `HealthTech Series B Stage`;
const subtitle = `Subtitle about HealthTech`;
const text = `Mission statement Mission statement Mission statement Mission statement
        Mission statement Mission statement Mission statement Mission statement`;
const HealthTechSeriesBPage = ({ nextPath, nextName, section }) => {
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
export default HealthTechSeriesBPage;