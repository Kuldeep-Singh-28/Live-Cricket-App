import './App.css';
import NavBar from './components/NavBar';
import MyCard from './components/MyCard';
import { getMatches } from './api/Api';
import { Fragment, useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';

function App() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getMatches()
      .then((data) => {
        setMatches(data.matches)
        console.log(data.matches);
      })
      .catch((error) => alert("Could Not load data!!"));
  }, []);

  return (
    <div className="App">
      <NavBar />
      <h1>Welcome to my Live Score App</h1>
      <Grid container>
        <Grid item sm={2}></Grid>
        <Grid item sm={8}>
          {
            matches.map((match) => (
              <Fragment key={match.unique_id}>
                {match.type === "Tests" ? (<MyCard key={match.unique_id} match={match} />
                ) : ("")}
              </Fragment>
            ))
          }
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
