import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../../DataProvider";
import { getAPI } from "../../utils/fetchData";
import Logo from "../../atoms/logo";

export default function Details() {
  const { id, name } = useParams();
  const value = useContext(DataContext);
  const [details, setDetails] = value.details;
  const [loading, setLoading] = value.loading;
  const url = sessionStorage.getItem("url");

  useEffect(() => {
    setLoading(true);
    getAPI(`${url}/${id}`)
      .then((res: any) => {
        setDetails(res.data);
        console.log(res.data.results);
        setLoading(false);
      })
      .catch((err: any) => {
        console.log(err.response.data.message);
      });
  }, []);

  return (
    <main className="flex-1 relative overflow-y-auto focus:outline-none">
      <div className="py-6 max-w-7xl mx-auto px-2 sm:px-6 lg:px-4">
        <div className="flex flex-wrap w-full gap-4">
          <img
            className="h-60 w-60 rounded"
            src="https://joeschmoe.io/api/v1/random"
            alt=""
          />
          {name === "films" ? (
            <div className="flex-col">
              <h4 className="text-[48px] font-[700]">{details.title}</h4>
              <h5 className="text-[16px] font-[500] mt-10 text-gray-500">
                Director: {details.director}
              </h5>
              <h5 className="text-[16px] font-[500] text-gray-500">
                Producer: {details.producer}
              </h5>
              <h5 className="text-[16px] font-[500] text-gray-500">
                Release Date: {details.release_date}
              </h5>
            </div>
          ) : name === "people" ? (
            <div className="flex-col">
              <h4 className="text-[48px] font-[700]">{details.name}</h4>
              <h5 className="text-[16px] font-[500] mt-10 text-gray-500">
                Gender: {details.gender}
              </h5>
              <h5 className="text-[16px] font-[500] text-gray-500">
                Year of birth: {details.birth_year}
              </h5>
              <h5 className="text-[16px] font-[500] text-gray-500">
                Skin color: {details.skin_color}
              </h5>
              <h5 className="text-[16px] font-[500] text-gray-500">
                Height: {details.height}
              </h5>
            </div>
          ) : name === "species" ? (
            <div className="flex-col">
              <h4 className="text-[48px] font-[700]">{details.name}</h4>
              <h5 className="text-[16px] font-[500] mt-10 text-gray-500">
                Designation: {details.designation}
              </h5>
              <h5 className="text-[16px] font-[500] text-gray-500">
                Language: {details.language}
              </h5>
              <h5 className="text-[16px] font-[500] text-gray-500">
                Eye colors: {details.eye_colors}
              </h5>
              <h5 className="text-[16px] font-[500] text-gray-500">
                Average life span: {details.height}
              </h5>
            </div>
          ) : name === "starships" ? (
            <div className="flex-col">
              <h4 className="text-[48px] font-[700]">{details.name}</h4>
              <h5 className="text-[16px] font-[500] mt-10 text-gray-500">
                Model: {details.model}
              </h5>
              <h5 className="text-[16px] font-[500] text-gray-500">
                Passengers: {details.passengers}
              </h5>
              <h5 className="text-[16px] font-[500] text-gray-500">
                Pilots: {details.pilots}
              </h5>
            </div>
          ) : null}
        </div>
      </div>
    </main>
  );
}
