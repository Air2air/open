import { BREAKPOINT } from "styles/Constants";
import Container from "components/Container/container";
import {
  OrgInnerWrapper,
  OrgMapImageRow,
  OrgMapImageWrapper,
  OrgMapImage,
} from "./orgsComponents";
import { FetchData } from "fetch/fetch";

const OrgsCallOut = ({ jsonFile }) => {
  const isMobile = window.innerWidth < BREAKPOINT;

  function resizeImage(width, isMobile) {
    if (isMobile) {
      return width * 0.6;
    } else {
      return width;
    }
  }

  const { data, error } = FetchData({
    file: jsonFile,
  });
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return data && data.length > 0 ? (
    <>
      <Container backgroundColor={1}>
        <OrgInnerWrapper>
          <OrgMapImageRow>
            {data.map((props, index) => (
              <OrgMapImageWrapper key={index}>
                <OrgMapImage
                  src={`images/content/${props.image}`}
                  alt={props.title}
                  width={resizeImage(props.width, isMobile)}
                />
              </OrgMapImageWrapper>
            ))}
          </OrgMapImageRow>
        </OrgInnerWrapper>
      </Container>
    </>
  ) : (
    <div>No data</div>
  );
};

export default OrgsCallOut;
