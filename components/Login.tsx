import { useState } from "react"
import { connectToDatabase } from "../util/mongodb"

type LoginProps = {
	setLoggedIn: () => boolean
}

const Login: React.FC<LoginProps> = ({ setLoggedIn }) => {
	const [username, setUsername] = useState<string>()
	const [password, setPassword] = useState<string>()

	const submitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		return true
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
