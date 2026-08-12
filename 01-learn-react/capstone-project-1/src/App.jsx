import { useState } from 'react'
import './App.css'
import Dice from './Dice'

function App() {
  const [dice, setDice] = useState(randomAllDice)

  function randomAllDice() {
    const arr = new Array(10)
              .fill(0)
              .map((prevDice) => ({
                ...prevDice,
                value: Math.ceil(Math.random() * 6)
              })
            )

    console.log(arr)
    return arr

  }

  const diceElements = (
    dice.map((prevDice) => 
      <Dice value={prevDice.value}/>
    )
  )



  

  return (
    <main>
      <div className="dice-container">
        {diceElements}
      </div>
      <button onClick={randomAllDice}>test</button>
    </main>

    
  ) 
}

export default App
