export async function gweiCall() {
  return await fetch(
    "https://data-api.defipulse.com/api/v1/egs/api/ethgasAPI.json?api-key=6cce794794066efbf7c860f6300b2b37ca8135d49ab5758a570c3ffb2bcc"
  )
    .then((res) => res.json())
    .catch((error) => {
      console.log(error);
    });
}

export async function ethCall() {
  return await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum"
  )
    .then((res) => res.json())
    .then(async (res) => {
      return res[0];
    })
    .catch((error) => {
      console.log(error);
    });
}
