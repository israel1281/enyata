import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./screens/Login";
import Dashboard from "./screens/dashboard";
import Main from "./organisms/contents/main";
import People from "./organisms/contents/People";
import Species from "./organisms/contents/Species";
import Starships from "./organisms/contents/Starships";
import Details from "./organisms/contents/details";
import { DataProvider } from "./DataProvider";
import "./App.css";

function App() {
  return (
    <DataProvider>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />}>
              <Route index element={<Main />} />
              <Route path="people" element={<People />} />
              <Route path="species" element={<Species />} />
              <Route path="starships" element={<Starships />} />
              <Route path=":name/:id" element={<Details />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </DataProvider>
  );
}

export default App;
