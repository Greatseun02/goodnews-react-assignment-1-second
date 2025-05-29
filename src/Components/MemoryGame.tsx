import { useEffect, useState, type Dispatch, type SetStateAction } from 'react';
import Image from './Image'


type valueStateType = {value:string, setValue:SetStateAction<boolean> | null}

export default function MemoryGame({images, setCount, count, highScore, setHighScore}: {images:string[], highScore:string, count:number, setHighScore:Dispatch<SetStateAction<string>>, setCount:Dispatch<SetStateAction<number>>}) {

  const [clickedValue, setClickedValue] = useState<valueStateType>({value:"", setValue:null});
  const [srcs, setSrcs] = useState([]);

  useEffect(
    ()=>{
      if(srcs.length === 6){
        console.log("count")
        if(count < Number(highScore)){
          setHighScore(count.toString());
          sessionStorage.setItem("highscore", count.toString());
        }
      }
    }
    ,[srcs]
  )

  return (
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
  )
}


//when start show no image face
//once I click on one image i store the value of what I clicked
//once I click on the other Image I store 