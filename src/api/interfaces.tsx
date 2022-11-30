export interface ICalloutProps {
  id?: number;
  data?: any;
  order?: number;
  title?: any;
  label?: any;
  text?: any;
  side?: string;
  color?: string;
  backgroundColor?: any;
  buttonText?: string;
  buttonTo?: string;
  buttonColor?: string;
}

export interface ICalloutBulletProps {
  id: number;
  title?: any;
  text: string;
  side?: string;
  color?: string;
  backgroundColor?: any;
  buttonText?: string;
  buttonTo?: string;
  buttonColor?: any;
}

export interface IAdvisorsProps {
  title?: string;
  id?: number;
  order?: number;
  nameLast?: string;
  nameFirst?: string;
  role?: string;
  text?: string;
  photo?: string;
  linkedin?: string;
  backgroundColor?: number;
  buttonColor?: any;
}

export interface IGraphProps {
  title?: string;
  size?: number;
  backgroundColor?: any;
  buttonText: string;
  buttonTo: string;
}

export interface IGraphColumnProps {
  id?: number;
  label?: string;
  value?: string;
  size?: number;
  background?: string;
  outerHeight?: number;
}

export interface ITimeLineProps {
  id?: any;
  data?: any;
  order?: number;
  title?: string;
  text?: any;
  side?: string;
  color?: any;
  backgroundColor?: number;
  buttonText?: string;
  buttonTo?: string;
}

export interface IPracticeAreasProps {
  key: number;
  id: number;
  title: string;
  text: string;
  backgroundColor: string;
  buttonText?: string;
  buttonTo?: string;
}

export interface BannerVideoProps {
  title: string;
  text?: string;
  pageVideo?: number;
  loadingImage?: string;
  color?: string;
  overlayOpacity: number;
  overlayColor: string;
  typing: boolean;
}

export interface VideoCalloutProps {
  pageVideo: number;
  overlayOpacity: number;
  overlayColor: string;
  loadingImage?: string;
}

export interface VideoOverlayProps {
  overlayOpacity: number;
  overlayColor: string;
}

export interface BannerChartProps {
  data: any;
  randomHeight: boolean;
  color: string;
  label: string;
  text: string;
  backgroundColor: number;
  typing?: boolean;
}
export interface BarColumnProps {
  // data: any;
  id: number;
  label?: any;
  randomHeight: boolean;
  height: number;
  color: string;
  backgroundColor: any;
}

export interface IContactItemProps {
  id: number;
  shortName: string;
  email: string;
  address: string;
  photo: string;
  backgroundColor: number;
}
