import { getGweiUsd } from "../../utilities/gwei-usd";
import { gweiUsdFmt } from "../../utilities/eth-info";

export default function GasCard({
  speed,
  value,
  color,
  firstLoading,
  fetching,
  softColor,
  time,
  ethPrice,
  Icon,
}) {
  const gweiValue = parseFloat(value);
  const gweiUsd = getGweiUsd({ gWeiCount: gweiValue, ethPrice });

  if (firstLoading) {
    return (
      <div className="bg-tcwhite dark:bg-chgdark flex md:flex-col flex-row w-96 h-56 rounded-lg shadow-csw dark:shadow-none border border-cbwhite dark:border-transparent pt-8 pl-8">
        <div className="flex flex-row animate-pulse">
          <div className="flex flex-col">
            <div className="bg-gray-200 dark:bg-loadingdark h-6 w-16 rounded-full"></div>
            <div className="flex flex-row pt-4 items-end">
              <div className="w-16 h-14 bg-gray-200 dark:bg-loadingdark rounded-2xl"></div>
              <div className="w-20 h-7 bg-gray-200 dark:bg-loadingdark rounded-full ml-1"></div>
            </div>
          </div>
          <div className="flex w-full justify-end pr-8">
            <div
              className={`rounded-full w-16 h-16 bg-gray-200 dark:bg-loadingdark flex items-center justify-center `}
            ></div>
          </div>
        </div>
        <div className="pt-4 animate-pulse">
          <div className="w-16 h-6 bg-gray-200 dark:bg-loadingdark rounded-full"></div>
          <div className="w-44 h-6 bg-gray-200 dark:bg-loadingdark rounded-full mt-1"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-tcwhite dark:bg-chgdark flex md:flex-col flex-row w-96 h-56 rounded-lg shadow-csw dark:shadow-none border border-cbwhite dark:border-opacity-25 dark:border-gray-900 pt-8 pl-8">
      <div className="flex flex-row">
        <div className="flex flex-col">
          <h1 className="text-xl text-ctblack dark:text-ctwhite select-none">
            {speed}
          </h1>
          <div className="flex flex-row pt-4 items-end">
            <p className={`text-5xl font-bold ${color}`}>{gweiValue}</p>
            <p className="pl-1 text-2xl text-cstgray dark:text-cstwhite select-none">
              Gwei
            </p>
          </div>
        </div>
        <div className="flex w-full justify-end pr-8">
          <div
            className={`rounded-full w-16 h-16 ${softColor} flex items-center justify-center `}
          >
            <Icon className={`w-9 h-9 ${color}`} />
          </div>
        </div>
      </div>
      <div className="pt-4">
        <p className="text-base text-cstgray dark:text-cstwhite select-none">
          Stats
        </p>
        <p className="text-lg text-ctblack dark:text-ctwhite">
          {"<"}
          {time} Minutes | {gweiUsdFmt(gweiUsd)}
        </p>
      </div>
    </div>
  );
}
