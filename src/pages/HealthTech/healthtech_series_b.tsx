import { Link } from "react-router-dom";
import { ReactComponent as LogoChip } from "./../../images/logo_white.svg";
const title = `HealthTech Series B Stage`;
const subtitle = `optional Subtitle about HealthTech`;
const text = `Mission statement Mission statement Mission statement Mission statement
        Mission statement Mission statement Mission statement Mission statement`;
const HealthTechSeriesBPage = ({ nextPath, nextName, section }) => {
  return (
    <>
<div className="wrapper">
{section && <div className="chip health">
<LogoChip width="10" style={{paddingRight:8, opacity:.4}} />{section}</div>}

<div className="content">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <p>{text}</p>
      </div>
<Link className="btn" to={nextPath}>
        {nextName} <span>&gt;</span>
      </Link>
</div>
    </>
  );
};
export default HealthTechSeriesBPage;
