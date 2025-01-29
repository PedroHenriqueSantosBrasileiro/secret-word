import { useState } from 'react'

import './App.css'
import StartScreen from './components/StartScreen'

import {wordList} from "./data/words"
import Game from './components/Game'
import GameOver from './components/GameOver'

const stages = [
  {id:1,name:"start"},
  {id:2,name:"game"},
  {id:3,name:"end"},
]

function App() {

  const[gameStage,setGameStage] = useState(stages[0].name)
  const [words] = useState(wordList)
  const [pickedWord,setPickedWord] = useState("")
  const [pickedcategory,setPickedCategory] = useState("")
  const [letters,setLetters] = useState("")

  const pickedWordAndCategory = () =>{
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]

    const word = words[category][Math.floor(Math.random() * Object.keys(words[category]).length)]
    return {word,category}
  }

  const startGame = () =>{
    const {word,category} = pickedWordAndCategory()

    let wordLetters = word.split("")
    wordLetters = wordLetters.map((l) => l.toLowerCase())

    setGameStage(stages[1].name)

    setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordLetters)
  }

  const verifyLetter = () =>{
    setGameStage(stages[2].name)
  }

  const retry = () =>{
    setGameStage(stages[0].name)
  }

  return (
   <div className='App'>
      {gameStage === "start" && <StartScreen startGame={startGame}/>}
      {gameStage === "game" && <Game verifyLetter={verifyLetter}/>}
      {gameStage === "end" && <GameOver retry={retry}/>}
   </div>
  )
}

export default App
