import React, {useState, useEffect} from 'react'
import "./Home.css"
import Card from './Card';


export default function Home() {

const [recipe, setRecipe] = useState([]);

useEffect(()=>{
    fetch('http://localhost:3000/recipes')
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        setRecipe(data)
    })
}, [])

  


  return <>
    <section className='main-title'>
        <h1>All your quick and easy  recipes in one place</h1>
    </section>

    <div className="container">
        
        { recipe.map((obj)=>{return <Card recipe = {obj} key={obj.id}/>})}
    </div>
  </>
}
