import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import RoundUp from "react-countup"; //counter
import cx from 'classnames'; //merge the two stylings



//destructure the values
const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {

// if confirmed is not fetched from the API show Loading... 
  if (!confirmed) {
    return "Loading...";
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs = {12} md = {3} className = {cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              {" "}
              Infected{" "}
            </Typography>
            <Typography variant="h5">
              {/* Count counter */}
              <RoundUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator={","}
              />
            </Typography>
            <Typography color="textSecondary">
              {" "}
              {new Date(lastUpdate).toDateString()}{" "}
            </Typography>
            <Typography variant="body2"> Number of Infected cases </Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card} xs = {12} md = {3} className = {cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              {" "}
              Recovered{" "}
            </Typography>
            <Typography variant="h5">
              {/* Count counter */}
              <RoundUp
                start={0}
                end={recovered.value}
                duration={2.5}
                separator={","}
              />{" "}
            </Typography>
            <Typography color="textSecondary">
              {" "}
              {new Date(lastUpdate).toDateString()}{" "}
            </Typography>
            <Typography variant="body2"> Number of Recovered cases </Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card} xs = {12} md = {3} className = {cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              {" "}
              Deaths{" "}
            </Typography>
            <Typography variant="h5">
            {/* Count counter */}
            <RoundUp
            start = {0}
            end = {deaths.value}
            duration = {2.5}
            separator = {","}
            />
            </Typography>
            <Typography color="textSecondary">
              {" "}
              {new Date(lastUpdate).toDateString()}{" "}
            </Typography>
            <Typography variant="body2"> Number of Death cases </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
