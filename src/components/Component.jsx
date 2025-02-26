/* eslint-disable react/prop-types */
import { useState } from 'react';
import '../App.css';

// eslint-disable-next-line react/prop-types
function Component({name,BankDetails}) {
    const [selectedValue, setSelectedValue]=useState("");

    const handleChange = (event)=>{
        setSelectedValue(event.target.value)
    }

    const BankDetailsArray = Object.entries({
        ...BankDetails, 
        AmountDetails: BankDetails.AmountDetails()
      });

  return (
    <>
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
          <h2>Selected Value: {selectedValue}</h2>
    </div>
    <div>
        <table>
            <thead>
                <tr>
                    <th>Property</th>
                    <th>Details</th>
                </tr>
            </thead>
            <tbody>
                {BankDetailsArray?.map(([key,value],index)=>(
                <tr key={index}>
                    <td>{key}</td>
                    <td>{value}</td>
                </tr>
                ))}  
                
            </tbody>
        </table>
    </div>
    </>
  )
}

export default Component