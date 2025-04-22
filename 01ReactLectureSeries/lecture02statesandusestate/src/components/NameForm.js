import React, { useState } from "react";



function NameForm() {
    const [name, setName] = useState('');

    return (
        <div>


    <input type="text"  placeholder="Enter Your Name" value={name} onChange={(e)=>setName(e.target.value)}/>
        
        <p> Assalam Alikum {name || "Guest"} </p>
        
        </div>
    );

}

export default NameForm;