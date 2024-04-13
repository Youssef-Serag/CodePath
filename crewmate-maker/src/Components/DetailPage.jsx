import React, { useState, useEffect } from "react";
import { supabase } from "../client";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  let { id } = useParams();
  const [crewmate, setCrewmate] = useState({
    name: "",
    age: "",
    fav_color: "",
  });

  useEffect(() => {
    const fetchCrewmate = async () => {
      const { data, error } = await supabase
        .from("Crewmates")
        .select()
        .eq("id", id)
        .single(); // This ensures you get a single object instead of an array

      if (error) {
        console.error("Error fetching data:", error);
        return;
      }

      if (data) {
        setCrewmate(data); // Assuming data is an object directly
      } else {
        console.log("No data found");
      }
    };

    fetchCrewmate();
  }, [id]);

  return (
    <div>
      {crewmate ? (
        <>
          <h1>Name: {crewmate.name}</h1>
          <h2>Age: {crewmate.age}</h2>
          <h3>Favorite Color: {crewmate.fav_color}</h3>
        </>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};

export default DetailPage;
