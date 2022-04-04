import React from 'react'
import './Addrecipe.css'
import { useHistory } from 'react-router-dom'

export default function Addrecipe() {
  let formData = {
    name: "",
    image:"",
    steps:""}

  function handleSubmit(e){
    e.preventDefault()

      formData.name= e.target.recipeName.value
      formData.image = e.target.imageUrl.value
      formData.steps= e.target.steps.value

      fetch("http://localhost:3000/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"},
      body: JSON.stringify(formData)
    })    
    
    }

    const history = useHistory()

    function handleClick(){
        history.push('/')
        
    }

  return <>
    <div className="addrecipe-container">
  <form id='addRecipe-form' onSubmit={handleSubmit}>

    <label>Recipe name</label>
    <input type="text" id="recipeName" placeholder="Recipe name.."/>

    <label>Image URL</label>
    <input type="text" id="imageUrl" placeholder="Image URL here"/>

    <label>Steps</label>
    <textarea id="steps" placeholder="Describe the steps of the recipe.." style={{height:"200px"}}></textarea>

    <input type="submit" value="Submit" onClick={handleClick}/>

  </form>
</div> 
  </>
}
