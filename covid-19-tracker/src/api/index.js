import axios from "axios";

const URL = "https://covid19.mathdro.id/api"; //API

//pull data from the API
export const pullData = async (country) => {
  //if no country is passed the URL remains the same
  let mutableURL = URL;

  //if a country is passed. URL changes
  if (country) {
    mutableURL = `${URL}/countries/${country}`;
  }

  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(mutableURL);

    const selectedData = { confirmed, recovered, deaths, lastUpdate };

    // OR
    // const selectedData = {
    //     confirmed: confirmed,
    //     recovered: recovered,
    //     deaths: deaths,
    //     lastUpdate: lastUpdate
    // }

    return selectedData;
  } catch (error) {
    console.log(error);
  }
};


// fetch the daily user data
export const fetchDailyUserData = async () => {
  try {
    const { data } = await axios.get(`${URL}/daily`);

    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      reportDate: dailyData.reportDate,
    }));

    console.log(modifiedData);
    return modifiedData;
  } catch (err) {
    console.log(err);
  }
};

//fetch the countries
export const countries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${URL}/countries`);

    return countries.map((country) => country.name);
  } catch (err) {
    console.log(err);
  }
};
