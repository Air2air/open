/* Create a React component named BannerAnimation that uses styled-components and the useSpring hook.  The BannerAnimation wrapper height is {BANNER_HEIGHT_DESKTOP}px imported from "./../../styles/Constants" and the wrapper width is 100%.   The BannerAnimation component is a default export.  The component background color is gold.  Inside the BannerAnimation wrapper  is a <Container> imported from "./../Container/container.tsx".  Inside the <Container> is  <AnimatedColumns /> imported from "./animatedColumns"; */
import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { BANNER_HEIGHT_DESKTOP } from './../../styles/Constants';
import Container from './../Container/container';
import AnimatedColumns from './animatedColumns';

const BannerAnimation = () => {
  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });
  return (
    <BannerAnimationWrapper style={props}>
      <Container>
        <AnimatedColumns />
      </Container>
    </BannerAnimationWrapper>
  );
};
export default BannerAnimation;
const BannerAnimationWrapper = styled(animated.div)`
  height: ${BANNER_HEIGHT_DESKTOP}px;
  width: 100%;
  background-color: gold;
`;