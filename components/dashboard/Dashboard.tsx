import { Box, CircularProgress, Heading, useColorModeValue } from "@chakra-ui/react"
import { useContext } from "react"
import useSWR from "swr"
import { LoginContext } from "../../pages/_app"
import { useUser } from "../../util/swr"
import { DeviceAccordion } from "./DeviceAccordion"

type DashboardProps = {
}

export const Dashboard: React.FC<DashboardProps> = () => {

    const { user } = useContext(LoginContext)
    const { devices, isLoading, isError } = useUser(user)

    return (
        <Box bg={useColorModeValue("EDF5FA", "inherit")} minH="100vh" py="12" px={{ base: "4", lg: "8" }}>
            <Box maxW="lg" width="auto">
                <Heading mt="4" mb="8" textAlign="center" size="xl" fontWeight="extrabold">Dashboard</Heading>
                {isLoading ? <CircularProgress isIndeterminate color="azure"/> : <DeviceAccordion devices={devices} isLoading={isLoading} />}
            </Box>
    </Box>
    )
}