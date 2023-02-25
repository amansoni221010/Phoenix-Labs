import React, { useEffect, useState } from 'react'
import './Allbitcoin.css';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
export default function Allbitcoin() {
    const [data, setData] = useState(null);
    const [filteredData, setFilteredData] = useState([]);


    const url =
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
  
    useEffect(() => {
      axios
        .get(url)
        .then(async (response) => {
          await setData(response.data);
          await setFilteredData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
  
    console.log(data);
    const handleSearch=(e)=>{
        // console.log(e)
        const exData=[...data];
        const newData=exData.filter((ex)=>{
            return ex.id.startsWith(e.toLowerCase());
        })
        setFilteredData(newData)
    }
    if (!data) return <div>Loading...</div>;
  return (
    <div>
        <div className="over-all">
      <div className="container">
        <div className="search-box">
            <SearchIcon/>
            <input type="text" onChange={(e)=> handleSearch(e.target.value)} placeholder='search here...' />
        </div>
        <div className="result-box">
            {filteredData.map((element)=>(
                <div className="result">
                <img src={element.image} alt="" />
                <h4>{element.name}</h4>
                <p>${element.current_price.toLocaleString()}</p>
            </div>
            ))}
            
        </div>
      </div>
      </div>
    </div>
  )
}
