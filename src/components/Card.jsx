import React from 'react'
import myCardImage from "../assets/react.svg"
import Button from '../components/Button'

const Card = () => {
  return (
    <div className='card w-25' style={{ width: "18rem" }}>
      <img src={myCardImage} className='card-img-top' style={{ width: "100px" }} alt="" />
      <div className='card-body'>
        <h5 className='card-title'>Card Title</h5>
        <p className='card-text'>Some quick simple text</p>
        <Button />
      </div>
    </div>
  )
}

export default Card
