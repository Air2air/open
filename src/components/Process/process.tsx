import CalloutBullet from "../Callout/callOutBullet";
import { dataProcess } from "./dataProcess";

const Process = () => {
  const processMap = dataProcess.map((props) => (
    <CalloutBullet
      id={props.id}
      calloutTitle={props.title}
      calloutText={props.desc}
      backgroundColor={props.backgroundColor}
    />
  ));
  return <>{processMap}</>;
};

export default Process;
