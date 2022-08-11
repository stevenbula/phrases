import { useState } from 'react'
import './App.css'
import quotes from './json/quotes.json'
import Quote from '../components/Quote'

const colors = [
 '#1D8348',
 '#D68910',
 '#21618C',
 '#A93226',
 '#1A5276',
 '#2471A3',
 '#2471A3',
 '#2471A3',
 '#6C3483',
 '#6C3483' 

]

const backColors = [
  '#212F3D',
  '#273746',
  '#2C3E50',
  '#808B96',
  '#2E4053',
  '#34495E',
  '#212F3C',
  '#283747',
  '#566573',

]

function App() {

  const randomNumber = array => {
    return Math.floor(Math.random() * array.length)
  }

  const getRandomQuote = array => {
    const i = randomNumber(array)
    return array[i]
  }

  let indexRandomBackColors = randomNumber(backColors)

  const [randomQuote, setRandomQuote] = useState(getRandomQuote(quotes))
  const [randomColor, setRandomColor] = useState(getRandomQuote(colors))
  const [randomBackColor, setRandomBackColor] = useState(backColors[indexRandomBackColors])
  const appStyle = {
    backgroundColor: randomBackColor,
  }
  const cardStyle = {
    backgroundColor: randomColor,
  }

  const click = () => {
    setRandomQuote(getRandomQuote(quotes))
    setRandomColor(getRandomQuote(colors))
    setRandomBackColor(backColors[indexRandomBackColors])
  }

  return (
    <div className="App" style={appStyle}>
      <div className="container" style={cardStyle}>
        <Quote
          randomQuote={randomQuote}
          click={click}
        />
      </div>
    </div>
  )
}

export default App
