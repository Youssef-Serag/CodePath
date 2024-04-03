import React, { Component, useEffect, useState, useMemo } from "react";
const API_KEY = import.meta.env.VITE_APP_API_KEY;
import "../App.css";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Label,
} from "recharts";
import {
  Checkbox,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";

const CoinChart = ({ symbol, market }) => {
  const [histData, setHistData] = useState(null);
  const [displayDataOption, setDisplayDataOption] = useState("open");
  const [checkedState, setCheckedState] = useState({
    open: true,
    high: false,
    low: false,
  });

  const handleCheckboxChange = (event) => {
    setCheckedState({
      ...checkedState,
      [event.target.name]: event.target.checked,
    });
  };

  useEffect(() => {
    const getCoinHist = async () => {
      const response = await fetch(
        `https://min-api.cryptocompare.com/data/v2/histoday?fsym=${symbol}&tsym=USD&e=${market}&limit=30&api_key=` +
          API_KEY
      );

      const json = await response.json();
      setHistData(json.Data.Data);
    };
    getCoinHist().catch(console.error);
  }, [market, symbol]);

  const cleanData = (data) => {
    let filteredData = [];
    for (const item of data) {
      let entry = {
        time: new Date(item.time * 1000).toLocaleDateString("en-US"),
        open: item.open,
        high: item.high,
        low: item.low,
      };
      filteredData.push(entry);
    }
    return filteredData.reverse();
  };

  const cleanedData = useMemo(() => {
    if (histData) {
      return cleanData(histData);
    }
    return [];
  }, [histData]);

  const handleRadioChange = (event) => {
    setDisplayDataOption(event.target.value);
  };

  return (
    <div>
      {histData ? (
        <div>
          <FormControl component="fieldset" sx={{ color: "white" }}>
            <FormLabel component="legend" sx={{ color: "white" }}>
              Display Data
            </FormLabel>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkedState.open}
                  onChange={handleCheckboxChange}
                  name="open"
                  sx={{ color: "white" }}
                />
              }
              label="Open Price"
              sx={{ color: "white" }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkedState.high}
                  onChange={handleCheckboxChange}
                  name="high"
                  sx={{ color: "white" }}
                />
              }
              label="High Price"
              sx={{ color: "white" }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkedState.low}
                  onChange={handleCheckboxChange}
                  name="low"
                  sx={{ color: "white" }}
                />
              }
              label="Low Price"
              sx={{ color: "white" }}
            />
          </FormControl>

          <br></br>
          <h2>30-Day Price Data for {symbol}</h2>
          <LineChart
            width={1300}
            height={400}
            data={cleanedData}
            margin={{
              top: 10,
              right: 30,
              left: 20,
              bottom: 30,
            }}
          >
            {checkedState.open && (
              <Line
                type="monotone"
                dataKey="open"
                stroke="#8884d8"
                // Your Line component props
              />
            )}
            {checkedState.high && (
              <Line
                type="monotone"
                dataKey="high"
                stroke="#82ca9d"
                // Your Line component props
              />
            )}
            {checkedState.low && (
              <Line
                type="monotone"
                dataKey="low"
                stroke="#ff7300"
                // Your Line component props
              />
            )}
            <CartesianGrid strokeDasharray="5 5" />
            <XAxis dataKey="time" interval={2} angle={20} dx={20}>
              <Label value="Date and Time" offset={0} position="insideBottom" />
            </XAxis>
            <YAxis
              label={{
                value: "Price",
                angle: -90,
                position: "insideLeft",
                textAnchor: "middle",
              }}
            />
            <Tooltip />
          </LineChart>
        </div>
      ) : null}
    </div>
  );
};

export default CoinChart;
