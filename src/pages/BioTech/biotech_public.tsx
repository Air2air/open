import { Link } from "react-router-dom";
const title = `BioTech Public Company Stage`;
const subtitle = `Subtitle about BioTech`;
const text = `Mission statement Mission statement Mission statement Mission statement
        Mission statement Mission statement Mission statement Mission statement`;
const BioTechPublicPage = ({ nextPath, nextName, section }) => {
  return (
    <>
<div className="wrapper">
<div className="chip bio">{section}</div>
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
export default BioTechPublicPage;
