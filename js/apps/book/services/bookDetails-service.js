export const bookDetailsService = {
    getCurrencySymbol
}


function getCurrencySymbol({ listPrice }) {
    const currencys = [
        { icon: '€', code: 'EUR' },
        { icon: '₪', code: 'ILS' },
        { icon: '$', code: 'USD' },
    ];
    var currency;
    return currency = currencys.find(currency => {
        return listPrice.currencyCode === currency.code
    }).icon;
}