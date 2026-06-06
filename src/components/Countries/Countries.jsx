// import React from 'react';

import { use } from "react";


const Countries = ({countriesPromise}) => {

    const countriesData = use(countriesPromise)
    const countries = countriesData.countries
    console.log(countries)
    return (
       <>
            <h1>In the Countries: {countries.length}</h1>
       </>
    );
};

export default Countries;