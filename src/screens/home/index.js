import { Fragment, useEffect, useState } from "react";
import { GiSnail } from "react-icons/gi";
import { TiMinus } from "react-icons/ti";
import { IoRocketSharp } from "react-icons/io5";

import "./styles.css";

import Header from "../../components/Header";
import GasCard from "../../components/GasCard";
import EthInfo from "../../components/EthInfo";
import { gweiCall, ethCall } from "../../utilities/fetch-calls";

const RELOAD_DELAY = 20000;

function Home() {
  const [data, setData] = useState({});
  const [ethPrice, setEthPrice] = useState(0);
  const [ethChange, setEthChange] = useState(0);
  const [firstLoading, setFirstLoading] = useState(true);
  const [fetching, setFetching] = useState(false);

  async function apiCall() {
    return await Promise.all([gweiCall(), ethCall()])
      .then((responses) => {
        const gweiData = responses[0] || {};
        const ethResponse = responses[1] || {};

        setData(gweiData.result);
        setEthPrice(ethResponse.current_price);
        setEthChange(ethResponse.price_change_percentage_24h);
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
    }, RELOAD_DELAY);
  }, [firstLoading]);

  return (
    <Fragment>
      <Header />
      <div className="flex flex-col dark:bg-cbodydark min-h-screen justify-center items-center py-0 pt-0 ">
        <div className="flex flex-col md:flex-row w-full justify-around pt-36">
          <GasCard
            speed="Safe Low"
            value={data.SafeGasPrice}
            time="30"
            ethPrice={ethPrice}
            firstLoading={firstLoading}
            fetching={fetching}
            color="blue"
            darkColor="purple"
            Icon={GiSnail}
          />
          <GasCard
            speed="Medium"
            value={data.ProposeGasPrice}
            time="5"
            ethPrice={ethPrice}
            firstLoading={firstLoading}
            fetching={fetching}
            color="green"
            darkColor="blue"
            Icon={TiMinus}
          />
          <GasCard
            speed="Fast"
            value={data.FastGasPrice}
            time="2"
            ethPrice={ethPrice}
            firstLoading={firstLoading}
            fetching={fetching}
            color="orange"
            darkColor="green"
            Icon={IoRocketSharp}
          />
        </div>
        <EthInfo
          ethPrice={ethPrice}
          ethChange={ethChange}
          firstLoading={firstLoading}
        />
        <div className="pt-24 flex flex-row">
          <p className="text-lg dark:text-ctwhite">Data provided by</p>
          <a
            href="https://www.coingecko.com/"
            target="_blank"
            rel="noreferrer"
            className="text-lg text-csgreen ml-1"
          >
            CoinGecko API
          </a>
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
