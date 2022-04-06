import React, {useState, useEffect} from 'react'
import "./Home.css"
import Card from './Card';


export default function Home() {

const [recipe, setRecipe] = useState([]);
const [list, setList] = useState(recipe)


useEffect(()=>{
    fetch('http://localhost:3000/recipes')
    .then(res=>res.json())
    .then(data=>{
        setRecipe(data)
        setList(data)
       
    })
},[])



function handleChange(e){
  
  const newArr = list.filter((item)=>{
    return item.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
  })
  
setRecipe(newArr)
}
  


  return <>
    <section className='main-title'>
        <h1>All your quick and easy  recipes in one place</h1>
        <input id='search' placeholder='Search for one of your recipes' onChange={handleChange}/>
    </section>
    

    <div className="container">
        
        { recipe.map((obj)=>{return <Card recipe = {obj} key={obj.id}/>})}
    </div>
  </>
}
