import React, { ReactNode, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { animated, useSpring } from 'react-spring';
/*
In React typescript, create a HOC component that will add a fade transition effect between pages.  It should not use RouteComponentProps, because the component must be compatible with react-router v6.   All props should be typed in an Interface.  The component should be a function that takes a single props argument.  The function should return a ReactNode.  The component should use the useLocation hook to get the current location.  The component should not use the useTransition hook.  The component should use the useState hook to set the key to the current location.  The component should use the useEffect hook to update the key when the location changes.  The component should return a ReactNode.  The component should be exported as default.
*/

interface Props {
  children: ReactNode;
}

const FadeTransition: React.FC<Props> = ({ children }) => {
  const location = useLocation();
  const [key, setKey] = useState(location.pathname);
  const { opacity } = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 },
    reset: true,
  });

  useEffect(() => {
    setKey(location.pathname);
  }, [location.pathname]);

  return (
    <animated.div style={{ opacity }}>
      {key === location.pathname && children}
    </animated.div>
  );
};

export default FadeTransition;

