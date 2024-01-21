import * as React from "react";
import { siteTitle } from "../../constants/app";
import { PageLayout } from "../../components/layout";

const LaboratoryInventory = () => {
	React.useEffect(() => {
		document.title = `Laboratory Inventory | ${siteTitle}`;
	}, []);

	return (
		<PageLayout>
			<main className="flex-1">
				<div className="py-6">
					<div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
						<h1 className="mb-2 text-2xl font-semibold text-tailwindGray-700">
							Laboratory Inventory
						</h1>
					</div>
				</div>
			</main>
		</PageLayout>
	);
};

export default LaboratoryInventory;
