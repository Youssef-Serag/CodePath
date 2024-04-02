import React, { Component, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const API_KEY = import.meta.env.VITE_APP_API_KEY;
import CoinChart from "./CoinChart";
import "../App.css";

const CoinDetail = () => {
  let params = useParams();
  const [fullDetails, setFullDetails] = useState(null);
  useEffect(() => {
    const getCoinDetail = async () => {
      const details = await fetch(
        `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${params.symbol}&tsyms=USD&api_key=` +
          API_KEY
      );
      const description = await fetch(
        `https://min-api.cryptocompare.com/data/all/coinlist?fsym=${params.symbol}&api_key=` +
          API_KEY
      );
      // Adding the new API call here
      const priceDetails = await fetch(
        `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${params.symbol}&tsyms=USD&api-key=` +
          API_KEY
      );

      const detailsJson = await details.json();
      const descripJson = await description.json();
      const priceDetailsJson = await priceDetails.json(); // parsing the new API call result

      setFullDetails({
        numbers: detailsJson.DISPLAY,
        textData: descripJson.Data,
        priceDetails: priceDetailsJson, // Storing the new data under 'priceDetails'
      });
    };

    getCoinDetail().catch(console.error);
  }, [params.symbol]); // Note: API key and other sensitive data should ideally not be hardcoded like this for production apps.

  return (
    <div>
      {fullDetails && fullDetails.textData[params.symbol] ? (
        <>
          <h1>{fullDetails.textData[params.symbol].FullName}</h1>
          <img
            className="images"
            src={`https://www.cryptocompare.com${
              fullDetails.numbers[params.symbol].USD.IMAGEURL
            }`}
            alt={`Small icon for ${params.symbol} crypto coin`}
          />
          <div>{fullDetails.textData[params.symbol].Description}</div>
          <br></br>
          <div>
            This coin was built with the algorithm{" "}
            {fullDetails.textData[params.symbol].Algorithm}
          </div>
          <div className="center-content">
            <table>
              <tbody>
                <tr>
                  <th>Launch Date </th>
                  <td>{fullDetails.textData[params.symbol].AssetLaunchDate}</td>
                </tr>
                <tr>
                  <th>Website </th>
                  <td>
                    <a
                      href={fullDetails.textData[params.symbol].AssetWebsiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {fullDetails.textData[params.symbol].AssetWebsiteUrl}
                    </a>
                  </td>
                </tr>
                <tr>
                  <th>Whitepaper </th>
                  <td>
                    <a
                      href={
                        fullDetails.textData[params.symbol].AssetWhitepaperUrl
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {fullDetails.textData[params.symbol].AssetWhitepaperUrl}
                    </a>
                  </td>
                </tr>
                <tr>
                  <th>Monetary Symbol </th>
                  <td>
                    {
                      fullDetails.priceDetails.DISPLAY[params.symbol].USD
                        .FROMSYMBOL
                    }
                  </td>
                </tr>
                <tr>
                  <th>Market </th>
                  <td>
                    {fullDetails.priceDetails.DISPLAY[params.symbol].USD.MARKET}
                  </td>
                </tr>
                <tr>
                  <th>Last Transaction </th>
                  <td>
                    {
                      fullDetails.priceDetails.DISPLAY[params.symbol].USD
                        .LASTUPDATE
                    }
                  </td>
                </tr>
                <tr>
                  <th>Last Transaction Value</th>
                  <td>
                    {
                      fullDetails.priceDetails.DISPLAY[params.symbol]
                        .LASTVOLUMETO
                    }{" "}
                    {fullDetails.priceDetails.DISPLAY[params.symbol].TOSYMBOL}
                  </td>
                </tr>
                <tr>
                  <th>Volume </th>
                  <td>
                    {
                      fullDetails.priceDetails.DISPLAY[params.symbol].USD
                        .VOLUME24HOURTO
                    }
                  </td>
                </tr>
                <tr>
                  <th>Today's Open Price </th>
                  <td>
                    {
                      fullDetails.priceDetails.DISPLAY[params.symbol].USD
                        .OPENDAY
                    }
                  </td>
                </tr>
                <tr>
                  <th>Highest Price during the Day </th>
                  <td>
                    {
                      fullDetails.priceDetails.DISPLAY[params.symbol].USD
                        .HIGHDAY
                    }
                  </td>
                </tr>
                <tr>
                  <th>Lowest Price during the Day </th>
                  <td>
                    {fullDetails.priceDetails.DISPLAY[params.symbol].USD.LOWDAY}
                  </td>
                </tr>
                <tr>
                  <th>Change from Previous Day </th>
                  <td>
                    {
                      fullDetails.priceDetails.DISPLAY[params.symbol].USD
                        .CHANGE24HOUR
                    }{" "}
                    (
                    {
                      fullDetails.priceDetails.DISPLAY[params.symbol].USD
                        .CHANGEPCT24HOUR
                    }
                    %)
                  </td>
                </tr>
                <tr>
                  <th>Market Cap </th>
                  <td>
                    {fullDetails.priceDetails.DISPLAY[params.symbol].USD.MKTCAP}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <CoinChart
            symbol={params.symbol}
            market={fullDetails.numbers[params.symbol].USD.MARKET}
          />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CoinDetail;
