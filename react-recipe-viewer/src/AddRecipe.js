import React from 'react'
import './Addrecipe.css'

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

  return <>
    <div className="addrecipe-container">
  <form id='addRecipe-form' onSubmit={handleSubmit}>

    <label for="fname">Recipe name</label>
    <input type="text" id="recipeName" name="firstname" placeholder="Recipe name.."/>

    <label for="lname">Image URL</label>
    <input type="text" id="imageUrl" name="lastname" placeholder="Image URL here"/>

    <label for="subject">Steps</label>
    <textarea id="steps" name="subject" placeholder="Describe the steps of the recipe.." style={{height:"200px"}}></textarea>

    <input type="submit" value="Submit"/>

  </form>
</div> 
  </>
}
