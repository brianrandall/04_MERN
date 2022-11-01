import React, { useState} from 'react'
import axios from 'axios'

const AxiosCrypto = () => {
    
    const [coin, setCoin] = useState([])

    const fetchCoinData = () => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        .then((response) => {
            console.log(response.data)
            setCoin(response.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }



  return (
    <div>
        <h2>crypto things</h2>
        <button onClick={fetchCoinData}>get coins</button>

        {
        coin.map((c, i) => {
            return (
            <div key={i}>
                <img src={c.image} height='150px'/>
                <p>{i}</p>
                <p>{c.name}</p>
                <p>${c.current_price}</p>

            </div>
        )})
        }

    </div>
  )
}

export default AxiosCrypto