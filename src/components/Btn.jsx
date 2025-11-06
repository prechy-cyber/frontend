import React from "react";


const Btn = ({title, color, text}) => {
    console.log(title, color, text)
  return (
    <button className={`${color} ${title}`}>
      {title}
    </button>
  )
}

export default Btn
