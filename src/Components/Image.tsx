import { useState } from "react";

export default function Image(
    {
        src, 
        clickedValue,
        setClickedValue,
    }:any
) {

    let [showImage, setShowImage] = useState(false);
    


    function handleClick(){ 
        //once clicked I want to check if clicked is first or second
        //if clickedValue.src does not exist that means we are click for
        //for first time

        //if click for first time
        if(!clickedValue.src){
            
            //i want to show the image that we clicked on
            setShowImage(true);

            //i also want to add it as the current clicked element
            // src contains the source, and setShow contains the function to update whether to show


            //add it has clicked
            setClickedValue({src:src, setShow:setShowImage})

        }else{

            //if a clicked value is found before that means we need to 
            //compart the clicked value source with this clicked one
            
            //first I need to show image to my user so they can see what they clicked
            setShowImage(true);

            //I want to check if the src is the prev src then
            //I should just clear 

            setClickedValue({})

            setTimeout(()=>{
                if(!(clickedValue.src === src)){
                
                    setShowImage(false)
                    clickedValue.setShow(false)
                }else{
               
                }
            }, 1000)
           
        }



        //because I was clicked I can check if I am first to act or the second

        //if I am first to act I should temp show

        //if I am second to act I should compare my self to the first and if we match I can add permanent class to us
        //rememeber if we don't match click would increase and then all temp classes would be removed
    }


    return (
    <div className='imgDiv'>
        {(showImage) ? <img src={src}/> : <div className="falseDiv" onClick={handleClick}></div>}
    </div>
  )
}

