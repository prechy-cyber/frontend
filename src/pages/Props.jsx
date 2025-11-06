import React from "react";
import Btn from "../components/Btn";


// props are used to pass data from parent component to child componet
//props example - reuseable component





const Props = () => {
  return (
    // <div>
      
    // </div>

    <>
    <Btn title ="change" color = "btn btn-danger" text="text-info"/>
    <Btn title ="beautify" color = "btn btn-info" text="text-secondary"/>
    <Btn title ="decorate" color = "btn btn-primary" text="text-success"/>
    <Btn title ="add" color = "btn btn-success" text="text-primary"/>
    <Btn title ="update" color = "btn btn-secondary" text="text-danger"/>
    

    </>
  )
}

export default Props
