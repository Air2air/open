export interface ICalloutProps {
  id?: number;
  order?: number;
  title?: string;
  label?: string;
  text?: string;
  side?: string;
  color?: string;
  backgroundColor?: number | string;
  buttonText?: string;
  buttonTo?: string;
  buttonColor?: string;
  // data?: Array<string>[];
}

export interface ICalloutBulletProps {
  id: number;
  title?: string;
  text: string;
  side?: string;
  color?: string;
  backgroundColor?: number | string;
  buttonText?: string;
  buttonTo?: string;
  buttonColor?: number|string;
}

export interface ICalloutImageProps {
  id: number;
  title?: string;
  text: string;
  color?: string;
  image?: string;
  backgroundColor?: number | string;
  buttonText?: string;
  buttonTo?: string;
  buttonColor?: number|string;
}

export interface IBannerResearchProps {
  data: Array<string>;
  randomHeight: boolean;
  color: string;
  label: string;
  text: string;
  backgroundColor: number;
  typing?: boolean;
}

export interface IBannerHomeProps {
  data: Array<string>;
  randomHeight: boolean;
  color: string;
  label: string;
  text: string;
  backgroundColor: number;
  typing?: boolean;
}
export interface IBarColumnProps {
  id: number;
  label?: string;
  randomHeight: boolean;
  height: number;
  color: string;
  backgroundColor: number | string;
}
