const currency = await fetch(
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/inr.json"
)
  .then((res) => res.json())
  .then((data) => data);

console.log(Object.keys(currency["inr"]));
