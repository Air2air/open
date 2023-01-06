import { useQuery } from "react-query";
import BannerVideo from "components/Banner/bannerVideo";
import { COLOR_BASE } from "styles/Constants";
import Callout from "components/Callout/callOut";
import ChartCaseStudies from "components/Chart/CaseStudies/chartCaseStudies";
import RowButton from "components/Button/rowButton";
import { BannerText } from "components/Banner/bannerText";
import Spacer from "components/Spacer/spacer";

const dataSource = "/data/dataCaseStudies.json";
const queryName = "casestudies";

const CaseStudiesPage = () => {
  const fetchData = async () => {
    const res = await fetch(dataSource, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    return res.json();
  };
  const { data, status } = useQuery(queryName, fetchData);

  const loopEndTime = 14000;

  return (
    <>
      {status === "error" && (
        <p style={{ color: "red" }}>Error fetching data</p>
      )}
      {status === "loading" && (
        <>
          <BannerVideo
            pageVideo={776446335}
            overlayOpacity={0.4}
            overlayColor={COLOR_BASE}
            typing
            loopEndTime={loopEndTime}
          />
          <BannerText text="casestudies" />
        </>
      )}
      {status === "success" && (
        <>
          <BannerVideo
            pageVideo={776446335}
            overlayOpacity={0.4}
            overlayColor={COLOR_BASE}
            typing
            loopEndTime={loopEndTime}
          />
          <BannerText text="casestudies" />
          {/* <RowButton
            buttonTo="/markets"
            buttonText="Markets"
            backgroundColor={4}
          /> */}
          {data.map((props, index) => (
            <div key={index}>
              <ChartCaseStudies data={props.practiceArea} backgroundColor={2} />
              <Callout {...props} />
            </div>
          ))}

          <Spacer height={40} backgroundColor={2} />
          <RowButton
            buttonTo="/markets"
            buttonText="Markets"
            backgroundColor={2}
          />
          <Spacer height={40} backgroundColor={2} />
        </>
      )}
    </>
  );
};

export default CaseStudiesPage;
