export interface IChart {
  chart: {
    id?: number;
    label: string;
    height?: number;
    randomHeight?: boolean;
    backgroundColor?: number | string;
  }[];
}
