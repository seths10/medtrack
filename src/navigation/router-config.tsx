import * as React from "react";
import { Route, Routes } from "react-router-dom";
import {
	LANDING,
	LABORATORY_INVENTORY,
	PHARMACY_INVENTORY,
} from "./routes-constants";
import { TopLoader } from "../components/shared/Loader";

// lazy imports for pages
const DashboardScreen = React.lazy(() => import("../pages/dashboard"));
const LaboratoryInventoryScreen = React.lazy(
	() => import("../pages/laboratory-inventory")
);
const PharmacyInventoryScreen = React.lazy(
	() => import("../pages/pharmacy-inventory")
);

const RouterConfig = () => {
	return (
		<React.Fragment>
			{/* HashRouter has been declared in index.tsx in root directory */}
			<React.Suspense fallback={TopLoader()}>
				<Routes>
					<Route
						index
						path={LANDING}
						element={
							<React.Suspense fallback={TopLoader()}>
								<DashboardScreen />
							</React.Suspense>
						}
					/>

					<Route
						path={LABORATORY_INVENTORY}
						element={
							<React.Suspense fallback={TopLoader()}>
								<LaboratoryInventoryScreen />
							</React.Suspense>
						}
					/>

					<Route
						path={PHARMACY_INVENTORY}
						element={
							<React.Suspense fallback={TopLoader()}>
								<PharmacyInventoryScreen />
							</React.Suspense>
						}
					/>
				</Routes>
			</React.Suspense>
		</React.Fragment>
	);
};

export default RouterConfig;
