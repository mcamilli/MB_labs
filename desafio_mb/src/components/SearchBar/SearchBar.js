import React from "react"
import { useState} from "react"
import EventCard from "../EventCard/EventCard"
import {useHistory} from "react-router-dom"
import { goToEventListDetails } from "../../router/coordinator"
import { StyledInputBase } from "./styled"


const SearchBar = ({placeholder, data}) => {
    const [filteredData, setFilteredData] = useState([])    
    const history = useHistory ()

const handleFilter = (event) => {
   const searchWord = event.target.value
   const newFilter = data.filter((product) => {
          return product.title.toLowerCase().includes(searchWord.toLowerCase())
         
   }) 
   setFilteredData(newFilter)
}

const onClickCard = (title) => {
    goToEventListDetails(history, title)
}

    return (
    <>
        <StyledInputBase
            type="text"
            placeholder={placeholder}
            onChange ={handleFilter}  
            />
    <div>
        {filteredData.map((product) => {
            return (
                <EventCard  
                onClick = {() => onClickCard(product.title)} 
                image={product.image} 
                title={product.title} 
                data={product.data} 
                local={product.local} 
                id={product.id} 
                key={product.id}/>
            )                  
        })}        
    </div>
    </>
)  
}
export default SearchBar