import React, { useEffect, useContext } from "react";
import { DataContext } from "../../DataProvider";
import { getAPI } from "../../utils/fetchData";
import Checkbox from "@mui/material/Checkbox";
import Moment from "react-moment";
import Table from "../../molecules/table";
import { useNavigate } from "react-router-dom";

export default function People() {
  const value = useContext(DataContext);
  const [people, setPeople] = value.films;
  const [loading, setLoading] = value.loading;

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    getAPI("people")
      .then((res: any) => {
        setPeople(res.data.results);
        console.log(res.data.results);
        setLoading(false);
      })
      .catch((err: any) => {
        console.log(err.response.data.message);
      });
  }, []);
  const theadData = [
    {
      title: <Checkbox />,
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
      title: "Character",
    },
  ];
  return (
    <main className="flex-1 relative overflow-y-auto focus:outline-none">
      <div className="py-6 max-w-7xl mx-auto px-2 sm:px-6 lg:px-4">
        <div className="flex flex-wrap-reverse gap-4 mt-8">
          <div className="w-full">
            <div className="flex justify-between">
              <h6 className="text-gray-700 ml-10">Transactions</h6>
              {""}
            </div>
            <div className="flex flex-col">
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-4">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
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
                    tbodyData={people.map((item: any, index: any) => {
                      return (
                        <tbody className="bg-white divide-y divide-gray-200">
                          <tr
                            key={index}
                            onClick={() => {
                              navigate(`/dashboard/people/${index + 1}`);
                              sessionStorage.setItem("url", "people");
                            }}
                          >
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                <Checkbox size="small" />
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                {item.name}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                {item.birth_year}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                {item.gender}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                {item.hair_color}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                {item.height}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                <Moment format="DD/MM/YYYY">
                                  {item.created}
                                </Moment>
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
