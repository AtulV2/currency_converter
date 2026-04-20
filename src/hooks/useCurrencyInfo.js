import {useEffect, useState} from "react"

/*
Example: return value of api call

https://latest.currency-api.pages.dev/v1/currencies/eur.json

{
    "date": "2025-08-10",
    "eur": {
        "inr": 101.92554315,
        "usd": 1.16267328,
        "zmk": 26974.4566187,
        "zmw": 26.97445662,
        "zwd": 420.77145909,
        "zwg": 31.12122434,
        "zwl": 77763.35638392
         ..... long list
    }
}

*/

// This is custom hook
function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
       // we give a Empty object as defalut value so that if fetch does not work then app does not crash
       // fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;