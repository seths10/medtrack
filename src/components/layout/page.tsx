import * as React from "react";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Logo } from "../../assets";
import { Link } from "react-router-dom";
import {
	LABORATORY_INVENTORY,
	LANDING,
	PHARMACY_INVENTORY,
} from "../../navigation/routes-constants";

const navigation = [
	{ name: "Home", href: LANDING },
	{ name: "Pharmacy Inventory", href: PHARMACY_INVENTORY },
	{ name: "Laboratory Inventory", href: LABORATORY_INVENTORY },
];

type Props = {
	children: React.ReactNode;
};

const PageLayout: React.FC<Props> = ({ children }) => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [selectedLink, setSelectedLink] = useState("");

	return (
		<div>
			<div className="bg-white">
				<header className="absolute border-b border-slime-50 inset-x-0 top-0 z-50">
					<nav
						className="flex items-center justify-between p-5 lg:px-8"
						aria-label="Global"
					>
						<div className="flex lg:flex-1">
							<a href="#" className="-m-1.5 p-1.5">
								<span className="sr-only">MedTrack</span>
								<img className="h-6 w-auto" src={Logo} alt="" />
							</a>
						</div>
						<div className="flex lg:hidden">
							<button
								type="button"
								className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
								onClick={() => setMobileMenuOpen(true)}
							>
								<span className="sr-only">Open main menu</span>
								<Bars3Icon
									className="h-6 w-6"
									aria-hidden="true"
								/>
							</button>
						</div>
						<div className="hidden lg:flex lg:gap-x-12">
							{navigation.map((item) => (
								<Link
									key={item.name}
									to={item.href}
									onClick={() => setSelectedLink(item.name)}
									className={`-mx-3 block rounded-lg px-3 py-1 text-base font-semibold leading-7 ${
										item.name === selectedLink
											? "border-blue-500 text-blue-500"
											: "text-gray-900 hover:bg-gray-50"
									}`}
								>
									{item.name}
								</Link>
							))}
						</div>
						<div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
					</nav>
					<Dialog
						as="div"
						className="lg:hidden"
						open={mobileMenuOpen}
						onClose={setMobileMenuOpen}
					>
						<div className="fixed inset-0 z-50" />
						<Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
							<div className="flex items-center justify-between">
								<a href="#" className="-m-1.5 p-1.5">
									<span className="sr-only">MedTrack</span>
									<img
										className="h-8 w-auto"
										src={Logo}
										alt=""
									/>
								</a>
								<button
									type="button"
									className="-m-2.5 rounded-md p-2.5 text-gray-700"
									onClick={() => setMobileMenuOpen(false)}
								>
									<span className="sr-only">Close menu</span>
									<XMarkIcon
										className="h-6 w-6"
										aria-hidden="true"
									/>
								</button>
							</div>
							<div className="mt-6 flow-root">
								<div className="-my-6 divide-y divide-gray-500/10">
									<div className="space-y-2 py-6">
										{navigation.map((item) => (
											<a
												key={item.name}
												href={item.href}
												className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
											>
												{item.name}
											</a>
										))}
									</div>
									<div className="py-6"></div>
								</div>
							</div>
						</Dialog.Panel>
					</Dialog>
				</header>
			</div>
			{children}
		</div>
	);
};

export { PageLayout };
