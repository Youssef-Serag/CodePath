import React, { Component, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const API_KEY = import.meta.env.VITE_APP_API_KEY;
import CoinChart from "./CoinChart";
import "../App.css";
import { Modal, Box, Button } from "@mui/material";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const CoinDetail = () => {
  let params = useParams();
  const [fullDetails, setFullDetails] = useState(null);

  const [open, setOpen] = useState(false); // State for controlling modal visibility

  const handleOpen = () => setOpen(true); // Function to open the modal
  const handleClose = () => setOpen(false); // Function to close the modal

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "auto", // Adjust width to fit the content (your chart) + padding
    maxWidth: "90vw", // Prevent the box from being too wide on larger screens
    height: "auto", // Adjust height to fit the content (your chart) + padding
    maxHeight: "90vh", // Prevent the box from being too tall on larger screens
    bgcolor: "black", // Dark mode background color
    color: "white", // Ensures text inside the box is white
    border: "2px solid white", // White outline
    boxShadow: 24,
    p: 4, // Padding around the content inside the Box
    overflow: "auto", // In case the content overflows, add a scrollbar
  };

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
                      id="website-link"
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
          <Button variant="contained" onClick={handleOpen} sx={{ mt: 5 }}>
            Show Chart
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                  position: "absolute",
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
                }}
              >
                <CloseIcon />
              </IconButton>
              <CoinChart
                symbol={params.symbol}
                market={fullDetails.numbers[params.symbol].USD.MARKET}
              />
            </Box>
          </Modal>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CoinDetail;
