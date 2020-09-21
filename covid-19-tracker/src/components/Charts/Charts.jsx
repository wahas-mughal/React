import React, { useEffect, useState } from "react";
import { fetchDailyUserData } from "../../api";
import { Line, Bar } from "react-chartjs-2";
import styles from './Charts.module.css';

const Charts = ({data: {confirmed, recovered, deaths}, country}) => {
  const [dailyData, setDailyData] = useState([]);

  //call the fetchDailyUserData func and set it to state
  useEffect(() => {
    const fetchApi = async () => {
      setDailyData(await fetchDailyUserData());
    };

    fetchApi();
  },[]);


  //Line chart
  const LineChart = ( dailyData.length ? (<Line 
    data = {{
        labels: dailyData.map(({reportDate}) => reportDate),
        datasets: [{
            data: dailyData.map(({confirmed}) => confirmed),
            label: 'Infected',
            borderColor: '#3333ff',
            fill: true
        }, {
            data: dailyData.map(({deaths}) => deaths),
            label: 'Deaths',
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            fill: true
        }]
    }}
  />) : null );

// Bar chart
  const barChart = (
    confirmed ? (
      <Bar
      data = {{
        labels: ['confirmed', 'recovered', 'deaths'],
        datasets: [{
          label: 'People',
          backgroundColor: ['rgba(0,0,255, 0.5)', 'rgba(0,255,0, 0.5)', 'rgba(255,0,0, 0.5)'],
          data: [confirmed.value, recovered.value, deaths.value]
        }]
      }}
      options = {{
        legend: {display: false},
        title: {display: true, text : `Current state in ${country}`}
      }}
      />
    ) : null
  )

  return (
    <div className = {styles.container}>
      {/* if there is a country then show bar chart else line chart */}
      {country ? barChart : LineChart}
    </div>
  );
};

export default Charts;
