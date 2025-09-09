import { createContext } from "react"

interface AuthContextInterface {
    jwt: string
}

const AuthContext = createContext<AuthContextInterface | null>(null)
export default AuthContext
