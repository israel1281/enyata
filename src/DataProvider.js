import React, { createContext, useState, useEffect } from "react";
import { getAPI } from "./utils/fetchData";
export const DataContext = createContext();

export const DataProvider = (props) => {
  const [films, setFilms] = useState([]);
  const [starships, setStarships] = useState([]);
  const [people, setPeople] = useState([]);
  const [species, setSpecies] = useState([]);
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  const value = {
    films: [films, setFilms],
    starships: [starships, setStarships],
    people: [people, setPeople],
    species: [species, setSpecies],
    details: [details, setDetails],
    loading: [loading, setLoading],
  };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};
