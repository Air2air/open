import { ImageWrapper, Overlay } from "./bannerComponents";

const ImageCallout = ({ pageImage, overlayOpacity, overlayColor }) => {
  const backgroundImage = "url(/images/content/" + pageImage + ")";

  return (
    <>
      <div className="animate__animated animate__fadeIn animate__delay-0s animate__slower">
        <ImageWrapper style={{ backgroundImage: backgroundImage }} />
      </div>
      <BannerImageOpacityOverlay
        overlayOpacity={overlayOpacity}
        overlayColor={overlayColor}
      />
    </>
  );
};

const BannerImageOpacityOverlay = ({ overlayOpacity, overlayColor }) => {
  return (
    <>
      <Overlay
        style={{
          opacity: overlayOpacity,
          background: overlayColor,
        }}
      />
    </>
  );
};

export default ImageCallout;
