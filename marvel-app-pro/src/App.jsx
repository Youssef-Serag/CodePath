import { useState, useEffect } from "react";
import Card from "/src/Components/Card.jsx";
import Entry from "./Components/Entry";
import "./App.css";

const API_KEY = import.meta.env.VITE_APP_API_KEY;
const ts = import.meta.env.VITE_APP_TS;
const hash = import.meta.env.VITE_APP_HASH;

function App() {
  const [list, setList] = useState(null);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [minComics, setMinComics] = useState("");
  const [maxComics, setMaxComics] = useState(0);
  const [maxSeries, setMaxSeries] = useState(0);
  const [searchInitiated, setSearchInitiated] = useState(false);

  const searchItems = (e) => {
    e.preventDefault(); // Prevent the form from submitting in a traditional way

    // Ensure we're working with an initialized list.data.results
    if (list && list.data && list.data.results) {
      const filteredData = list.data.results.filter((entry) => {
        const matchesName =
          searchInput === "" ||
          entry.name.toLowerCase().includes(searchInput.toLowerCase());
        const hasMinComics =
          minComics === "" || entry.comics.available >= parseInt(minComics, 10);

        // The entry is included if it matches the name criteria OR the comics criteria
        // When one of the criteria is empty, it effectively does not filter on that condition
        return matchesName && hasMinComics;
      });

      setFilteredResults(filteredData);
      setSearchInitiated(true);
    } else {
      // Fallback to an empty array if list.data.results is not initialized
      setFilteredResults([]);
    }
  };

  useEffect(() => {
    const fetchAllHeroData = async () => {
      try {
        const response = await fetch(
          `https://gateway.marvel.com:443/v1/public/characters?apikey=${API_KEY}&ts=${ts}&hash=${hash}`
        );
        const json = await response.json();
        setList(json);

        // Assuming that the 'results' array is directly under 'data' in the JSON response
        const characters = json.data.results;

        // Initialize max values
        let maxComicsCount = 0;
        let maxSeriesCount = 0;

        // Loop through characters to find max values
        characters.forEach((character) => {
          if (character.comics.available > maxComicsCount) {
            maxComicsCount = character.comics.available;
          }

          if (character.series.available > maxSeriesCount) {
            maxSeriesCount = character.series.available;
          }
        });

        // Set the max values
        setMaxComics(maxComicsCount);
        setMaxSeries(maxSeriesCount);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchAllHeroData();
  }, []);

  return (
    <div>
      <h1>Avengers Site</h1>
      <div className="horizontal-stack">
        <Card
          text="Total Number of Avengers"
          number={list?.data?.total || "Loading..."}
        />
        <Card text="Max Comics Available" number={maxComics} />
        <Card text="Max Series Available" number={maxSeries} />
      </div>
      <div className="form-container">
        <form onSubmit={searchItems}>
          <input
            className="input-field"
            type="text"
            placeholder="Search by name..."
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
              setSearchInitiated(false);
            }}
          />
          <input
            className="input-field"
            type="number"
            placeholder="Has at least this many comics"
            value={minComics}
            onChange={(e) => {
              setMinComics(e.target.value);
              setSearchInitiated(false);
            }}
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </div>
      <div className="entry header">
        <div className="column name">Name</div>
        <div className="column comics">Comics Available</div>
        <div className="column series">Series Available</div>
        <div className="column thumbnail">Thumbnail</div>
      </div>
      <ul>
        {searchInitiated
          ? filteredResults.map((avenger) => (
              <Entry
                key={avenger.id} // Use avenger.id as a unique key for each item
                name={avenger.name} // Use the name property from the avenger object
                thumbnail={avenger.thumbnail.path} // Create the full image URL
                imageExtension="jpg" // Hard-coded extension
                comics={avenger.comics.available} // Pass the comics object
                series={avenger.series.available} // Pass the series object
              />
            ))
          : list &&
            list.data.results.map((avenger) => (
              <Entry
                key={avenger.id} // Use avenger.id as a unique key for each item
                name={avenger.name} // Use the name property from the avenger object
                thumbnail={avenger.thumbnail.path} // Create the full image URL
                imageExtension="jpg" // Hard-coded extension
                comics={avenger.comics.available} // Pass the comics object
                series={avenger.series.available} // Pass the series object
              />
            ))}
      </ul>
    </div>
  );
}

export default App;
