export type OptionType = { label: string; value: number };

type Main = {
  feels_like: number;
  grnd_level: number;
  humidity: number;
  pressure: number;
  sea_level: number;
  temp_kf: number;
  temp: number;
  temp_max: number;
  temp_min: number;
};

export type Weather = {
  clouds: object;
  dt: number;
  dt_txt: string;
  main: Main;
  sys: object;
  weather: object[];
  wind: object;
};

export type RawForecast = {
  city: object;
  cnt: number;
  cod: string;
  message: number;
  list: Weather[];
};

export type Forecast = {
  date: string;
  temp: Main["temp"];
  tempMax: Main["temp_max"];
  tempMin: Main["temp_min"];
};

export type TableData = {
  forecast: Forecast[];
  avgTemp: number;
  avgTempDiff: number;
};
