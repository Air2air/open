export interface SeriesDataPoint {
    date: string;
    value: number;
  }
  
  export interface Series {
    series_id: string;
    name: string;
    units: string;
    f: string;
    description: string;
    start: string;
    end: string;
    updated: string;
    data: SeriesDataPoint[];
  }