import { Fragment, useEffect, useState } from "react";
import { GiSnail } from "react-icons/gi";
import { TiMinus } from "react-icons/ti";
import { IoRocketSharp } from "react-icons/io5";

import {
  AppBody,
  CardsDiv,
  LinksDiv,
  LinksRedirection,
  LinksText,
  MainDiv,
} from "./styles";
import Header from "../../components/Header";
import GasCard from "../../components/GasCard";
import EthInfo from "../../components/EthInfo";
import { gweiCall, ethCall } from "../../utilities/fetch-calls";
import ThemeWrapper from "../../ThemeWrapper";

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
      <MainDiv>
        <CardsDiv>
          <GasCard
            speed="Safe Low"
            value={data.SafeGasPrice}
            time="30"
            ethPrice={ethPrice}
            firstLoading={firstLoading}
            fetching={fetching}
            color="#3F6CE1"
            softColor="#DAE3FA"
            Icon={GiSnail}
          />
          <GasCard
            speed="Medium"
            value={data.ProposeGasPrice}
            time="5"
            ethPrice={ethPrice}
            firstLoading={firstLoading}
            fetching={fetching}
            color="#219F2D"
            softColor="#AEF2B4"
            Icon={TiMinus}
          />
          <GasCard
            speed="Fast"
            value={data.FastGasPrice}
            time="2"
            ethPrice={ethPrice}
            firstLoading={firstLoading}
            fetching={fetching}
            color="#FD9255"
            softColor="#FAD9C7"
            Icon={IoRocketSharp}
          />
        </CardsDiv>
        <EthInfo
          ethPrice={ethPrice}
          ethChange={ethChange}
          firstLoading={firstLoading}
        />
        <LinksDiv>
          <LinksText>Data provided by</LinksText>
          <LinksRedirection
            href="https://www.coingecko.com/"
            target="_blank"
            rel="noreferrer"
          >
            CoinGecko API
          </LinksRedirection>
        </LinksDiv>
      </MainDiv>
    </Fragment>
  );
}

export default Home;
