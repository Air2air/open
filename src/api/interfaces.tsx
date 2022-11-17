export interface ICalloutProps {
  id?: number;
  data?: any;
  order?: number;
  title?: any;
  text: string;
  side?: string;
  backgroundColor: number;
  buttonText?: string;
  buttonTo?: string;
}

export interface ICalloutBulletProps {
  id: number;
  title?: any;
  text: string;
  side?: string;
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
  backgroundColor: number;
  buttonText: string;
  buttonTo: string;
}

export interface IGraphColumnProps {
  id?: number;
  label?: string;
  value?: string;
  size?: number;
  outerHeight?: number;
}

export interface ITimeLineProps {
  id?: number;
  data?: any;
  order?: number;
  title?: string;
  text: string;
  side?: string;
  backgroundColor?: number;
  buttonText?: string;
  buttonTo?: string;
}
