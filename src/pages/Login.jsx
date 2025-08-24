import {useState} from "react"
import {useAuth} from "../hooks/useAuth"
import {apiClient} from "../utils/apiClient"

export default function Login() {
    const {login} = useAuth()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async(e) => {
        e.preventDefault()
        const res = await apiClient.post("/api/v1/login", {email, password})
        login(res.data.token)
        window.location.href="/timeline"
    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Login</button>
        </form>
    )
}