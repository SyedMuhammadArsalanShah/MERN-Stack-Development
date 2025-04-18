import React from "react";




function UserCard(props) {

    return <div style={{ color: "teal", border: "1px solid red", margin: "10px", padding: "10px" }}>

        <h3>Name : {props.name}</h3>
        <p> Message : {props.message} </p>

    </div>


}


export default UserCard;