import { use, useEffect, useState } from "react";

export default function Image(
    {
        src, 
        clickedValue,
        setClickedValue,
        clicked,
        setClicked,
        MAX_CLICK_PER_ROUND
    }:any
) {
    let [showImageTemp, setShowImageTemp] = useState(false);
    let [showImagePerm, setShowImagePerm] = useState(false);
    


    function handleClick(){ 
        // setClicked(clicked++)
   
        if(!clickedValue.src){
            
            //temp show
            setShowImagePerm(true);

            //add it has clicked
            setClickedValue({src:src, setShow:setShowImagePerm})

        }else{
             //meaning it is second to be clicked
            //show temp to user sha
            setShowImagePerm(true);

            //if the src is what we clicked before add perm to prev and this
            
            setTimeout(()=>{
                if(!(clickedValue.src === src)){
                    //perm status for current
                
                    //perm staus for prev
                    setShowImagePerm(false)
                    clickedValue.setShow(false)
                    setClickedValue({})
                }
            }, 1000)
           

        

            // setTimeout(()=>{
                
            // }, 1000)
            //compare
        }



        //because I was clicked I can check if I am first to act or the second

        //if I am first to act I should temp show

        //if I am second to act I should compare my self to the first and if we match I can add permanent class to us
        //rememeber if we don't match click would increase and then all temp classes would be removed
    }


    return (
    <div className='imgDiv'>
        {(showImagePerm || showImageTemp) ? <img src={src}/> : <div className="falseDiv" onClick={handleClick}></div>}
    </div>
  )
}

