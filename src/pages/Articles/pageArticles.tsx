import { useQuery } from "react-query";
import BannerVideo from "components/BannerVideo/bannerVideo";
import { COLOR_BASE } from "constants/index";
import Callout from "components/Callout/callOut";
import RowButton from "components/Button/rowButton";
import { BannerText } from "components/BannerText/bannerText";

const dataSource = "data/dataArticles.json";
const queryName = "articles";

const ArticlesPage = () => {
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
          <BannerText text="articles" />
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
          <BannerText text="articles" />
          {/* <RowButton
            buttonTo="/markets"
            buttonText="Markets"
            backgroundColor={4}
          /> */}
          {data.map((props, index) => (
            <div key={index}>

              <Callout {...props} />
            </div>
          ))}
          <RowButton
            buttonTo="/markets"
            buttonText="Markets"
            backgroundColor={4}
          />
        </>
      )}
    </>
  );
};

export default ArticlesPage;
