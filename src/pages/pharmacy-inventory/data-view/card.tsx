import * as React from "react";
import { Menu, Transition } from "@headlessui/react";
import {
	EyeIcon,
	EllipsisVerticalIcon,
	PencilSquareIcon,
	TrashIcon,
} from "@heroicons/react/24/solid";
import { CardComponentProp } from "./types";
import { classNames } from "../../../components/className";

function Card({
	pharmacyInventory,
	handleViewPharmacyInventory,
	handleUpdatePharmacyInventory,
	handleDeletePharmacyInventory,
}: CardComponentProp) {
	return (
		<React.Fragment>
			<tr className="hover:bg-gray-50" key={pharmacyInventory.id}>
				<td
					onClick={handleViewPharmacyInventory}
					className="whitespace-nowrap py-4 pl-5 pr-3 text-sm"
				>
					<div className="flex text-left">
						<div className="text-gray-900">
							{pharmacyInventory?.drugName}
						</div>
					</div>
				</td>
				<td
					onClick={handleViewPharmacyInventory}
					className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
				>
					<div className="text-gray-900">
						{pharmacyInventory?.description}
					</div>
				</td>

				<td
					onClick={handleViewPharmacyInventory}
					className="whitespace-wrap px-3 py-4 text-sm text-gray-500"
				>
					{pharmacyInventory.drugCode}
				</td>

				<td
					onClick={handleViewPharmacyInventory}
					className="whitespace-wrap px-3 py-4 text-sm text-gray-500"
				>
					{pharmacyInventory.unitOfPricing}
				</td>

				<td
					onClick={handleViewPharmacyInventory}
					className="whitespace-wrap px-3 py-4 text-sm text-gray-500"
				>
					{pharmacyInventory.price}
				</td>

				<td className="px-6 py-4 whitespace-nowrap tracking-tight text-sm text-gray-700 font-lato">
					<Menu
						as="div"
						className="relative flex justify-end items-center"
					>
						{({ open }) => (
							<>
								<Menu.Button className="w-8 h-8 -ml-10 p-1 rounded-full bg-white border border-white">
									<span className="sr-only">
										Open options
									</span>
									<EllipsisVerticalIcon
										className="w-5 h-5 text-gray-500"
										aria-hidden="true"
									/>
								</Menu.Button>
								<Transition
									show={open}
									as={React.Fragment}
									enter="transition ease-out duration-100"
									enterFrom="transform opacity-0 scale-95"
									enterTo="transform opacity-100 scale-100"
									leave="transition ease-in duration-75"
									leaveFrom="transform opacity-100 scale-100"
									leaveTo="transform opacity-0 scale-95"
								>
									<Menu.Items
										static
										className="mx-3 font-lato drop-shadow-lg origin-top-right absolute right-4 -top-12 w-48 mt-1 rounded-xl shadow-lg z-20 bg-white ring-2 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none"
									>
										<div className="py-1">
											<Menu.Item>
												<div
													role="button"
													onClick={
														handleViewPharmacyInventory
													}
													className={
														"text-gray-500 group flex items-center px-4 py-2 hover:text-gray-900 text-sm cursor-pointer"
													}
												>
													<EyeIcon
														className="mr-2 h-4 w-4 text-gray-400 group-hover:text-gray-900"
														aria-hidden="true"
													/>
													View
												</div>
											</Menu.Item>

											<Menu.Item>
												<div
													role="button"
													onClick={
														handleUpdatePharmacyInventory
													}
													className={classNames(
														"text-gray-500 group flex items-center px-4 py-2 hover:text-gray-900 text-sm cursor-pointer"
													)}
												>
													<PencilSquareIcon
														className="mr-2 h-4 w-4 text-gray-400 group-hover:text-gray-900"
														aria-hidden="true"
													/>
													Update
												</div>
											</Menu.Item>

											<Menu.Item>
												<div
													role="button"
													onClick={
														handleDeletePharmacyInventory
													}
													className={classNames(
														"text-red-500 group flex items-center px-4 py-2 hover:text-red-900 text-sm cursor-pointer"
													)}
												>
													<TrashIcon
														className="mr-2 h-4 w-4 text-red-400 group-hover:text-red-900"
														aria-hidden="true"
													/>
													Delete
												</div>
											</Menu.Item>
										</div>
									</Menu.Items>
								</Transition>
							</>
						)}
					</Menu>
				</td>
			</tr>
		</React.Fragment>
	);
}

export { Card };
