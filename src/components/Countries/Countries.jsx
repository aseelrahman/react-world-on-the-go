// import React from 'react';

import { use } from "react";
import Country from '../Country/Country';
import './Countries.css'


const Countries = ({countriesPromise}) => {

    const countriesData = use(countriesPromise)
    const countries = countriesData.countries
    console.log(countries)
    return (
        <>
            <h1>In the Countries: {countries.length}</h1>
            <div id="countries">
                {
                    countries.map(country => <Country country={country} key={country.cca3?.cca3} />)
                }
            </div>
        </>
    );
};

export default Countries;