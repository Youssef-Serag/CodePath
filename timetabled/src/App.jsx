import './App.css';
import Calendar from './components/Calendar';

const App = () => {

  return (
    <div className="App">
      <h1>Itinerrary for 7 Days in Chicago</h1>
      <h2>Welcome to Chicago, Natalia! Check out this calendar to get to knwo the city and see all the sights during your stay.</h2>
      <Calendar />
    </div>
  )
}

export default App