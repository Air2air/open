import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

// In React typescript, create a lazy image loader component that takes in an image src and an image alt description as Props. The loader should use IntersectionObserver to load the image when it is in the viewport. The loader should show a loading skeleton while the image is loading.

interface Props {
  src: string;
  alt: string;
}

const LazyImage: React.FC<Props> = ({ src, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "50px 0px" }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [imageRef]);

  return (
    <>
      {!isLoaded && (
        <div
          style={{
            width: "100%",
            paddingTop: "75%",
            backgroundColor: "lightgray",
            borderRadius: "5px",
          }}
        />
      )}
      <ImageDiv
        ref={imageRef}
        src={isVisible ? src : ""}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        style={{ display: isLoaded || !isVisible ? "block" : "none" }}
      />
    </>
  );
};

export default LazyImage;

const ImageDiv = styled.img`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* filter: brightness(0.5); */
`;
