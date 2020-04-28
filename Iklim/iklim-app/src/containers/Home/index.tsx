import React, { useState, useEffect } from "react";

import { Sizes } from "src/styles/themes";
import { getForecast } from "src/service/api";
import { useAPI, usePrevious } from "src/utils/hooks";
import {
  Row,
  Box,
  Text,
  Select,
  Loading,
  TextBold,
  Container,
} from "src/components";

import { CITIES } from "./constants";
import { optionTypeDefault } from "./defaults";
import { OptionType, Weather, TableData, Forecast } from "./types";

const NUMBER_OF_DAYS = 5; // Maximum is 5 (API limitation)
const cityOptions = CITIES.map(({ id, name }) => ({ value: id, label: name }));

export default function Home() {
  const [data, fetchData, isFetchingData] = useAPI(getForecast);
  const [tableData, setTableData] = useState<TableData | null>(null);
  const [selectedCity, setSelectedCity] = useState<OptionType>(cityOptions[0]);

  const previousId = usePrevious(selectedCity.value);

  const Section = (props) => (
    <Box rowSpacing={Sizes.spacing.smaller} {...props} />
  );

  useEffect(() => {
    if (!data || selectedCity.value !== previousId)
      fetchData({ id: selectedCity.value });
    if (data) {
      // Function for grouping every row data based on date
      const getDailyForecast = (): Forecast[] => {
        const resp: Forecast[] = [];
        let [temp, tempMax, tempMin, numberOfDays] = [0, 0, 0, 0];
        const getDate = (data: Weather): string => data.dt_txt.split(" ")[0];

        for (let i = 0; i < data.list.length; i++) {
          const weatherData = data.list[i];
          temp += weatherData.main.temp;
          tempMax += weatherData.main.temp_max;
          tempMin += weatherData.main.temp_min;
          numberOfDays += 1;
          if (
            !data.list[i + 1] ||
            getDate(weatherData) !== getDate(data.list[i + 1])
          ) {
            resp.push({
              date: getDate(weatherData),
              temp: temp / numberOfDays,
              tempMax: tempMax / numberOfDays,
              tempMin: tempMin / numberOfDays,
            });
            [temp, tempMax, tempMin, numberOfDays] = [0, 0, 0, 0];
          }
          if (resp.length === NUMBER_OF_DAYS) break;
        }

        return resp;
      };

      const groupedWeatherData: Forecast[] = getDailyForecast();

      setTableData({
        avgTemp:
          groupedWeatherData.reduce((total, day) => total + day.temp, 0) /
          groupedWeatherData.length,
        avgTempDiff:
          groupedWeatherData.reduce(
            (total, day) => total + (day.tempMax - day.tempMin),
            0
          ) / groupedWeatherData.length,
        forecast: groupedWeatherData,
      });
    }
  }, [selectedCity.value, data, fetchData, previousId]);

  return (
    <Container padding="1rem 2rem" rowSpacing={Sizes.spacing.base}>
      <Loading show={isFetchingData} />
      <Section id="city-options">
        <Row>Silahkan memilih kota:</Row>
        <Select<OptionType>
          options={cityOptions}
          value={selectedCity}
          onChange={(selected) =>
            setSelectedCity((selected as OptionType) || optionTypeDefault)
          }
        />
      </Section>
      {tableData && (
        <Section id="temperature-table">
          <Text>{`Tabel forecast ${NUMBER_OF_DAYS} hari ke depan`}:</Text>
          <table>
            <thead>
              <tr>
                <th>{selectedCity.label}</th>
                <th>Rata-rata suhu per hari</th>
                <th>Rata-rata perbedaan suhu per hari</th>
              </tr>
            </thead>
            <tbody>
              {tableData?.forecast.map(({ date, temp, tempMax, tempMin }) => (
                <tr key={date}>
                  <td>{date}</td>
                  <td>{`${temp.toFixed(2)}C`}</td>
                  <td>{`${(tempMax - tempMin).toFixed(2)}C`}</td>
                </tr>
              ))}
              <tr>
                <td>
                  <TextBold>{`Rata-rata per ${NUMBER_OF_DAYS} hari`}</TextBold>
                </td>
                <td>
                  <TextBold>{`${tableData?.avgTemp.toFixed(2)}C`}</TextBold>
                </td>
                <td>
                  <TextBold>{`${tableData?.avgTempDiff.toFixed(2)}C`}</TextBold>
                </td>
              </tr>
            </tbody>
          </table>
        </Section>
      )}
    </Container>
  );
}
