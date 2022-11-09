import CalloutBullet from "../Callout/callOutBullet";
import { dataEngagement } from "./dataEngagement";

const Engagement = () => {
  const engagementMap = dataEngagement.map((props) => (
    <CalloutBullet
      id={props.id}
      calloutTitle={props.title}
      calloutText={props.desc}
      backgroundColor={props.backgroundColor}
    />
  ));
  return <>{engagementMap}</>;
};

export default Engagement;
