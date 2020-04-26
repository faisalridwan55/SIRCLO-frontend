import axios from "axios";

import config from "src/config";

const instance = axios.create({
  baseURL: config.API_URL,
  responseType: "json",
});
instance.defaults.params = {};
instance.defaults.params["appid"] = config.APP_ID;
// instance.defaults.params["cnt"] = 5;

const apiGet = (url, payload) => {
  const params = { ...payload, ...instance.defaults.params };
  console.log("params", params);

  instance.get(url, { params });
};

export async function getForecast(payload = { id: 1642911 }) {
  return apiGet("/forecast/", payload);
}
