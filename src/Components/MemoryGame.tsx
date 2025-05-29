import { useState, type SetStateAction } from 'react';
import Image from './Image'


type valueStateType = {value:string, setValue:SetStateAction<boolean> | null}

export default function MemoryGame({images}: {images:string[]}) {

  const [clickedValue, setClickedValue] = useState<valueStateType>({value:"", setValue:null});

  return (
    <div className='imgDivContainer'>
        {
            images.map(
                (image, count)=> 
                <Image
                    clickedValue = {clickedValue}
                    setClickedValue= {setClickedValue}
                    key={count} src={image}
                />
            )
        }
    </div>
  )
}


//when start show no image face
//once I click on one image i store the value of what I clicked
//once I click on the other Image I store 