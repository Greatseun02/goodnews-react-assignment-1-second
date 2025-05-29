import { useEffect, useState } from 'react'
import './App.css'
import MemoryGame from './Components/MemoryGame'
import { shuffle } from './utils'

let images = [ 
  "https://images.unsplash.com/photo-1626808642875-0aa545482dfb",
  "https://images.unsplash.com/photo-1546842931-886c185b4c8c", 
  "https://images.unsplash.com/photo-1520763185298-1b434c919102",
  "https://images.unsplash.com/photo-1442458017215-285b83f65851", 
  "https://images.unsplash.com/photo-1496483648148-47c686dc86a8", 
  "https://images.unsplash.com/photo-1591181520189-abcb0735c65d",
]

let doubleImages = [
  ...images, ...images
]

doubleImages = shuffle(doubleImages);

function App() {
  const [showWelcome, setShowWelcome]= useState(true);
  const [count, setCount] = useState(0);
  const [highScore, setHighScore] = useState("0");

  useEffect(()=>{
    let score = sessionStorage.getItem("highscore");

    if(score){
      setHighScore(score);
    }

  }, [])

  return (
    <div id='app'>
      {
        showWelcome &&
        <div className='screen'>
          <div>
            <h1>Welcome to guess the Image</h1>
            <button onClick={()=>{setShowWelcome(false)}}>Click me</button>
          </div>
        </div>
      }
      <div>
        <p className='title'>Guess the Image</p>
        <div className='metric'>
          <p>Count: {count}</p>
          <p>High Score: {count}</p>
        </div>
      </div>
      <MemoryGame 
        images={doubleImages}
        count={count}
        setCount={setCount}
        highScore={highScore}
        setHighScore={setHighScore}
      />
    </div>
  )
}

export default App
