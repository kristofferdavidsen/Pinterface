import Link from "next/link"

const Navbar: React.FC = () => {
	return (
		<div className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-dark-blue text-off-white mb-3">
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
						<li className="nav-item">
							<Link href="/dashboard">
								<a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
									<span className="ml-2">Dashboard</span>
								</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
export default Navbar
