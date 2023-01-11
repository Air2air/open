
import ImageCallout from "components/Banner/imageCallout";

import { BannerImageWrapper, Overlay } from "./bannerComponents";

export const BannerImage = (props) => {
  return (
    <>
      <BannerImageWrapper className="animate__animated animate__fadeIn animate__delay-0s animate__slower">
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
