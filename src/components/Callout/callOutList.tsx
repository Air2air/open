import Heading from "components/Heading/heading";
import { FetchData } from "fetch/fetch";

const CalloutList = ({ jsonFile }) => {
  const { data, loading, error } = FetchData({
    file: jsonFile,
  });
  if (loading) {
    return null;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      {data.map((props, index) => (
        <div
          key={index}
          style={{ height: 500, background: props.backgroundColor }}
        >
          <Heading {...props} />
        </div>
      ))}
    </>
  );
};

export default CalloutList;
