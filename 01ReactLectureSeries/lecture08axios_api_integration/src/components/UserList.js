import React, { useEffect, useState } from "react";

import axios from "axios";




function UserList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState(null);


    useEffect(() => {

        axios.get("https://jsonplaceholder.typicode.com/posts/").then((res) => {
            setUsers(res.data);
            setLoading(false)


        }).catch((err) => {
            setErrors("error hai ");
            setLoading(false);

        })



    }, [])

    if (loading) return <p> loading users ....... </p>
    if (errors) return <p> {errors} </p>

    return (
        <div>

            <h2> Json fake User List </h2>

            <ul>

                <table border={1}>

                    <thead><tr>

                        <th>Id</th>
                        <th>User</th>
                        <th>Title</th>
                        <th>Body</th>

                    </tr></thead>

                    {users.map(user => {

                        return <tbody key={user.id} ><tr>
                            <td> {user.id} </td>
                            <td> {user.userId} </td>
                            <td> {user.title} </td>
                            <td> {user.body} </td>
                        </tr></tbody>






                    })}
                </table>



            </ul>



        </div>


    )



}

export default UserList;