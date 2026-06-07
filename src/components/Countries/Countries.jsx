// import React from 'react';

import { use, useState } from "react";
import Country from '../Country/Country';
import './Countries.css'


const Countries = ({countriesPromise}) => {
    const [visitedCountries, setVisitedCountries] = useState([])
    const [visitedFlags, setVisitedFlags] = useState([])

    const handleVisitedCountries = (country) =>{
        console.log('Handle visited country clicked', country);
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)
    }

    const handleVisitedFlag = (flag) =>{
        console.log('Flag needs to be added', flag);
        const newVisitedFlags = [...visitedFlags, flag]
        setVisitedFlags(newVisitedFlags)
    }

    const countriesData = use(countriesPromise)
    const countries = countriesData.countries
    // console.log(countries)
    return (
        <>
            <h1>In the Countries: {countries.length}</h1>
            <h3>Total Country visited: {visitedCountries.length}</h3>
            <h3>Total Flags Visited: {visitedFlags.length}</h3>
            <ol>
                {
                    visitedCountries.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
                }
            </ol>
            <div className="visited-flags-container">
                {
                    visitedFlags.map((flag, index) => <img key={index} src={flag}></img>)
                }
            </div>
            <div id="countries">
                {
                    countries.map(country => <Country country={country} key={country.cca3?.cca3} handleVisitedCountries={handleVisitedCountries} handleVisitedFlag={handleVisitedFlag} />)
                }
            </div>
        </>
    );
};

export default Countries;