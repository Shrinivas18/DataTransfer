import { useState } from 'react';
import './App.css';

// eslint-disable-next-line react/prop-types
function Component({name}) {
    const [selectedValue, setSelectedValue]=useState("");

    const handleChange = (event)=>{
        setSelectedValue(event.target.value)
    }
  return (
    <div>
        <select value={selectedValue} onChange={handleChange}>
         <option value="">Select an option</option> 
        {
            // eslint-disable-next-line react/prop-types
            name.map((option, index) => (
           <option key={index} value={option}>  
           {option}
          </option>
        ))}
        </select>
        <h1>Selected Value: {selectedValue}</h1>
    </div>
  )
}

export default Component