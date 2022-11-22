export interface ICalloutProps {
  id?: number;
  data?: any;
  order?: number;
  title?: any;
  text?: any;
  side?: string;
  color?: string;
  backgroundColor?: any;
  buttonText?: any;
  buttonTo?: any;
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
}

export interface IAdvisorsProps {
  pageTitle?: string;
  id?: number;
  order?: number;
  nameLast?: string;
  nameFirst?: string;
  role?: string;
  text?: string;
  photo?: string;
  linkedin?: string;
  backgroundColor?: number;
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
