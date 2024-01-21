/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import { siteTitle } from "../../constants/app";
import { PageLayout } from "../../components/layout";
import { PharmacyInventory } from "./data-view/types";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { pharmacyInventoryData } from "../../data/dummy";
import { TopLoader } from "../../components/shared/Loader";
import { PieChart, Pie, Cell } from "recharts";
import { data, COLORS, renderCustomizedLabel } from "./constants";
import PharmacyInventoryTable from "./data-view";
import Add from "./add/main";

const ViewPharmacyInventory = React.lazy(() => import("./view"));

const PharmacyInventoryComponent = () => {
	React.useEffect(() => {
		document.title = `Pharmacy Inventory | ${siteTitle}`;
	}, []);

	const [showSelectedPharmacyInventory, setShowSelectedPharmacyInventory] =
		React.useState(false);
	const [selectedPharmacyInventory, setSelectedPharmacyInventory] =
		React.useState<PharmacyInventory | undefined>();

	const handleSelectPharmacyInventory = React.useCallback(
		(pharmacyInventory: PharmacyInventory) => {
			setSelectedPharmacyInventory?.(pharmacyInventory);
			setShowSelectedPharmacyInventory(true);
		},
		[setShowSelectedPharmacyInventory, setSelectedPharmacyInventory]
	);

	const handleCloseViewPharmacyInventory = React.useCallback(() => {
		setShowSelectedPharmacyInventory(false);
	}, [setShowSelectedPharmacyInventory]);

	return (
		<PageLayout>
			<main className="absolute top-[4.75rem] inset-x-0 w-[100vw]">
				<div className="py-6">
					<div className="mb-10 flex justify-between px-4 sm:px-6 md:px-8">
						<h1 className="text-2xl font-semibold text-gray-700">
							Pharmacy Inventory
						</h1>

						<div>
							<div className="w-full flex">
								<input
									type="text"
									className="w-full border px-2 py-1 border-r border-r-white focus:ring-1 focus:ring-gray-100 rounded outline-none border-slime-50"
									placeholder="Search for product"
								/>
								<div className="flex -ml-1 py-1 px-2 items-center rounded cursor-pointer bg-gray-900 border">
									<MagnifyingGlassIcon className="w-4 h-4 text-white" />
								</div>
							</div>
						</div>
					</div>

					<Add />

					<div className="flex px-4 mx-auto gap-5 sm:px-6 md:px-8">
						<div className="w-3/4">
							<PharmacyInventoryTable
								pharmacyInventories={pharmacyInventoryData}
								handleViewPharmacyInventory={
									handleSelectPharmacyInventory
								}
								handleUpdatePharmacyInventory={
									handleSelectPharmacyInventory
								}
								handleDeleteUpdatePharmacyInventory={
									handleSelectPharmacyInventory
								}
							/>
						</div>
						<div className="border flex flex-col rounded-xl w-1/4">
							<p className="text-gray-500 px-5 py-3 font-semibold">
								Summary
							</p>
							<div className="flex items-center justify-center">
								<PieChart width={200} height={200}>
									<Pie
										data={data}
										cx={100}
										cy={100}
										labelLine={false}
										label={renderCustomizedLabel}
										outerRadius={80}
										fill="#8884d8"
										dataKey="value"
									>
										{data.map((_, index) => (
											<Cell
												key={`cell-${index}`}
												fill={
													COLORS[
														index % COLORS.length
													]
												}
											/>
										))}
									</Pie>
								</PieChart>
							</div>
						</div>
					</div>
				</div>

				<React.Suspense fallback={<TopLoader />}>
					<ViewPharmacyInventory
						show={showSelectedPharmacyInventory}
						setShow={setShowSelectedPharmacyInventory}
						pharmacyInventory={selectedPharmacyInventory}
						onClose={handleCloseViewPharmacyInventory}
					/>
				</React.Suspense>
			</main>
		</PageLayout>
	);
};

export default PharmacyInventoryComponent;
