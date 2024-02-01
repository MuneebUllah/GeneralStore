import React from 'react'
import "./Card.css"

 const Card=({data})=>{
    // console.log({data})
    // co 
  return (
      <section className='main__container'>
        {data.map((curElem)=>{
            return(
                <>
            <div className='container' key={curElem.id}>
                <div>
            <div className='id'>{curElem.id}</div>
            <div>{curElem.category}</div>
            <h1>{curElem.name}</h1>
            <span>{curElem.price}</span>
            <p>{curElem.description}</p>
            <span className='read'>Read</span>
            </div>
            <div> <img className='img' src={curElem.Image} alt="This is an image"/>
            <button className='order'>Order Now</button>
            </div>
          </div>
          </>
            )
            })}
      
    </section>
  )
 }
export default Card;