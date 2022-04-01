import React, {useState} from 'react'
import './Card.css'

export default function Card({recipe}) {
  const [btn, setBtn] = useState(true)
  function handleClick(){
    setBtn(!btn)
    
  }

  return <>
  <div className='card' style={{"background-image": `url(${recipe.image})`}}>
  
        <div className="overlay">
            <h4>{recipe.name}</h4>
            <div className={!btn? "overlay2": "steps"}> <p><small>{recipe.steps}</small></p></div>            
           
        </div>
    <button className="card-btn" onClick={handleClick} style={{background: !btn? "rgba(0, 0, 0, 0.5)": "#000"}}>{!btn?"Hide Recipe": "Show Recipe"}</button>
  </div>
  
  </>
}
