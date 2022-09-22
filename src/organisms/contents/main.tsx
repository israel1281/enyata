import React, { useEffect, useContext } from "react";
import { DataContext } from "../../DataProvider";
import { getAPI } from "../../utils/fetchData";
import Cards from "../../molecules/cards";
import Checkbox from "@mui/material/Checkbox";
import Table from "../../molecules/table";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const value = useContext(DataContext);
  const [films, setFilms] = value.films;
  const [loading, setLoading] = value.loading;

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    getAPI("films")
      .then((res: any) => {
        setFilms(res.data.results);
        console.log(res.data.results);
        setLoading(false);
      })
      .catch((err: any) => {
        console.log(err.response.data.message);
      });
  }, []);

  const theadData = [
    {
      title: <Checkbox size="small" />,
    },
    {
      title: "Film Title",
    },
    {
      title: "Release Date",
    },
    {
      title: "Director",
    },
    {
      title: "Producer",
    },
    {
      title: "Episode ID",
    },
    {
      title: "Characters",
    },
  ];

  return (
    <main className="flex-1 relative overflow-y-auto focus:outline-none">
      <div className="py-6 max-w-7xl mx-auto px-2 sm:px-6 lg:px-4">
        <div className="flex flex-wrap w-full gap-1">
          <Cards />
        </div>

        <div className="flex flex-wrap-reverse gap-4 mt-8">
          <div className="w-full">
            <div className="flex justify-between">
              <h6 className="text-gray-700 ml-10 mb-16">Transactions</h6>
              {""}
            </div>
            <div className="flex flex-col">
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-4">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-4">
                  <Table
                    theadData={
                      <tr>
                        {theadData.map((item: any, index: any) => {
                          return (
                            <td
                              key={index}
                              className="px-6 py-2 whitespace-nowrap"
                            >
                              <div className="text-sm text-gray-900">
                                {item.title}
                              </div>
                            </td>
                          );
                        })}
                      </tr>
                    }
                    tbodyData={films.map((item: any, index: any) => {
                      return (
                        <tbody className="bg-white divide-y divide-gray-200">
                          <tr
                            key={index}
                            onClick={() => {
                              navigate(`/dashboard/films/${index + 1}`);
                              sessionStorage.setItem("url", "films");
                            }}
                          >
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                <Checkbox size="small" />
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                {item.title}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                {item.release_date}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                {item.director}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                {item.producer}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                {item.episode_id}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                {item.url}
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      );
                    })}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
