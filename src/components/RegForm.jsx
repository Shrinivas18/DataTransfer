
import React, { use, useState } from 'react'
import '../App.css'
function RegForm() {
    const [click,setClick]=useState(false);
    const [name,setName]=useState("");
    const [pnumber,setpnumber]=useState(null);
    const [email,setemail]=useState("");
    const [pass,setpass]=useState("");
    

  return (
    <div>
        <h2>Regular Registration Form</h2>
        <form action="" >
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" onChange={(e)=>setName(e.target.value)} />
            <br />
            <label htmlFor="pnumber">Phone Number</label>
            <input id="pnumber" name="phonenumber" type='number' onChange={(e)=>setpnumber(e.target.value)} />
            <br />
            <label htmlFor="email">Email</label>
            <input id="email" name='email' type="email" onChange={(e)=>setemail(e.target.value)}/>
            <br />
            <label htmlFor="pass">Password</label>
            <input id="pass" name='pass' type={click ? "text" : "password"} onChange={(e)=>setpass(e.target.value)}/>
            
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
                <tr>
                    <td>Name</td>
                    <td>{name}</td>
                </tr>
                <tr>
                    <td>Phone Number</td>
                    <td>{pnumber}</td>
                </tr>
                <tr>
                    <td>Usermail</td>
                    <td>{email}</td>
                </tr>
                <tr>
                    <td>Password</td>
                    <td>{pass}</td>
                </tr>
            </tbody>
        </table>
            
    </div>
  )
}

export default RegForm