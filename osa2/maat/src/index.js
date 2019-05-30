import React, { useState, useEffect } from 'react';
import axios from 'axios'
import ReactDOM from 'react-dom';
import './index.css';

const App = () => {
    const [countries, setCountries] = useState([])
    const [filteredcountries, setFilteredcountries] = useState([])
    const [selectedCountry, setSelectedCountry] = useState({})
    useEffect(() => {
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                setCountries(response.data)
                setFilteredcountries(response.data)
            })
    }, [])
    const filterCountries = (event) => {
        const c = countries.filter(country =>
            country.name.toLowerCase().substring(
                0, event.target.value.length) === event.target.value.toLowerCase())
        setFilteredcountries(c)
        if (c && c.length && c.length === 1) {
            setSelectedCountry(c[0])
        } else {
            setSelectedCountry({})
        }
    }
    const selectCountry = (country) => {
        setSelectedCountry(country)
        setFilteredcountries([])
    }

    if (countries && countries.length && countries.length > 0)
        return (
            <>
                <CountryFinder filterCountries={filterCountries} filteredcountries={filteredcountries} selectCountry={selectCountry} />
                <Country country={selectedCountry} />
            </>
        )
    return (
        <>
            Loading...
        </>
    )
}

const Country = ({ country }) => {
    if (country.name)
        return (
            <>
                <h1>{country.name}</h1>
                <Info country={country} />
            </>
        )
    return (<></>)
}

const Info = ({ country }) => {
    return (
        <>
            <div>capital {country.capital}</div>
            <div>population {country.population}</div>
            <Languages languages={country.languages} />
            <img src={country.flag} height="42" width="70" />
        </>
    )
}
const Languages = ({ languages }) => {
    const rows = () => {
        if (languages && languages.length && languages.length > 0)
            return languages.map((language, i) => <li key={i}>{language.name}</li>)
        return 'no info'
    }
    return (
        <>
            <h2>Languages</h2>
            <ul>
                {rows()}
            </ul>
        </>
    )
}

const CountryListItem = ({ country, selectCountry }) => {
    return (
            <div>{country.name} <button onClick={() => selectCountry(country)}>show</button></div>
    )
}

const CountryFinder = ({ filterCountries, filteredcountries, selectCountry }) => {
 
    const foundCountries = () => {
        return filteredcountries.map((country, i) =>
                <CountryListItem country={country} key={i} selectCountry={selectCountry} />
        )
    }
    const countries = () => {
        if (filteredcountries && filteredcountries.length) {
            if (filteredcountries.length > 10)
                return 'Too many matches, specify another filter'
            if (filteredcountries.length === 1)
                return ''
            if (filteredcountries.length < 10)
                return foundCountries()
        }
        return 'no countries found'
    }
    return (
        <>
            <div>
                find countries <input onChange={filterCountries} />
            </div>
            <div>
                {countries()}
            </div>
        </>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));
