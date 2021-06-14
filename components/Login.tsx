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
			router.push("/dashboard")
		} else {
			failedLogin("Wrong username or password")
		}
	}

	return (
		<div
			className={`flex flex-col rounded-lg shadow-lg overflow-hidden
            mb-3 transition duration-500 max-w-md`}
		>
			<div className="flex-1 bg-white p-6 flex flex-col justify-between">
				<form
					onSubmit={(e: React.FormEvent<HTMLFormElement>) => submitLogin(e)}
				>
					<div className="grid grid-flow-row max-w-xs">
						<label className="p-2">Username:</label>
						<input
							type="text"
							name="username"
							onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
								setUsername(e.target.value)
							}
							className="border-black border-2"
						/>
						<label className="p-2">Password:</label>
						<input
							type="password"
							name="password"
							onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
								setPassword(e.target.value)
							}
							className="border-black border-2"
						/>
					</div>
					<div className="flex mt-6 items-center justify-between">
						<div className="">
							<input
								type="submit"
								value="Submit"
								className="cursor-pointer rounded-md bg-gray-200 p-2 border-black border-2 active:bg-gray-400"
							/>
						</div>
					</div>
				</form>
			</div>
		</div>
	)
}
export default Login
