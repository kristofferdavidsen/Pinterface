import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Text,
	Button,
	CircularProgress,
} from "@chakra-ui/react"
import { useState } from "react"

type ModalProps = {
	isOpen: boolean
	onClose: () => void
	submit: () => Promise<void>
	data: {
		username: string
		email: string
	}
}

export const ConfirmationModal: React.FC<ModalProps> = ({
	isOpen,
	onClose,
	submit,
	data,
}) => {
	const [isLoading, setIsLoading] = useState<boolean>(false)

	return (
		<>
			<Modal onClose={onClose} isOpen={isOpen}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Confirmation</ModalHeader>
					<ModalBody>
						<Text size="xl" color="tomato">
							Username: {data.username}
						</Text>
						<Text size="xl" color="tomato">
							Email: {data.email}
						</Text>
					</ModalBody>
					<ModalFooter>
						<Button
							colorScheme="blue"
							onClick={() => {
								submit()
								onClose()
							}}
						>
							{isLoading ? (
								<CircularProgress
									isIndeterminate
									className="p-2"
									color="#EDF5FA"
								/>
							) : (
								"Confirm"
							)}
						</Button>
						<Button onClick={onClose} variant="ghost">
							Cancel
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	)
}
