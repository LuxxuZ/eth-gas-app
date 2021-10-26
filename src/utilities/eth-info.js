export function ethChange24h(ethChange) {
  return ethChange.toFixed(1);
}

export function ethPriceUsd(ethPrice) {
  return Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(ethPrice);
}

export function gweiUsdFmt(gweiUsd) {
  return Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(gweiUsd);
}
