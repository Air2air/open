
import ImageCallOut from "components/Banner/Image/imageCallOut";

import { BannerImageWrapper, Overlay } from "../bannerComponents";

export const BannerImage = (props) => {
  return (
    <>
      <BannerImageWrapper className="animate__animated animate__fadeIn animate__delay-0s">
        {props.pageImage ? <ImageCallOut {...props} /> : ""}
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
