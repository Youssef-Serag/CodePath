import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "../index.css";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const API_KEY = import.meta.env.VITE_APP_API_KEY;
const ts = import.meta.env.VITE_APP_TS;
const hash = import.meta.env.VITE_APP_HASH;

const AvengerDetail = () => {
  const [fullDetails, setFullDetails] = useState(null);
  let params = useParams();

  useEffect(() => {
    const getAvengerDetail = async () => {
      const characterResponse = await fetch(
        `https://gateway.marvel.com:443/v1/public/characters/${params.id}?apikey=${API_KEY}&ts=${ts}&hash=${hash}`
      );
      const characterJson = await characterResponse.json();

      const comicsResponse = await fetch(
        `https://gateway.marvel.com:443/v1/public/characters/${params.id}/comics?apikey=${API_KEY}&ts=${ts}&hash=${hash}`
      );
      const comicsJson = await comicsResponse.json();

      // Creating an array of custom_struct for all entries in the results
      const custom_structs = comicsJson.data.results.map((comic) => ({
        name: comic.title,
        count: comic.pageCount, // Assuming you want to use pageCount as the count
      }));

      setFullDetails({
        comics: comicsJson,
        character: characterJson,
        custom_structs: custom_structs, // Appending the array of custom structs to fullDetails
      });
    };

    getAvengerDetail().catch(console.error);
  }, [params.id]); // Ensuring we only rerun this effect if params.id changes

  const thumbnailUrl =
    fullDetails && fullDetails.character.data.results[0].thumbnail
      ? `${fullDetails.character.data.results[0].thumbnail.path}.${fullDetails.character.data.results[0].thumbnail.extension}`
      : "";
  return (
    <div>
      <h1>Avenger Name: {params.name}</h1>
      <h2>Avenger ID: {params.id}</h2>
      {thumbnailUrl && (
        <img
          className="images"
          src={thumbnailUrl}
          alt={`Thumbnail for ${params.name}`}
        />
      )}
      <h2>Page Count of {params.name} Comics</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          width={500}
          height={300}
          data={fullDetails?.custom_structs}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AvengerDetail;
