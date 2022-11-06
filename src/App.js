import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Card from './components/Card';
import { useContext } from 'react';
import { Context } from './Context';


function App() {
  const {forecastDays} = useContext(Context)
  let cards = forecastDays.map((el,i) =>(
    <Card key={i} data={el} />
  ))
  return (
    <div className="dashboard">
      <Header/>
      <div class="container">
        <Hero />
        <div className='sub-container'>
          {cards}
        </div>
      </div>
    </div>
  );
}

export default App;
