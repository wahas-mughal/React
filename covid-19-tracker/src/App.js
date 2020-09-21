import React from "react";
import { Cards, Charts, CountryPicker } from "./components";
import { pullData } from "../src/api";
import covidImage from './images/covid-19.jpg';

import styles from "./App.module.css";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await pullData();
    this.setState({ data: fetchedData });
    console.log(fetchedData);
  }

  countryHandler = async (country) => {
    const fetchedData = await pullData(country);
    console.log(fetchedData);
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
        <div className={styles.container}>        
          <img className = {styles.image} src = {covidImage} alt = "Covid-19"/>
          <Cards data={data} />
          <CountryPicker countryHandler={this.countryHandler} />
          <Charts data={data} country={country} />
        </div>
    );
  }
}

export default App;
