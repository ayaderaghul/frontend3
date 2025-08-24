import {useState} from "react"
import {useAuth} from "../hooks/useAuth.jsx"
import {apiClient} from "../utils/apiClient"

export default function Signup() {
    const {saveToken} = useAuth()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")

    const handleSubmit = async(e) => {
        e.preventDefault()
        const res = await apiClient.post("/api/v1/signup", {email, password, username})
        saveToken(res.data.token)
        window.location.href="/login"
    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
            <button type="submit">Login</button>
        </form>
    )
}