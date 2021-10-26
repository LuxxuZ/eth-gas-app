const billionth = 1000000000;

export function getGweiUsd({ ethPrice, gWeiCount }) {
  if (typeof ethPrice !== "number" || typeof gWeiCount !== "number")
    throw new Error("Ethereum or gWeiCount price must be a number");

  const oneGwei = ethPrice / billionth;

  return ((gWeiCount * oneGwei).toPrecision(8) * 200000).toFixed(2);
}
