export interface IBannerVideoProps {
  title: string;
  text?: string;
  pageVideo?: number;
  loadingImage?: string;
  color?: string;
  overlayOpacity: number;
  overlayColor: string;
  typing: boolean;
}

export interface IVideoCalloutProps {
  pageVideo: number;
  overlayOpacity: number;
  overlayColor: string;
  loadingImage?: string;
}

export interface IVideoOverlayProps {
  overlayOpacity: number;
  overlayColor: string;
}
