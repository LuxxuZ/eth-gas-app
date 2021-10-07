import "./styles.css";
import Header from "../../components/Header";
import GasContainer from "../../components/GasContainer";
import { Fragment, useEffect, useState } from "react";

const URL =
  "https://data-api.defipulse.com/api/v1/egs/api/ethgasAPI.json?api-key=6cce794794066efbf7c860f6300b2b37ca8135d49ab5758a570c3ffb2bcc";

function Home() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  async function apiCall() {
    await fetch(URL)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        const dataApi = res;
        setData(dataApi);
        console.log(res);
        setLoading(false);
      });
  }

  useEffect(() => {
    apiCall();
  }, [loading]);

  return (
    <Fragment>
      <Header />
      <div className="flex flex-col md:flex-row w-full min-h-screen py-8 md:py-0 pt-28 md:pt-0 justify-around items-center">
        <GasContainer
          speed="Slow"
          value={data.safeLow}
          loading={loading}
          color="blue"
        />
        <GasContainer
          speed="Medium"
          value={data.average}
          loading={loading}
          color="green"
        />
        <GasContainer
          speed="Fast"
          value={data.fast}
          loading={loading}
          color="orange"
        />
      </div>
    </Fragment>
  );
}

export default Home;
