import React, { useContext } from "react"
import { Box, useColorModeValue, Heading, Text } from "@chakra-ui/react"
import Link from "next/link"
import { LoginCard } from "./LoginCard"
import { LoginForm } from "./LoginForm"

type LoginProps = {
	failedLogin: (errorMsg: string) => void
}

const Login: React.FC<LoginProps> = ({ failedLogin }) => {
	return (
		<Box
			bg={useColorModeValue("#EDF5FA", "inherit")}
			minH="100vh"
			py="12"
			px={{ base: "4", lg: "8" }}
		>
			<Box maxW="md" mx="auto">
				<Heading textAlign="center" size="xl" fontWeight="extrabold">
					Sign in to your account
				</Heading>
				<Text mt="4" mb="8" align="center" maxW="md" fontWeight="medium">
					<Text as="span">Don&apos;t have an account? </Text>
					<Link href="/register">Register here.</Link>
				</Text>
				<LoginCard>
					<LoginForm failedLogin={failedLogin} />
				</LoginCard>
			</Box>
		</Box>
	)
}
export default Login
