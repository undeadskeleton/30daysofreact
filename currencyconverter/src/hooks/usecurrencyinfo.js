import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  console.log("The currency is : ", currency);
  console.log(
    `The url is https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
  );
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((data) => setData(data[currency]));
  }, [currency]);
  console.log("The data from useCurrencyInfo", data);

  return data;
}

export default useCurrencyInfo;
