import { useState } from "react"
import React from "react"
import ManuItem from "./ManuItem"
import DISHES from "../../data/dishis"
import Dishdetils from "./Dishdetils"

const Manu = () => {
    const [dishes]=useState(DISHES);
    const [SelectDishes,setSelectDishes]=useState(null)
    const onSelectDish=(dish) => {
        setSelectDishes(dish)
    }
    const manu =dishes.map((dish) =>{
        return (<ManuItem dish={dish} onSelectDish={onSelectDish} key={dish.id}/>)
    });
    const dishdetils=SelectDishes ? <Dishdetils dish={SelectDishes}/>:null;
  return (
    <div className="container">
        <div className="row">
            <div className="col-5">
                {manu}
            </div>
            <div className="col-7">
                {dishdetils}
            </div>
        </div>
    </div>
  )
}

export default Manu