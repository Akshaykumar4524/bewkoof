import logo from './logo.svg';
import './App.css';
import { Grid } from '@mui/material';
import Add from './components/Add';
import Header from './components/Header';
import Banner from './components/Banner';

function App() {
  return (
    <Grid>
      <Add/>
      <Header/>
      <Banner/>
    </Grid>
  );
}

export default App;
