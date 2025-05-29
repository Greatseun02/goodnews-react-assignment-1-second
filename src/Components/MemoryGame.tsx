import { useEffect, useState, type Dispatch, type SetStateAction } from 'react';
import Image from './Image'


export type valueStateType = {value:string, setValue:Dispatch<SetStateAction<boolean>> | null}

export default function MemoryGame({images, setCount, count, highScore, setHighScore}: {images:string[], highScore:string, count:number, setHighScore:Dispatch<SetStateAction<string>>, setCount:Dispatch<SetStateAction<number>>}) {

  const [clickedValue, setClickedValue] = useState<valueStateType>({value:"", setValue:null});
  const [srcs, setSrcs] = useState<string[]>([]);
  const [showRefresh, setShowRefresh] = useState(false);

  useEffect(
    ()=>{
      if(srcs.length === 6){
        if(count < Number(highScore)){
          setHighScore(count.toString());
          sessionStorage.setItem("highscore", count.toString());
        }

        setShowRefresh(true);
      }
    }
    ,[srcs]
  )

  return (
    <>
      <div className='imgDivContainer'>
          {
              images.map(
                  (image, index)=> 
                  <Image
                      clickedValue = {clickedValue}
                      setClickedValue= {setClickedValue}
                      key={index} src={image} setCount={setCount} count = {count} setSrcs={setSrcs} srcs={srcs}
                  />
              )
          }
      </div>
      {
        showRefresh &&
        <div className='refresh'>
          <div>
            <h1>Want to Start Again?</h1>
            <button onClick={()=>{location.reload()}}>Click Me</button>
          </div>
        </div>
      }
    </>
  )
}


//when start show no image face
//once I click on one image i store the value of what I clicked
//once I click on the other Image I store 