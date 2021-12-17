import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import '../User.css'

export default function UserDetails() {

    const [user, setUser] = useState([])
    const { userid } = useParams();

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${userid}` )
        .then(res => {
            console.log(res.data)
            setUser(res.data)         
        })
    }, [userid])
    if(user.length == 0){
        return(<span>Loading...</span>)
    }
    return (

        <div class="center">
            <div class="property-card">
                <div class="property-description">
                    <h4> {user.name} </h4>
                    <p> Email : {user.email} </p>
                    <p> Adresse : {user.address.street},{user.address.suite} ,{user.address.city} ,{user.address.zipcode} </p>
                    <p> Tel : {user.phone} </p>
                    <p> Site : {user.website} </p>
                    <p> Société : {user.company.name} </p>
                </div>
            </div>
        </div>
    )
}