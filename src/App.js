import './App.css';
import React, { useState} from 'react';
import { DateTime } from 'luxon';
import SearchBar from './Components/SearchBar';
import Logo from './tenor.gif';

function App() {

  const [searchResult, setSearchResults] = useState([]);
  const [searchValue, setSearchValue] = useState({
    from:'',
    to:'',
    dateFrom:'',
    dateTo:'',
    filter:'',
    checked: ''
  });
  
  const [loading, setLoading] = useState(false);

  const urlSearch = `https://api.skypicker.com/flights?fly_from=${searchValue.from}&fly_to=${searchValue.to}&date_from=${searchValue.dateFrom}&date_to=${searchValue.dateTo}&partner=data4youcbp202106&offset=0&limit=20&sort=${searchValue.filter}&direct_flights=${searchValue.checked}`;

  const handleChange = (e) => {
    if(e.target.id === "checkbox"){
      return setSearchValue({ ...searchValue, [e.target.name]: e.target.checked });
    }
    return setSearchValue({ ...searchValue, [e.target.name]: e.target.value });
  };

  //fetching data for search
  const fetchDataSearch = async () => {
    setLoading(true)
    const resp = await fetch(urlSearch);
    const result = await resp.json();
    console.log(result.data);
    
    result.data && setSearchResults(result.data);
    setLoading(false)
  }

  return (
    <div className="App">
      <header>
      <h1>Flights Search</h1>
      <SearchBar 
        handleChange={handleChange} 
        setSearchValue={setSearchValue} 
        fetchData={fetchDataSearch} 
        />
      </header> 
        
        <main>
        <tr className='bar'>
        <th>Day of Flight</th>
        <th>Departure</th>
        <th>Arrival</th>
        <th>Dep Time</th>
        <th>Arr Time</th>
        <th>Duration</th>
        <th>Price</th>
        <th></th>
        </tr>

        { loading ? <img src={Logo}/> : <br/>}

        {searchResult.map((item, i) => (
          
        <tr className='flight' key={i}>

          <th>{DateTime.fromMillis(item.dTimeUTC * 1000).toFormat('D')}</th>
          <th>{item.cityFrom} ({item.flyFrom})</th>
          <th>{item.cityTo} ({item.flyTo})</th>
          <th>{DateTime.fromMillis(item.dTimeUTC * 1000).toFormat('hh:mm')}</th>
          <th>{DateTime.fromMillis(item.aTimeUTC * 1000).toFormat('hh:mm')}</th>
          <th>{item.fly_duration}</th>
          <th>{item.price} EUR</th>
          <th><button className='btn'>Buy</button></th>

        </tr>
      ))}
      </main>
        
      <footer>
        © 2022 K&M
      </footer>
    </div>
  );
}

export default App;