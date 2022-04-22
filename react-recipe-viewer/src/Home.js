import React, {useState, useEffect} from 'react'
import "./Home.css"
import Card from './Card';


export default function Home() {

const [recipe, setRecipe] = useState([])
const [list, setList] = useState([]) 


//GET request as a side effect
useEffect(()=>{
    fetch('http://localhost:3000/recipes')
    .then(res=>res.json())
    .then(data=>{
      //Updating the "recipe" state variable when the promise is resolved
        setRecipe(data)
        setList(data)
       
    })
},[])




//Search feature
function handleChange(e){
  //Creating a filtered array that matches the search input
  const newArr = list.filter((item)=>{
    return item.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
  })
 //Updating the state 
setRecipe(newArr)
}
  
  return <>
    <section className='main-title'>
        <h1>All your quick and easy  recipes in one place</h1>
        <input id='search' placeholder='Search for one of your recipes' onChange={handleChange}/>
        
    </section>
    

    <div className="container">
        {/* returning the Card comp for each obj in the array, 
        with that obj passed as a props */}
        { recipe.map((obj)=>{return <Card recipe = {obj} key={obj.id} />})}
    </div>
  </>
}
