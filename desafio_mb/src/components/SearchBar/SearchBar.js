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
   const newFilter = data.filter((item) => {
          return item.title.toLowerCase().includes(searchWord.toLowerCase())
         
   }) 
   setFilteredData(newFilter)
}

const onClickCard = (id) => {
    goToEventListDetails(history, id)
}

    return (
    <>
        <StyledInputBase
            type="text"
            placeholder={placeholder}
            onChange ={handleFilter}  
            />
    <div>
        {filteredData.map((item) => {
            return (
                <EventCard  
                onClick = {() => onClickCard(item.id)} 
                image={item.image} 
                title={item.title} 
                data={item.data} 
                local={item.local} 
                id={item.id} 
                key={item.id}/>
            )                  
        })}        
    </div>
    </>
)  
}
export default SearchBar