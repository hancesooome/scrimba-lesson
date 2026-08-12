import { useState } from 'react'
import './App.css'
import Dice from './Dice'
import { nanoid } from 'nanoid'

function App() {
  const [dice, setDice] = useState(randomAllDice())

  function randomAllDice() {
    const arr = new Array(10)
              .fill(0)
              .map((prevDice) => ({
                ...prevDice,
                value: Math.ceil(Math.random() * 6),
                key: nanoid(),
                isHeld: false
              })
            )

    return arr

  }

  function handleRoll(){
    setDice(randomAllDice)
  }

  const diceElements = (
    
    dice.map((prevDice) => 
      <Dice value={prevDice.value} key={prevDice.key}/>
    )
  )




  

  return (
    <main>
      <div className="dice-container">
        {diceElements}
      </div>
      <button className="roll-btn" onClick={handleRoll}>Roll</button>
    </main>

    
  ) 
}

export default App
