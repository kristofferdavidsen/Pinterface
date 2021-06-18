import {
	chakra,
	Stack,
	FormControl,
	FormLabel,
	Input,
	Button,
	CircularProgress,
} from "@chakra-ui/react"
import { UserLogin } from "../../interfaces/UserLogin"
import sanitize from "sanitize-html-react"
import { useState } from "react"
import { useRouter } from "next/router"

type LoginProps = {
	setLoggedIn: (arg0: boolean) => void
	failedLogin: (errorMsg: string) => void
}

export const LoginForm: React.FC<LoginProps> = ({
	setLoggedIn,
	failedLogin,
}) => {
	const [username, setUsername] = useState<string>()
	const [password, setPassword] = useState<string>()
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const router = useRouter()

	const submitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setIsLoading(true)
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
			setTimeout(() => {
				router.push("/dashboard")
			}, 500)
		} else {
			failedLogin("Wrong username or password")
			setIsLoading(false)
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
					{isLoading ? (
						<CircularProgress isIndeterminate color="azure" />
					) : (
						"Log in"
					)}
				</Button>
			</Stack>
		</chakra.form>
	)
}
