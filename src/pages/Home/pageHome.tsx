import { COLOR_BASE } from "constants/index";
import OrgsCallout from "../../components/OrgsCallout/orgsCallOut";
import HeadingHome from "components/Heading/headingHome";
import ChartHome from "components/Chart/Home/chartHome";
import Spacer from "components/Spacer/spacer";
import RowButton from "components/Button/rowButton";

const HomePage = () => {
  return (
    <>
      <Spacer height={120} />
      <ChartHome backgroundColor={COLOR_BASE} />
      <HeadingHome backgroundColor={COLOR_BASE} />
      <RowButton buttonTo="/practice_areas" buttonText="What we do" />
      <Spacer height={60} />
      <OrgsCallout />
    </>
  );
};

export default HomePage;
