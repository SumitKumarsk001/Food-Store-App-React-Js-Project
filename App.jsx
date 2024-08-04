import Container from "./component/Container";
import ErrorMessage from "./component/ErrorMessage";
import FoodItem from "./component/FoodItem";
import "./App.css";
import FoodInput from "./component/FoodInput";
import React, { useState } from "react";

function  App(){
  
  let [foodItems,setFoodItems]=useState([]);
 

  

  const OnKeyDown=(event)=>{
   if(event.key === "Enter"){
    let newFoodItem = event.target.value;
    event.target.value="";
    let newItems =[...foodItems,newFoodItem];
    setFoodItems(newItems);
   }
  }
  return <>
  <Container>
   <h1 className="food-heading">Healthy Foods</h1>
  <FoodInput handleOnKeyDown={OnKeyDown}></FoodInput>
  <ErrorMessage items={foodItems}></ErrorMessage>
  <FoodItem items={foodItems}></FoodItem>
  </Container>
  
  </>
}
 
export default App;