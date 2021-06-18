import {
	chakra,
	FormControl,
	FormHelperText,
	FormLabel,
	Input,
	Stack,
	FormErrorMessage,
	Button,
	CircularProgress,
} from "@chakra-ui/react"
import { useState } from "react"

/*
 * Needs sanitising and encryption
 */

export const RegistrationForm: React.FC = () => {
	const [username, setUsername] = useState<string>("")
	const [password, setPassword] = useState<string>("")
	const [passwordrepeat, setPasswordrepeat] = useState<string>("")
	const [email, setEmail] = useState<string>("")
	const [isLoading, setIsLoading] = useState<boolean>(false)

	return (
		<chakra.form>
			<Stack>
				<FormControl id="username">
					<FormLabel as="legend">Choose a username</FormLabel>
					<Input
						isRequired
						placeholder="Username"
						type="text"
						onChange={(e) => setUsername(e.target.value)}
					/>
					<FormHelperText>
						The username is used for login purposes.
					</FormHelperText>
					<FormErrorMessage>
						Username is not available, please choose a different name.
					</FormErrorMessage>
				</FormControl>
				<FormControl id="email">
					<FormLabel as="legend">Add your email</FormLabel>
					<Input
						type="email"
						placeholder="Email"
						onChange={(e) => {
							setEmail(e.target.value)
						}}
					/>
					<FormHelperText>
						Add your email for alert purposes, not required.
					</FormHelperText>
					<FormErrorMessage>Email format is incorrect.</FormErrorMessage>
				</FormControl>
				<FormControl id="password">
					<FormLabel as="legend">Set a password</FormLabel>
					<Input
						isRequired
						placeholder="Password"
						type="password"
						onChange={(e) => {
							setPassword(e.target.value)
						}}
					/>
					<FormHelperText> Minimum 8, maximum 25 characters.</FormHelperText>
					<FormErrorMessage>
						Password does not meet requirements.
					</FormErrorMessage>
				</FormControl>
				<FormControl id="passwordrepeat">
					<FormLabel as="legend">Repeat password</FormLabel>
					<Input
						isRequired
						placeholder="Repeat password"
						type="password"
						onChange={(e) => {
							setPasswordrepeat(e.target.value)
						}}
					/>
					<FormErrorMessage>Passwords are not equal.</FormErrorMessage>
				</FormControl>
				<Button type="submit" colorScheme="blue" size="lg" fontSize="md">
					{isLoading ? (
						<CircularProgress isIndeterminate size="24px" />
					) : (
						"Submit"
					)}
				</Button>
			</Stack>
		</chakra.form>
	)
}
