import { keyframes } from "styled-components";

export const homeColumns = keyframes` 
  0% {
    opacity: 0;
    transform: scaleX(1) translateY(200px);
  }
  20% {
    opacity: 1;
    transform: scaleX(1)  translateY(0px);
  }
  60% {
    opacity: 1;
    transform: scaleX(1)  translateY(0px);
  }
  100% {
    transform: scaleX(0.5);
}`;

export const expandText = keyframes` 
  0% {
    opacity: 0;
    transform: scaleX(1);
  }
  20% {
    opacity: 1;
    transform: scaleX(1);
  }
  60% {
    opacity: 1;
    transform: scaleX(1);
  }
  100% {
    transform: scaleX(1.75);
}`;
