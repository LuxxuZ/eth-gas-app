export async function gweiCall() {
  return await fetch(
    "https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=DWRIN7RH51319HBPGM3KWTZ2TU32RE9Y5V"
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
