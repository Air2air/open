export interface EIAApiResponse {
    response: {
      id: string;
      name: string;
      description: string;
      routes: Route[];
    };
    request: {
      command: string;
      params: {
        api_key: string;
        num: number;
      };
    };
    apiVersion: string;
    ExcelAddInVersion: string;
  }
  
  export interface Route {
    id: string;
    name: string;
    description: string;
  }
  
  export interface EIAQueryParams {
    api_key: string;
    num?: number;
  }
  
  export interface EIASeries {
    series_id: string;
    name: string;
    units: string;
    f: string; // Frequency
    unitsshort: string; // Abbreviated units
    description: string;
    start: string; // Start date
    end: string; // End date
    updated: string; // Last updated date
    data: EIADataPoint[]; // Array of data points
  }
  
  export interface EIACategory {
    category_id: string;
    parent_category_id?: string;
    name: string;
    notes?: string;
    childcategories?: EIACategory[];
    childseries?: EIASeries[];
  }
  
  export interface EIADataPoint {
    period: string;
    data: number; // Generic data field
    geography?: string;
    sector?: string;
    product?: string;
    area?: string;
    region?: string;
    market?: string;
  }
  
  export interface EIAError {
    error: string;
    status?: number; // HTTP status code
    details?: string; // Additional error details
  }
  
  export interface EnergyDataPoint extends EIADataPoint {
    geography?: string;
    sector?: string;
    product?: string;
    area?: string;
    region?: string;
    market?: string;
  }
  
  export interface EIAQueryParams {
    facet?: string;
    api_key: string;
    out?: string; // Output format, e.g., 'json'
    num?: number; // Number of data points to return
    start?: string; // Start date
    end?: string; // End date
    frequency?: string; // Frequency
  }
  
  export interface EIAUpdate {
    updated: string; // Last updated date
    next_update?: string; // Expected date of the next update
  }
  
  export interface EIAGeolocation {
    latitude: number;
    longitude: number;
    region: string;
  }
  
  export interface EIAPagination {
    current_page: number;
    total_pages: number;
    page_size: number;
    start_row: number;
    end_row: number;
    length?: number; // Number of rows per page
    offset?: number; // Starting point for data retrieval
  }
  
  export interface EIAStatistics {
    count: number;
    total: number;
    min: number;
    max: number;
    average: number;
    median: number;
  }
  
  export interface EIAUpdateQuery {
    category_id?: string;
    deep?: boolean;
    rows?: number;
    // Include properties for update query response
  }