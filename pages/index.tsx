import { useEffect } from "react"
import Navbar from "../components/Navbar"
import toast, { Toaster } from "react-hot-toast"
import Head from "next/head"

const Home: React.FC = () => {
	useEffect(() => {
		const cookieItem = window.localStorage.getItem("cookie-info")
		if (!cookieItem) {
			toast(
				(t) => (
					<div className="grid grid-flow-col grid-cols-3">
						<span className="col-span-2">
							This site stores cookies and data in your browser for a better
							user experience =).
						</span>
						<button
							className="ml-2 p-2 bg-gray-200 border-black border-2 active:bg-gray-400 rounded-md flex-1"
							onClick={() => toast.dismiss(t.id)}
						>
							Dismiss
						</button>
					</div>
				),
				{
					duration: 10000,
					icon: (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
					),
				}
			)
			window.localStorage.setItem("cookie-info", String(true))
		}
	})

	return (
		<>
			<div>
				<Toaster position="top-center" />
			</div>
			<Head>
				<title>Index - Pinterface</title>
				<meta
					name="viewport"
					content="initial-scale:1.0, width=device-width"
				></meta>
			</Head>
			<Navbar />
			<p>Home</p>
		</>
	)
}
export default Home
