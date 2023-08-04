// IMPORTING DEPENDENCIES

import { useState } from "react";
import ExchangeRate from "./ExchangeRate";
import axios from "axios";

// SETTING STATE
const CurrencyConverter = () => {
  const currencies = ["BTC", "ETH", "USD", "XRP", "LTC", "ADA"];
  const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState("BTC");
  const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState("USD");
  const [amount, setAmount] = useState(1);
  const [exchangedData, setExchangedData] = useState({
    primaryCurrency: "BTC",
    secondaryCurrency: "BTC",
    exchangeRate: 0,
  });
  const [result, setResult] = useState(0);

  // TESTING STATE IN THE CONSOLE
  console.log(exchangedData);

  const convert = () => {
    // CREATING AXIOS REQUEST OBJECT
    const options = {
      method: 'GET',
      url: 'https://alpha-vantage.p.rapidapi.com/query',
      params: {
        from_currency: chosenPrimaryCurrency,
        function: 'CURRENCY_EXCHANGE_RATE',
        to_currency: chosenSecondaryCurrency
      },
      headers: {
        'X-RapidAPI-Key': 'fcd535a229mshf5d34f4721c341ap16abeejsn0abce08872f6',
        'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
      }
    };

    // SENDING REQUEST WITH AXIOS TO API
    axios
      .request(options)
      .then((response) => {
        console.log(
          response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
        );
        setResult(
          response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"] *
            amount
        );

        setExchangedData({
          primaryCurrency: chosenPrimaryCurrency,
          secondaryCurrency: chosenSecondaryCurrency,
          exchangeRate:
            response.data["Realtime Currency Exchange Rate"][
              "5. Exchange Rate"
            ],
        });
      })
      .catch((error) => {
        // console.error(error)
      });
  };

  // RENDERING DATA ELEMENTS TO THE DOM (DOCUMENT OBJECT MODEL)
  return (
    <div className="currency-converter">
      <h2>Currency Converter</h2>
      <div className="input-box">
        <table>
          <tbody>
            <tr>
              <td>Primary Currency</td>
              <td>
                <input
                  type="number"
                  name="currency-amount-1"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </td>

              <td>
                <select
                  value={chosenPrimaryCurrency}
                  name="currency-option-1"
                  className="currency-options"
                  onChange={(e) => setChosenPrimaryCurrency(e.target.value)}
                >
                  {currencies.map((currency, _index) => (
                    <option key={_index}>{currency}</option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <td>Secondary Currency</td>
              <td>
                <input
                  type="number"
                  name="currency-amount-2"
                  value={result}
                  disabled={true}
                />
              </td>

              <td>
                <select
                  value={chosenSecondaryCurrency}
                  name="currency-option-2"
                  className="currency-options"
                  onChange={(e) => setChosenSecondaryCurrency(e.target.value)}
                >
                  {currencies.map((currency, _index) => (
                    <option key={_index}>{currency}</option>
                  ))}
                  
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <button onClick={convert}>Convert</button>
      </div>

      <ExchangeRate exchangedData={exchangedData} />
    </div>
  );
};

// EXPORTING CURRENCY CONVERTER COMPONENT (CLOSING THE CIRCUIT)
export default CurrencyConverter;
