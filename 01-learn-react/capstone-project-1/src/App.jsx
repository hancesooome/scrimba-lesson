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
    setDice(prevDice => prevDice.map((dice) => {
      return dice.isHeld === false ? {...dice, value: Math.ceil(Math.random() * 6)} : dice
    }
    ))
  }

  function setHold(id){
    setDice(prevDice => prevDice.map(die => {
      return die.key === id ? {...die, isHeld: !die.isHeld} : die
    }))
  }

  const diceElements = (
    
    dice.map((prevDice) => 
      <Dice value={prevDice.value} key={prevDice.key} isHeld={prevDice.isHeld} handleClick={() => setHold(prevDice.key)}/>
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
