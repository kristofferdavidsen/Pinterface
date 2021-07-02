import {
	chakra,
	Stack,
	FormControl,
	FormLabel,
	Input,
	Button,
	CircularProgress,
	useBoolean,
	useToast,
} from "@chakra-ui/react"
import { UserLogin } from "../../interfaces/UserLogin"
import { useContext, useState } from "react"
import { useRouter } from "next/router"
import Cookies from "js-cookie"

type LoginProps = {
	failedLogin: (errorMsg: string) => void
}

export const LoginForm: React.FC<LoginProps> = ({ failedLogin }) => {
	const [username, setUsername] = useState<string>()
	const [password, setPassword] = useState<string>()
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const router = useRouter()
	const [flag, setFlag] = useBoolean()
	const toast = useToast()

	const checkUsername = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setIsLoading(true)
		if (username.length > 1 && !username.includes(" ")) {
			setFlag.on()
		} else {
			toast({
				title: "Username input contains errors.",
				duration: 4000,
				status: "error",
				position: "top",
			})
		}
		setIsLoading(false)
	}

	const submitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setIsLoading(true)

		const user: UserLogin = {
			username: username,
			password: password,
		}

		const res: Response = await fetch("/api/login", {
			method: "POST",
			body: JSON.stringify(user),
			mode: "no-cors",
			headers: {
				"Content-Type": "application/json",
			},
		})
		const body = await res.json()
		if (body.success && body.token) {
			Cookies.set("token", body.token, { secure: true, sameSite: "lax" })
			setTimeout(() => {
				router.push("/dashboard")
			}, 500)
		} else {
			failedLogin("Wrong username or password")
			setIsLoading(false)
		}
	}

	return (
		<chakra.form onSubmit={(e) => (flag ? submitLogin(e) : checkUsername(e))}>
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
				{flag && (
					<FormControl id="password">
						<FormLabel>Password</FormLabel>
						<Input
							name="password"
							type="password"
							required
							onChange={(e) => setPassword(e.target.value)}
						/>
					</FormControl>
				)}
				<Button type="submit" colorScheme="blue" size="lg" fontSize="md">
					{isLoading ? (
						<CircularProgress isIndeterminate className="p-2" color="#EDF5FA" />
					) : flag ? (
						"Log in"
					) : (
						"Next"
					)}
				</Button>
			</Stack>
		</chakra.form>
	)
}
