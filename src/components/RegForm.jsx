
import React, { useState } from 'react'

function RegForm() {
    const [click,setClick]=useState(false);

  return (
    <div>
        <form action="" >
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" />
            <br />
            <label htmlFor="pnumber">Phone Number</label>
            <input id="pnumber" name="phonenumber" type='number' />
            <br />
            <label htmlFor="email">Email</label>
            <input id="email" name='email' type="email" />
            <br />
            <label htmlFor="pass">Password</label>
            <input id="pass" name='pass' type={click ? "text" : "password"}/>
            
            {click ? <button type='button' onClick={()=>setClick(false)}>Hide</button>:  <button type='button' onClick={()=>setClick(true)}>show</button> }
        </form>
            
    </div>
  )
}

export default RegForm