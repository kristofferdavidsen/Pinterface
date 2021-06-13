import { useRouter } from "next/router"
import { useState } from "react"
import { User } from "../interfaces/User"

type LoginProps = {
	setLoggedIn: (arg0: boolean) => boolean
	failedLogin: (errorMsg: string) => void
}

const Login: React.FC<LoginProps> = ({ setLoggedIn, failedLogin }) => {
	const [username, setUsername] = useState<string>()
	const [password, setPassword] = useState<string>()
	const router = useRouter()

	const submitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const user: User = { username: username, password: password }
		const res: Response = await fetch("/api/login", {
			method: "POST",
			body: JSON.stringify(user),
			mode: "no-cors",
			headers: {
				"Content-Type": "application/json",
			},
		})
		if (res.ok) {
			setLoggedIn(true)
			router.push("/dashboard?loggedIn=1")
		} else {
			failedLogin("Wrong username or password")
		}
	}

	return (
		<>
			<div className="container">
				<div className="">
					<form
						onSubmit={(e: React.FormEvent<HTMLFormElement>) => submitLogin(e)}
					>
						<label>
							Username:
							<input
								type="text"
								name="username"
								onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
									setUsername(e.target.value)
								}
							/>
						</label>
						<label>
							Password:
							<input
								type="password"
								name="password"
								onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
									setPassword(e.target.value)
								}
							/>
						</label>
						<input type="submit" value="Submit" />
					</form>
				</div>
			</div>
		</>
	)
}
export default Login
