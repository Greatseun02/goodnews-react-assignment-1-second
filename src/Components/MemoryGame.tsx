import { useEffect, useState } from 'react';
import Image from './Image'


export default function MemoryGame({images}: {images:string[]}) {

  const [clickedValue, setClickedValue] = useState({});
  const [clicked, setClicked] = useState(0);
  const MAX_CLICK_PER_ROUND = 2;
    
//   useEffect(()=>{
//     if(clicked===2){
//         setClicked(0);

//         //remove all temp classes
//     }
//   },[clicked])

  return (
    <div className='imgDivContainer'>
        {
            images.map(
                (image, count)=> 
                <Image
                    clickedValue = {clickedValue}
                    setClickedValue= {setClickedValue}
                    clicked= {clicked}
                    setClicked= {setClicked}
                    MAX_CLICK_PER_ROUND = {MAX_CLICK_PER_ROUND}
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