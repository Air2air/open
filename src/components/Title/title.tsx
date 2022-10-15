import { Link } from "react-router-dom";
import styled from "styled-components";

import { TITLE_HEIGHT } from "../../styles/Constants";

export const Title = (props) => {
  return (
    <TitleWrapper>
{props.title}
{props.subtitle}
    </TitleWrapper>
  );
};

const TitleWrapper = styled.div`
  width: '100%';
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: ${TITLE_HEIGHT};
//background:red;
`;
