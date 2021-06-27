import {
	Box,
	Heading,
	Container,
	Text,
	Button,
	Stack,
	useColorModeValue,
	HStack,
} from "@chakra-ui/react"
import { useRouter } from "next/router"

export const Hero: React.FC<{}> = ({}) => {
	const router = useRouter()

	const text = useColorModeValue("gray.900", "gray.100")
	const stext = useColorModeValue("orange.700", "orange.300")

	return (
		<Container maxW={"5xl"}>
			<Stack
				as={Box}
				textAlign="center"
				spacing={{ base: 8, md: 14 }}
				py={{ base: 20, md: 36 }}
			>
				<Heading
					fontWeight={600}
					fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
					lineHeight={"110%"}
				>
					Keep track of sensor data from your
					<br />
					<Text as="span" color={stext}>
						Raspberry Pi!
					</Text>
				</Heading>
				<Text as="span" color={text}>
					This application lets you view sensory data read from a Raspberry Pi,
					or a similar device. You can set your own read intervals, collect
					statistics and receive alerts.
				</Text>
				<HStack
					spacing={10}
					align="center"
					alignSelf="center"
					position="relative"
				>
					<Button
						variant="outline"
						colorScheme="blue"
						onClick={() => router.push("/register")}
						aria-label="Register your account!"
					>
						Register your account!
					</Button>
					<Button
						variant="link"
						colorScheme="gray"
						onClick={() => router.push("/info?red=index")}
						aria-label="Learn more"
					>
						Learn more
					</Button>
				</HStack>
			</Stack>
		</Container>
	)
}
