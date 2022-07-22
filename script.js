const amountOne = document.querySelector(".amount-one");
const currencyOne = document.querySelector("#currency-one");
const amountTwo = document.querySelector(".amount-two");
const currencyTwo = document.querySelector("#currency-two");
const rateInfo = document.querySelector(".rate-info");
const swapBtn = document.querySelector(".swap");

const calculate = () => {
	fetch(
		`https://exchange-rates.abstractapi.com/v1/live/?api_key=0cfc923552954b5195182d688f87f5c8&base=${currencyOne.value}&target=${currencyTwo.value}`
	)
		.then((res) => res.json())
		.then((data) => {
			console.log(data);

			const currency1 = currencyOne.value;
			const currency2 = currencyTwo.value;

			const rate = data.exchange_rates[currency2];

			rateInfo.textContent = `1 ${currency1} = ${rate.toFixed(2)} ${currency2}`;

			amountTwo.value = (amountOne.value * rate).toFixed(0);
		
		});
};

const swap = () => {
	const oldValue = currencyOne.value;
	currencyOne.value = currencyTwo.value;
	currencyTwo.value = oldValue;
	calculate();

};

currencyOne.addEventListener("change", calculate);
currencyTwo.addEventListener("change", calculate);
amountOne.addEventListener("input", calculate);
swapBtn.addEventListener("click", swap);

calculate();

// brudne notatki

// stare ze szkolenia - https://api.ratesapi.io/api/latest?base=${currencyOne.value}&symbols=${currencyTwo.value}
//

// https://api.exchangeratesapi.io/latest?symbols="+targetCurrency+"&base="+baseCurrency

// nowe ->
// https://v6.exchangerate-api.com/v6/NwOGlM0iStER5KbpYEL8pYodiOVP7WjP/${currencyOne.value}/${currencyTwo.value}
// https://api.exchangeratesapi.io/v1/latest?access_key=API_KEY

// meDiwhdDFvlFLFG4WXltLQdT0nUB8qfD
// https://api.apilayer.com/fixer/convert?to=to&from=from&amount=a

// https://api.exchangerate.host/latest?base=${currencyOne.value}?symbols=${currencyTwo.value}

// const accessApiKey = "pO6l9svPfYEk6qwFnYeI5EFlL7B42BUb";
// const URL = `https://api.exchangeratesapi.io/v1/convert?access_key=${accessApiKey}&from=${currencyOne.value}&to=${currencyTwo.value}`;

// -----------stary projekt

// const amountOne = document.querySelector(".amount-one");
// const currencyOne = document.querySelector("#currency-one");

// const amountTwo = document.querySelector(".amount-two");
// const currencyTwo = document.querySelector("#currency-two");

// const swapBtn = document.querySelector(".swap");

// const rateInfo = document.querySelector(".rate-info");

// // const URL = "";

// const selection = () => {
// 	fetch(

// 'https://api.exchangerate.host/latest?base=${currencyOne.value}?symbols=${currencyTwo.value}`
// 	)
// 		.then((res) => res.json())
// 		.then((data) => console.log(data));
// };

// selection();
