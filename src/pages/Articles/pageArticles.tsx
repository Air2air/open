import { useQuery } from "react-query";
import BannerVideo from "components/BannerVideo/bannerVideo";
import { COLOR_BASE } from "constants/index";
import RowButton from "components/Button/rowButton";
import { BannerText } from "components/BannerText/bannerText";
import ArticleSection from "components/Articles/articleSection";
import Spacer from "components/Spacer/spacer";

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
          <BannerText text="articles" />
        </>
      )}
      {status === "success" && (
        <>
          <ArticleSection data={data} />
        </>
      )}
    </>
  );
};

export default ArticlesPage;