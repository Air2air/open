import Callout from "components/Callout/callOut";
import { COLOR_BASE } from "constants/index";
import RowButton from "components/Button/rowButton";
import { BannerVideo } from "components/BannerVideo/bannerVideo";
import ChartPracticeAreas from "components/Chart/PracticeAreas/chartPracticeAreas";
import { useQuery } from "react-query";
import BannerText from "components/BannerText/bannerText";

const dataSource = "data/dataPracticeAreas.json";
const queryName = "practiceareas";

const PracticeAreasPage = () => {
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
          <BannerText text="markets" />
        </>
      )}
      {status === "success" && (
        <>
          <BannerVideo
            pageVideo={776449715}
            overlayOpacity={0.7}
            overlayColor={COLOR_BASE}
            typing={true}
          />
          <BannerText text="practiceareas" />
          <ChartPracticeAreas
            loopEndTime={loopEndTime}
            columnCount={6}
            data={data}
            backgroundColor={3}
          />
          <RowButton buttonTo="/casestudies" buttonText="Case Studies" />
          {data.map(
            (
              props: JSX.IntrinsicAttributes & {
                id?: number | undefined;
                order?: number | undefined;
                title?: string | undefined;
                label?: string | undefined;
                text?: any;
                color?: string | undefined;
                backgroundColor?: any;
                buttonText?: string | undefined;
                buttonTo?: string | undefined;
                buttonColor?: string | undefined;
              }
            ) => (
              <Callout {...props} key={props.id} />
            )
          )}
          <RowButton buttonTo="/casestudies" buttonText="Case Studies" />
        </>
      )}
    </>
  );
};

export default PracticeAreasPage;
