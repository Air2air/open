import {
  BANNER_HEIGHT_DESKTOP_PX,
  BANNER_HEIGHT_MOBILE_PX,
  BANNER_PADDING_TOP_DESKTOP,
  BANNER_PADDING_TOP_MOBILE,
  BREAKPOINT_PX,
  CONTENT_WIDTH_DESKTOP,
  CONTENT_WIDTH_MOBILE,
} from "styles/Constants";
import styled from "styled-components";

import ImageCallout from "./../ImageCallout/imageCallout";
import parse from "html-react-parser";
import { BannerText } from "./../BannerText/bannerText";
import { TitleBanner } from "./../Title/titleBanner";
import Container from "./../Container/container";
import { FC } from "react";

type BannerImageProps = {
  title: string;
  text?: string;
  pageImage?:string;
  color?:string;
  overlayOpacity?:number;
  overlayColor?:string;
  typing:boolean;
};

export const BannerImage: FC<BannerImageProps> = ({...props}) => {
  const titleParsed = parse(props.title);

  return (
    <>
      <BannerImageWrapper>
        {props.pageImage ? (
          <ImageCallout
            pageImage={props.pageImage}
            overlayOpacity={props.overlayOpacity}
            overlayColor={props.overlayColor}
          />
        ) : (
          ""
        )}
        <TextWrapper>
          <TitleBanner title={titleParsed} color={props.color} />
          <BannerText typing={props.typing} text={props.text} />
        </TextWrapper>
      </BannerImageWrapper>
    </>
  );
};

const BannerImageWrapper = styled.div`
  position: relative;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  overflow: hidden;
  align-items: center;
  @media (min-width: ${BREAKPOINT_PX}) {
    height: ${BANNER_HEIGHT_DESKTOP_PX};
    /* padding-top: ${BANNER_PADDING_TOP_DESKTOP}; */
  }
  @media (max-width: ${BREAKPOINT_PX}) {
    height: ${BANNER_HEIGHT_MOBILE_PX};
    /* padding-top: ${BANNER_PADDING_TOP_MOBILE}; */
  }
  /* background: gold; */
`;



const TextWrapper = styled.div`
  margin: 80px auto 0 auto;
  z-index: +1;
  height: auto;
  text-align: left;
  @media (min-width: ${BREAKPOINT_PX}) {
    width: ${CONTENT_WIDTH_DESKTOP};
  }
  @media (max-width: ${BREAKPOINT_PX}) {
    width: ${CONTENT_WIDTH_MOBILE};
  }
`;

export default BannerImage;
