import './App.css'
import Card from './components/Card'
import mexican from './images/mexican.jpg'

function App() {
  return (
    <div className='App'>
      <h1 className='title'>Food Truck Finder</h1>
      <div className='container'>
        <Card path={mexican} name='Los Pollos Hermanos' cuisine='Mexican' link='https://www.chipotle.com/'/>
        <Card name="Poke2U"/>
        <Card name="Olive Garden"/>
        <Card name="Dave's Hot Chicken"/>
        <Card name='Green Corner'/>
      </div>
    </div>
  )
}

export default App
