import React, { useEffect, useState } from "react";
import AccComponent from "./AccComponent";

const App = () => {
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState(0);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <>
      
      <div className="bg-slate-200 p-10">
      <h1 className="mb-10 text-center font-bold text-5xl text-blue-600">React Accordian </h1>
        {data.map((acc) =>
          flag === acc.id && hide === false ? (
            <AccComponent
              key={acc.id}
              acc={acc}
              flag={setFlag}
              hide={true}
              HideFunc={setHide}
            />
          ) : (
            <AccComponent
              key={acc.id}
              acc={acc}
              flag={setFlag}
              hide={false}
              HideFunc={setHide}
            />
          )
        )}
      </div>
    </>
  );
};

export default App;
