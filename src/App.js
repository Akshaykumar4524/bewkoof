import logo from './logo.svg';
import './App.css';
import { Grid } from '@mui/material';
import Add from './components/Add';
import Header from './components/Header';
import Banner from './components/Banner';
import Content from './components/Content';

function App() {
  return (
    <Grid>
      <Add/>
      <Header/>
      <Banner/>
      <Content/>
    </Grid>
  );
}

export default App;
