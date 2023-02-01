import React, { useState, useEffect } from "react";
import styled from "styled-components";

interface Props {
  src: string;
  alt?: string;
}

const LazyImage: React.FC<Props> = ({ src, alt = "" }) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    const imageRef = new Image();
    imageRef.src = src;

    imageRef.onload = () => {
      if (observer) {
        observer.disconnect();
      }

      setImageSrc(src);
    };

    if (!imageSrc) {
      observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setImageSrc(src);

          if (observer) {
            observer.disconnect();
          }
        }
      });

      observer.observe(imageRef);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [src, imageSrc]);

  return <ImageDiv src={imageSrc || ""} alt={alt} />;
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