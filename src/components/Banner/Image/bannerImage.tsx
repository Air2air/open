
import ImageCallout from "components/Banner/Image/imageCallout";

import { BannerImageWrapper, Overlay } from "../bannerComponents";

export const BannerImage = (props) => {
  return (
    <>
      <BannerImageWrapper className="animate__animated animate__fadeIn animate__delay-0s">
        {props.pageImage ? <ImageCallout {...props} /> : ""}
        <Overlay
          style={{
            opacity: props.overlayOpacity,
            background: props.overlayColor,
          }}
        />
      </BannerImageWrapper>
    </>
  );
};



export default BannerImage;

//
