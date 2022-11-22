const currency1InputElem = document.getElementById('currency-1');
const selectCurrency1 = document.getElementById('select-currency-1');
const currency2InputElem = document.getElementById('currency-2');
const selectCurrency2 = document.getElementById('select-currency-2');
const rateDetail = document.getElementById('rate-detail');
convert();
function convert(){
    const selectCurrency1value = selectCurrency1.value;
    const selectCurrency2value = selectCurrency2.value;
    fetch(`https://api.exchangerate-api.com/v4/latest/${selectCurrency1value}`)
    .then(response => {
        if(!response.ok){
            throw new Error('Error occured');
        }
        return response.json();
    })
    .then(data => {
        const val = data.rates[selectCurrency2value];
        currency2InputElem.value = (currency1InputElem.value * val).toFixed(3);
        rateDetail.innerText = `1 ${selectCurrency1value} = ${val.toFixed(3)} ${selectCurrency2value}`;
    })
    .catch(error => {
        console.log('problem : ', error);
    });
}
currency1InputElem.addEventListener('input', convert);
currency2InputElem.addEventListener('input', convert);
selectCurrency1.addEventListener('change', convert);
selectCurrency2.addEventListener('change', convert);