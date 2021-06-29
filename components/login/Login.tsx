import React from "react"
import {
	Box,
	Link,
	useColorModeValue,
	Button,
	Heading,
	Text,
} from "@chakra-ui/react"
import NextLink from "next/link"
import { LoginCard } from "./LoginCard"
import { LoginForm } from "./LoginForm"

type LoginProps = {
	failedLogin: (errorMsg: string) => void
}

const Login: React.FC<LoginProps> = ({ failedLogin }) => {
	const text = useColorModeValue("gray.900", "gray.100")
	return (
		<Box minH="100vh" py="12" px={{ base: "4", lg: "8" }}>
			<Box maxW="md" mx="auto" color={text}>
				<Heading textAlign="center" size="xl" fontWeight="extrabold">
					Sign in to your account
				</Heading>
				<Text mt="4" mb="8" align="center" maxW="md" fontWeight="medium">
					<Text as="span">Don&apos;t have an account? </Text>
					<NextLink href="/register" passHref>
						<Button as={Link} variant="link" color="inherit">
							Register here.
						</Button>
					</NextLink>
				</Text>
				<LoginCard>
					<LoginForm failedLogin={failedLogin} />
				</LoginCard>
			</Box>
		</Box>
	)
}
export default Login
