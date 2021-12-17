import axios from "axios"
import { useEffect, useState } from "react"
import '../Users.css'

import {Link} from 'react-router-dom';

export default function Users() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            console.log(res.data)
            setUsers(res.data)         
        })
    }, [])

    return (
        <div class="container">
            <div class="card__container">
            {users.map(user =>(
                     <div className="card" key={user.id}>
                        <div className="card__content">
                        <h3 class="card__header">{user.name} </h3>
                            <Link to={"/users/" + user.id} className="card__button">view user details</Link>
                        </div>
                    </div>
                    ))
                }
               
            </div>
        </div>

    )
}
