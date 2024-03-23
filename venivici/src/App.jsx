import { useState } from "react";
import "./App.css";

const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;
function App() {
  const [currentObject, setCurrentObject] = useState(null);
  const [banList, setBanList] = useState({
    weight: [],
    origin: [],
    lifespan: [],
  });

  const makeQuery = () => {
    let query =
      "https://api.thecatapi.com/v1/images/search?size=small&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1";
    callAPI(query).catch(console.error);
  };

  const callAPI = async (query) => {
    const response = await fetch(query, {
      method: "GET",
      headers: {
        "x-api-key": ACCESS_KEY,
      },
    });
    const data = await response.json();
    if (data && data.length > 0) {
      const cat = data[0].breeds[0];
      // Check if the cat's attributes match any in the banList
      if (
        banList.weight.includes(cat.weight.imperial) ||
        banList.origin.includes(cat.origin) ||
        banList.lifespan.includes(cat.life_span)
      ) {
        // If any attribute is in the banList, make another API call
        console.log("Match found in banList, fetching another cat...");
        callAPI(query);
      } else {
        // If no attributes are in the banList, update the state with this cat
        const catDetails = {
          name: cat.name,
          weight: cat.weight.imperial,
          origin: cat.origin,
          lifespan: cat.life_span,
          img_path: data[0].url,
        };
        setCurrentObject(catDetails);
      }
    }
  };

  const handleClick = (attributeType, attributeValue) => {
    setBanList((prevBanList) => {
      // Check if the attributeValue already exists in the target array
      if (prevBanList[attributeType].includes(attributeValue)) {
        // If it does, return the previous state without adding the value
        return prevBanList;
      } else {
        // If it doesn't, add the value to the target array
        return {
          ...prevBanList,
          [attributeType]: [...prevBanList[attributeType], attributeValue],
        };
      }
    });
  };

  const removeFromBanList = (attributeType, attributeValue) => {
    setBanList((prevBanList) => {
      // Filter out the item from the specified attribute type array
      const filteredItems = prevBanList[attributeType].filter(
        (item) => item !== attributeValue
      );

      return {
        ...prevBanList,
        [attributeType]: filteredItems,
      };
    });
  };

  return (
    <div>
      <h1>Random Cat Generator</h1>
      <h2>Press on the button to generate a random Cat</h2>
      <p>😺😸😹😻😼😽🙀😿😾</p>
      {currentObject ? (
        <>
          <h3>{currentObject.name}</h3>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "20px",
            }}
          >
            <button
              style={{ backgroundColor: "#FFA500", padding: "10px" }}
              onClick={() => handleClick("weight", currentObject.weight)}
            >
              Weight: {currentObject.weight} lbs
            </button>
            <button
              style={{ backgroundColor: "#FFA500", padding: "10px" }}
              onClick={() => handleClick("origin", currentObject.origin)}
            >
              Origin: {currentObject.origin}
            </button>
            <button
              style={{ backgroundColor: "#FFA500", padding: "10px" }}
              onClick={() => handleClick("lifespan", currentObject.lifespan)}
            >
              Lifespan: {currentObject.lifespan} years
            </button>
          </div>
          <div>
            <img
              src={currentObject.img_path}
              alt={currentObject.name}
              style={{ width: "400px", height: "400px" }}
            />
          </div>
        </>
      ) : (
        <div>Press the button to generate a cat!</div>
      )}
      <button onClick={makeQuery}>🔀 Discover!</button>
      <div className="banListContainer">
        {Object.entries(banList).flatMap(([key, values]) =>
          values.map((value, index) => (
            <button
              key={`${key}-${index}`}
              className="banListItem"
              onClick={() => removeFromBanList(key, value)} // Use the removal function here
            >
              {key}: {value}
            </button>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
