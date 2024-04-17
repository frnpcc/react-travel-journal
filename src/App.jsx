import './App.css'
import Header from './components/Header'
import Card from './components/Card'
import data from '../data'

function App() {

  const cards = data.map(item =>
    <Card
      key={item.id}
      {...item}
    />
  )

  return (
    <>
      <Header />
      {cards}
    </>
  )
}

export default App
