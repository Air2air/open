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

export interface IPracticeAreasProps {
  key: number;
  id: number;
  title: string;
  text: string;
  backgroundColor: string;
  buttonText?: string;
  buttonTo?: string;
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
  randomHeight?: boolean;
  height?: number;
  color: string;
  backgroundColor: any;
}
