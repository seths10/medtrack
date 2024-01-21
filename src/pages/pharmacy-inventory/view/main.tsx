import { Personal } from "./components";
import { ViewPharmacyInventoryProp } from "./types";
import Modal from "../../../components/modal";

const MainComponent = ({
	show,
	setShow,
	onClose,
	pharmacyInventory,
}: ViewPharmacyInventoryProp) => {
	return (
		<Modal show={show} setShow={setShow} size={40}>
			<div className="">
				<div className="md:flex md:items-center border-b border-gray-200 md:justify-between md:space-x-5 -mt-3 pr-5">
					<div className="flex items-center mb-2 space-x-3">
						<div>
							<h1 className="text-xl font-bold text-gray-900">
								Drug Information
							</h1>
							<p className="text-sm font-medium text-gray-500">
								Details of your drug
							</p>
						</div>
					</div>
				</div>
				<div className="mt-3 mb-3">
					<Personal pharmacyInventory={pharmacyInventory} />
				</div>

				<div className="flex flex-row justify-between mt-8 space-x-3">
					<button
						type="button"
						onClick={onClose}
						className="flex items-center justify-center w-full px-3 py-2 text-sm transition font-normal duration-150 ease-in-out bg-white border rounded-lg text-red-500 underline font-lato focus:shadow-outline-red focus:outline-none hover:bg-white hover:text-red-600 focus:border-red-700 active:bg-gray-100"
					>
						<span className="mx-1">Close</span>
					</button>
				</div>
			</div>
		</Modal>
	);
};

export default MainComponent;
