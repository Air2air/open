import { useQuery } from "react-query";
import Articles from "components/Articles/articles";
import RowButton from "components/Button/rowButton";
import Spacer from "components/Spacer/spacer";
import BannerLoading from "components/Banner/bannerLoading";

const dataSource = "/data/dataArticles.json";
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
        <>
          <BannerLoading />
        </>
      )}
      {status === "loading" && (
        <>
          <BannerLoading />

        </>
      )}
      {status === "success" && (
        <>
          <Articles data={data} />
        </>
      )}

      <Spacer height={40} backgroundColor={2} />
      <RowButton buttonTo="/contact" buttonText="Contact" />
      <Spacer height={40} backgroundColor={2} />
    </>
  );
};

export default ArticlesPage;
