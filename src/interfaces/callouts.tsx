export interface ICalloutProps {
  id?: number;
  order?: number;
  title?: string;
  label?: string;
  text?: any;
  side?: string;
  color?: string;
  backgroundColor?: any;
  buttonText?: string;
  buttonTo?: string;
  buttonColor?: string;
  // data?: any[];
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

export interface ICalloutImageProps {
  id: number;
  title?: any;
  text: string;
  color?: string;
  image?:string;
  backgroundColor?: any;
  buttonText?: string;
  buttonTo?: string;
  buttonColor?: any;
}



export interface IBannerChartProps {
  data: any;
  randomHeight: boolean;
  color: string;
  label: string;
  text: string;
  backgroundColor: number;
  typing?: boolean;
}
export interface IBarColumnProps {
  id: number;
  label?: any;
  randomHeight: boolean;
  height: number;
  color: string;
  backgroundColor: any;
}


