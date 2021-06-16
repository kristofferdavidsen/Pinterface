import {
	chakra,
	Stack,
	FormControl,
	FormLabel,
	Input,
	Button,
} from "@chakra-ui/react"
import { UserLogin } from "../../interfaces/UserLogin"
import sanitize from "sanitize-html-react"
import { useState } from "react"
import { useRouter } from "next/router"

type LoginProps = {
	setLoggedIn: (arg0: boolean) => boolean
	failedLogin: (errorMsg: string) => void
}

export const LoginForm: React.FC<LoginProps> = ({
	setLoggedIn,
	failedLogin,
}) => {
	const [username, setUsername] = useState<string>()
	const [password, setPassword] = useState<string>()
	const router = useRouter()

	const submitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const user: UserLogin = {
			username: sanitize(username),
			password: sanitize(password),
		}
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
		<chakra.form onSubmit={(e) => submitLogin(e)}>
			<Stack>
				<FormControl id="username">
					<FormLabel>Username</FormLabel>
					<Input
						name="username"
						type="text"
						required
						onChange={(e) => setUsername(e.target.value)}
					/>
				</FormControl>
				<FormControl id="password">
					<FormLabel>Password</FormLabel>
					<Input
						name="password"
						type="password"
						required
						onChange={(e) => setPassword(e.target.value)}
					/>
				</FormControl>
				<Button type="submit" colorScheme="blue" size="lg" fontSize="md">
					Submit
				</Button>
			</Stack>
		</chakra.form>
	)
}
