import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";

import styles from "./CountryPicker.module.css";
import { countries } from "../../api";

const CountryPicker = ({countryHandler}) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  //call countries func and set it to the state in an empty array
  useEffect(() => {
    const fetchedCountryData = async () => {
      setFetchedCountries(await countries());
    };

    fetchedCountryData();
  }, [setFetchedCountries]);

  console.log(fetchedCountries);

  return (
    <FormControl className={styles.formcontrol}>
        {/* passed the onChange value back to the countryHandler */}
      <NativeSelect defaultValue = "" onChange = {(e) => countryHandler(e.target.value)}> 
        <option value=""> Worldwide </option>
        {/* loop through all the countries for the country picker */}
        {fetchedCountries.map((country, i) => <option key = {i} value = {country}> {country} </option>)}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
