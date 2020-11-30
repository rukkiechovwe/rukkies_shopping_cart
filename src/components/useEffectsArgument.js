import React, { useState, useEffect } from 'react'
import "./styles.css"

const url = 'https://api.github.com/users'
const UseEffectsArgument = () => {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const response = await fetch(url);
        const users = await response.json();
        //console.log(users)
        setUsers(users);
    }

    useEffect(() => {
        getUsers()
    }, [])
    return (
        <div>
            <ul className="users">
                {users.map((user) => {
                    const { id, login, avatar_url, html_url } = user
                    return (
                        <li key={id} className="user-list">
                            <img src={avatar_url} alt={login} />
                            <div>
                                <h4>{login}</h4>
                                <a href={html_url} >profile</a>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default UseEffectsArgument
