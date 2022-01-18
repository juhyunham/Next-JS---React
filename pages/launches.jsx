import { useState, useEffect } from "react";

export default function Launches() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchLaunches = async () => {
      const res = await fetch("https://api.spacexdata.com/v3/launches");
      const data = await res.json();

      setData(data);
    };

    fetchLaunches();
  }, []);

  if (data === null) {
    return null;
  }

  return (
    <ol>
      {data.map((item, index) => {
        return <li key={index}>{item.mission_name}</li>;
      })}
    </ol>
  );
}
