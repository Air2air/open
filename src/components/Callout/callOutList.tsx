import  Callout  from "./callOut";
import { FetchData } from "fetch/fetch";
import { CalloutSkeleton } from "./calloutComponents";

const CalloutList = ({ jsonFile }) => {
  const { data, loading, error } = FetchData({
    file: jsonFile,
  });
  if (loading) {
    return <CalloutSkeleton />;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <>
      {data && data.length > 0 ? (
        data.map((props, index) => {
          return <Callout {...props} key={index} />;
        })
      ) : (
        <div>Data Fetch error in Callout component</div>
      )}
    </>
  );
};

export default CalloutList;


