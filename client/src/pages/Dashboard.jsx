import {useContext} from "react"
import { UserContext } from "../context/userContext"

export default function Dashboard(){
    const {user} =useContext(UserContext)
    return (
        <div>
            <h1>dashboard</h1>
            {!!user && (<h1>{user.name}</h1>)}
        </div>
    )
}