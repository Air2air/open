import { CALLOUT_HEIGHT_PX } from "../../styles/Constants";
import styled from "styled-components";
import Button from "../Button/button";
import TypeWriterEffect from "react-typewriter-effect";

export const CalloutText = ({
  calloutTitle,
  calloutText,
  backgroundColor,
  buttonText,
  buttonTo,
  typing,
}) => {
  return (
    <>
      <CalloutTextWrapper
        style={{ background: backgroundColor && backgroundColor }}
      >
        <TextWrapper>
          <CalloutTitle>{calloutTitle}</CalloutTitle>
          {typing ? (
            <TypeWriterParagraph
              textStyle={{
                fontFamily: "Roboto, sans-serif",
                fontWeight: 300,
                fontSize: "1.2em",
                lineHeight: "1.5em",
                color: "white",
              }}
              startDelay={10}
              cursorColor="white"
              text={calloutText}
              typeSpeed={1}
            />
          ) : (
            <CalloutParagraph>{calloutText}</CalloutParagraph>
          )}

          {buttonText ? <Button to={buttonTo} text={buttonText} /> : ""}
        </TextWrapper>
      </CalloutTextWrapper>
    </>
  );
};

const CalloutTextWrapper = styled.div`
  position: relative;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  padding:20px;
  overflow: hidden;
  align-items: center;
  height:auto;
  min-height: ${CALLOUT_HEIGHT_PX};
`;

const TextWrapper = styled.div`
  margin: 0 auto;
  z-index: +1;
  height: auto;
  width: 60%;
  text-align: left;
`;

const CalloutTitle = styled.div`
  color: red;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 100;
  font-size: 2em;
  margin-bottom: 0.8em;
  height: auto;
  text-align: left;
`;

const CalloutParagraph = styled.div`
  color: white;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 1.2em;
  line-height: 1.3em;
  height: auto;
  text-align: left;
`;

const TypeWriterParagraph = styled(TypeWriterEffect)`
  color: white;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 1.2em;
  line-height: 1.3em;
  height: auto;
  text-align: left;
`;

export default CalloutText;
