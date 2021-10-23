import "./styles.css";
import Header from "../../components/Header";
import GasCard from "../../components/GasCard";
import { Fragment, useEffect, useState } from "react";
import { GiSnail } from "react-icons/gi";
import { IoRocketSharp } from "react-icons/io5";
import { TiMinus } from "react-icons/ti";

const URL =
  "https://data-api.defipulse.com/api/v1/egs/api/ethgasAPI.json?api-key=6cce794794066efbf7c860f6300b2b37ca8135d49ab5758a570c3ffb2bcc";

function Home() {
  const [data, setData] = useState({});
  const [firstLoading, setFirstLoading] = useState(true);
  const [fetching, setFetching] = useState(false);

  async function apiCall() {
    return await fetch(URL)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function loadInitialData() {
    await apiCall().then(() => {
      setFirstLoading(false);
    });
  }

  async function reloadData() {
    await apiCall().then(() => {
      setFetching(false);
    });
  }

  useEffect(() => {
    if (firstLoading) {
      return loadInitialData();
    }
    setInterval(() => {
      setFetching(true);
      reloadData();
    }, 20000);
  }, [firstLoading]);

  return (
    <Fragment>
      <Header />
      <div className="dark:bg-cbodydark flex flex-col md:flex-row w-full min-h-screen py-8 md:py-0 pt-28 md:pt-0 justify-around items-center">
        <GasCard
          speed="Safe Slow"
          value={data.safeLow}
          time="30"
          money="0.16"
          firstLoading={firstLoading}
          fetching={fetching}
          color="blue"
          darkColor="purple"
          Icon={GiSnail}
        />
        <GasCard
          speed="Medium"
          value={data.average}
          time="5"
          money="0.16"
          firstLoading={firstLoading}
          fetching={fetching}
          color="green"
          darkColor="blue"
          Icon={TiMinus}
        />
        <GasCard
          speed="Fast"
          value={data.fast}
          time="2"
          money="0.33"
          firstLoading={firstLoading}
          fetching={fetching}
          color="orange"
          darkColor="green"
          Icon={IoRocketSharp}
        />
      </div>
    </Fragment>
  );
}

export default Home;
