import Heading from "components/Heading/heading";
import { lazy } from "react";
import { BannerVideoWrapper, Overlay } from "./bannerComponents";
const VimeoPlayer = lazy(() => import("./vimeoPlayer"));

export const BannerVideo = (props: {
  pageVideo: any;
  overlayOpacity: any;
  overlayColor?: any;
  typing?: boolean;
  loopEndTime?: number;
}) => {
  return (
    <>
      <BannerVideoWrapper>
        <VimeoPlayer videoID={props.pageVideo} />
        <Overlay
          style={{
            opacity: props.overlayOpacity,
            background: props.overlayColor,
          }}
        />
      </BannerVideoWrapper>
    </>
  );
};

export default BannerVideo;
