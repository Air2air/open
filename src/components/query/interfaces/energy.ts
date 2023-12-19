export interface SeriesDataPoint {
    period: number;
    stateId: string;
    stateDescription: string;
    sectorId: string;
    sectorName: string;
    sales: number;
    salesUnits: string;
  }

  export interface DataPoint {
    date: number;
    value: number;
    stateId: string;
    stateDescription: string;
    sectorId: string;
    sectorName: string;
    salesUnits: string;
  }
  
  export interface Series {
    response: {
      total: number;
      dateFormat: string;
      frequency: string;
      data: SeriesDataPoint[];
      description: string;
      id: string;
    };
    request: {
      command: string;
      params: {
        frequency: string;
        data: string[];
        facets: {
          sectorId: string[];
          stateId: string[];
        };
        start: null | string;
        end: null | string;
        sort: {
          column: string;
          direction: string;
        }[];
        offset: number;
        length: number;
        apiKey: string;
      };
      route: string;
    };
    apiVersion: string;
    ExcelAddInVersion: string;
  }