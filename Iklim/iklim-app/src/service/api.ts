import axios from "axios";

import config from "src/config";
import { RawForecast } from "src/containers/Home/types";

const instance = axios.create({
  baseURL: config.API_URL,
  responseType: "json",
});
instance.defaults.params = {};
instance.defaults.params["appid"] = config.APP_ID;
instance.defaults.params["units"] = "metric";

const apiGet = (url, payload) => {
  const params = { ...payload, ...instance.defaults.params };
  return instance.get(url, { params });
};

export async function getForecast({ id }): Promise<{ data: RawForecast }> {
  return apiGet("/forecast/", { id });
}
