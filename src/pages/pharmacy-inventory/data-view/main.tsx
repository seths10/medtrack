import * as React from "react";
import { Card } from "./card";
import { TableHeader } from "./table-header";
import { MainDataViewComponentProp, PharmacyInventory } from "./types";

export default function PharmacyInventoryTable({
	pharmacyInventories,
	handleUpdatePharmacyInventory,
	handleDeleteUpdatePharmacyInventory,
	handleViewPharmacyInventory,
}: MainDataViewComponentProp) {
	return (
		<div className="flex flex-col mb-4 w-full">
			<div className="-mx-4 overflow-x-auto  sm:-mx-6 lg:-mx-8">
				<div className="inline-block w-full py-1 align-middle md:px-6 lg:px-8">
					{pharmacyInventories?.length === 0 ? (
						<div className="overflow-hidden rounded-xl ring-black ring-1 ring-opacity-5">
							<div className="flex flex-col justify-center items-center h-[30vh]">
								<div className="text-center">
									<svg
										className="w-12 h-12 mx-auto text-gray-700"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											vectorEffect="non-scaling-stroke"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
										/>
									</svg>
									<h3 className="mt-2 text-base font-medium font-lato text-gray-700">
										No Pharmacy Inventory
									</h3>
									<p className="mt-1 text-sm font-lato text-gray-700">
										Your pharmacy inventories would be seen
										here.
									</p>
								</div>
							</div>
						</div>
					) : (
						<div>
							<div className="overflow-hidden shadow-sm ring-2 bg-gray-100 ring-black ring-opacity-5 md:rounded-xl ">
								<table className="min-w-full  divide-y divide-gray-200">
									<TableHeader />
									<tbody className="bg-white divide-y w-full text-primary divide-gray-200 ">
										{pharmacyInventories?.map(
											(
												pharmacyInventory: PharmacyInventory,
												idx: number
											) => (
												<React.Fragment
													key={pharmacyInventory?.id}
												>
													<Card
														pharmacyInventory={
															pharmacyInventory
														}
														idx={idx}
														handleUpdatePharmacyInventory={() =>
															handleUpdatePharmacyInventory &&
															handleUpdatePharmacyInventory(
																pharmacyInventory
															)
														}
														handleViewPharmacyInventory={() =>
															handleViewPharmacyInventory &&
															handleViewPharmacyInventory(
																pharmacyInventory
															)
														}
														handleDeletePharmacyInventory={() =>
															handleDeleteUpdatePharmacyInventory &&
															handleDeleteUpdatePharmacyInventory(
																pharmacyInventory
															)
														}
													/>
												</React.Fragment>
											)
										)}
									</tbody>
								</table>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
