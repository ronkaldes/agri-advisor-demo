
export interface WeatherDataPoint {
  date: string;
  temperature?: number;
  rainfall?: number;
  humidity?: number;
  [key: string]: string | number | undefined;
}
