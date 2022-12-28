import { useQuery } from "react-query";
import BannerVideo from "components/BannerVideo/bannerVideo";
import { COLOR_BASE } from "constants/index";
import Callout from "components/Callout/callOut";
import RowButton from "components/Button/rowButton";
import ChartVision from "components/Chart/Vision/chartVision";

const dataSource = "data/dataVision.json";
const queryName = "vision";

const VisionPage = () => {
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
        <BannerVideo
          text="casestudies"
          pageVideo={776446335}
          overlayOpacity={0.4}
          overlayColor={COLOR_BASE}
          typing
          loopEndTime={loopEndTime}
        />
      )}
      {status === "success" && (
        <>
          <BannerVideo
            text="vision"
            pageVideo={776451115}
            overlayOpacity={0.1}
            overlayColor={COLOR_BASE}
            typing={true}
          />
          <ChartVision
            loopEndTime={loopEndTime}
            columnCount={7}
            data={data}
            backgroundColor={2}
          />
          {data.map((props, index) => (
            <Callout key={index} {...props} />
          ))}

          <RowButton buttonTo="/about" buttonText="About" />
        </>
      )}
    </>
  );
};

export default VisionPage;

// const VisionPage = () => {
//   return (
//     <>
//       <BannerVideo
//         text="vision"
//         pageVideo={776451115}
//         overlayOpacity={0.1}
//         overlayColor={COLOR_BASE}
//         typing={true}
//       />
//       <ChartVision columnCount={7} data={dataVision} backgroundColor={2} />
//       <RowButton buttonTo="/about" buttonText="About" />
//       {/* <TimeLine data={dataVision} backgroundColor={3} /> */}
//     </>
//   );
// };

// export default VisionPage;
