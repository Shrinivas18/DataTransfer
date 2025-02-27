import React, { useState } from 'react'
import './AdvancedRegForm.css'

function AdvancedRegForm() {
    const [click,setClick]=useState(false);
    const [formData,setFormData] = useState({
        name:"",
        pnumber:"",
        email:"",
        pass:""
    })

    const handleChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }
    

  return (
    <>
        <h2>Advanced Registration Form</h2>
        <form action="" >
            <div className="input-group">
                <label htmlFor="UserName">Name</label>
                <input id="UserName" name="name" type="text" value={formData.name} onChange={handleChange} />
            </div >
            <div className="input-group">
                <label htmlFor="pn">Phone Number</label>
                <input id="pn" name="pnumber" type='number' value={formData.pnumber}  onChange={handleChange} />
            </div>
            <div className="input-group">
                <label htmlFor="UserMail">Email</label>
                <input id="UserMail" name='email' type="email" value={formData.email} onChange={handleChange}/> 
            </div>
            <div className="input-group">
                <label htmlFor="passkey">Password</label>
                <input id="passkey" name='pass' value={formData.pass} type={click ? "text" : "password"} onChange={handleChange}/>
            </div>
            {click ? <button type='button' onClick={()=>setClick(false)}>Hide</button>:  <button type='button' onClick={()=>setClick(true)}>show</button> }
        </form>

        <table>
            <thead>
                <tr>
                    <th>Property</th>
                    <th>Detail</th>
                </tr>
            </thead>
            <tbody>
                {Object.entries(formData).map(([Key,value],index)=>
                <tr key={index}>
                    <td>{Key}</td>
                    <td>{value}</td>
                </tr>
                )}
                
            </tbody>
        </table>
            
        </>
  )


}

export default AdvancedRegForm