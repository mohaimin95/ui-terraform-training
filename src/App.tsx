import { useEffect, useState } from "react";
import "./App.css";
import axiosService from "./axiosService";

function App() {
  const [loading, setIsLoading] = useState(true);
  const [data, setData] = useState<string[]>([]);

  useEffect(() => {
    axiosService
      .get<string[]>("/")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      <h1>Yeahhhhh!!!</h1>
      {loading ? (
        <p>Loading data from server ...</p>
      ) : (
        <ul>
          {data.map((str) => (
            <li key={str}>{str}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
