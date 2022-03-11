import React, { useState } from 'react'

const SearchBar = ( {setSearchValue, fetchData, handleChange} ) => {

  return (
    <div>

        <select
        type="search" 
        id="from" 
        name='from'
        value={setSearchValue.from}
        onChange={(e) => {
            // console.log(e.target.from)
            handleChange(e)}}
        >
            <option value="">Departure</option>
            <option value="PRG">Prague</option>
            <option value="WAW">Warsaw</option>
            <option value="BER">Berlin</option>
        </select>

        <input 
        type="date" 
        id="dateFrom"  
        name="dateFrom"
        value={setSearchValue.dateFrom}
        min="2022/01/01" max="2022/12/31"
        onChange={(e) => {
            // console.log(setSearchValue.dateFrom)
            handleChange(e)}}>
        </input>

        <select
        type="search" 
        id="to" 
        name='to'
        value={setSearchValue.to}
        onChange={(e) => {
            // console.log(e.target.to)
            handleChange(e)}}
        >
            <option value="">Arrival</option>
            <option value="VLC">Valencia</option>
            <option value="BCN">Barcelona</option>
            <option value="MAD">Madrid</option>
            <option value="ATH">Athens</option>
            <option value="MXP">Milan</option>
        </select>

        <input 
        type="date" 
        id="dateTo"  
        name="dateTo"
        value={setSearchValue.dateTo}
        min="2022/01/01" max="2022/12/31"
        onChange={(e) => {
            // console.log(setSearchValue.dateTo)
            handleChange(e)}}>
        </input>

        <select
        type="search" 
        id="searchBar" 
        name='filter'
        value={setSearchValue.filter}
        onChange={(e) => {
            // console.log(e.target.filter)
            handleChange(e)}}
        >
            <option value="price">Price</option>
            <option value="duration">Duration</option>
            <option value="date">Date</option>
        </select>

        <label htmlFor='checkbox'>Direct flight</label>
        <input 
        className='checkbox'
        type="checkbox" 
        id="checkbox" 
        name="checked" 
        checked={setSearchValue.checked}
        onChange={(e) => {
            // console.log(e.target.checked)
            handleChange(e)}}/>

        <button className='btn' onClick={fetchData}>Search</button>
    </div>
  )
}
  
export default SearchBar