import React from 'react'
import "./Game.css"

const Game = ({verifyLetter}) => {
  return (
    <div className='game'>
        <p className='poins'>
          <span>Pontuacao:000</span>
        </p>
        <h3 className='tip'>
          Dica sobre a palavra <span>DICA....</span>
        </h3>
        <div className="wordContainer">
          <span className='letter'>A</span>
          <span className="blackSquare"></span>
        </div>
        <div className="letterContainer">
          <p>Tente adivinha uma letra da palavra: </p>
          <form>
            <input type="text" name='letter' maxLength="1" required />
            <button>Jogar</button>
          </form>
        </div>
        <div className="wrongLetterContainer">
          <p>Letras ja utilizadas</p>
          <span>a,</span>
          <span>b,</span>
        </div>
    </div>
  )
}

export default Game