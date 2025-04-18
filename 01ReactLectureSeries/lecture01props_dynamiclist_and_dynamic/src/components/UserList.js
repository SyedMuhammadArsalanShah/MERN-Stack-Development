import React from "react";
import UserCard from "./UserCard";




function UserList() {

    const users = [
        { name: "ALI", message: "React class day1" },
        { name: "Saaria", message: "React class day2" },
        { name: "Hadi", message: "React class day3" },
        { name: "Yousuf", message: "React class day4" },
    ]

    return <div>

        {
            users.map((user, index) => (
                <UserCard key={index} name={user.name} message={user.message} />

            ))
        }

    </div>


}


export default UserList;