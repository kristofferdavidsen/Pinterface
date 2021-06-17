import Link from "next/link"
import { useContext } from "react"
import { LoginContext } from "../pages/_app"

const Navbar: React.FC = () => {
	const { loggedIn, setLoggedOut } = useContext(LoginContext)

	return (
		<div className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-dark-blue text-off-white">
			<div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
				<div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
					<Link href="/">
						<a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white">
							Home
						</a>
					</Link>
				</div>
				<div>
					<ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
						<li>
							<Link href="/dashboard">
								<a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
									<span className="ml-2">Dashboard</span>
								</a>
							</Link>
						</li>
						<li>
							{loggedIn ? (
								<Link href="/login">
									<a
										onClick={() => setLoggedOut()}
										className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
									>
										<span className="ml-2">Log out</span>
									</a>
								</Link>
							) : (
								<Link href="/login">
									<a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
										<span className="ml-2">Log in</span>
									</a>
								</Link>
							)}
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
export default Navbar
