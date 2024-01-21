/* eslint-disable @typescript-eslint/no-explicit-any */
import { TextInput } from "../../../components/input";
import { SearchFormInput } from "../constants";
import { useForm } from "react-hook-form";
import { classNames } from "../../../components/className";
import { PlusIcon } from "@heroicons/react/24/solid";

const Add = () => {
	const { register } = useForm<SearchFormInput>();

	return (
		<div className="px-4 mx-auto mt-4 sm:px-6 md:px-8">
			<form>
				<div className="overflow-hidden mb-5 shadow-sm ring-2 bg-gray-100 ring-black ring-opacity-5 md:rounded-xl ">
					<div>
						<div className="flex justify-between px-6 py-3 items-center">
							<p className="text-lg font-semibold text-gray-500">
								Add New Drug
							</p>
							<button
								type="submit"
								className={classNames(
									"flex text-white text-sm bg-gray-900 hover:bg-gray-800 rounded-lg"
								)}
							>
								<div className="flex items-center gap-1">
									<PlusIcon className="w-4 h-4 text-white" />
									Add
								</div>
							</button>
						</div>
					</div>

					<div className="bg-white">
						<div className="px-6 py-4">
							<div className="grid md:grid-cols-5 gap-4 grid-cols-1">
								<div>
									<TextInput
										id="drugName"
										label={"Drug Name"}
										placeholder="Type drug name here"
										{...register("drugName")}
										type="text"
									/>
								</div>

								<div>
									<TextInput
										id="drugCode"
										label={"Drug Code"}
										placeholder="Aoc123FH"
										{...register("drugCode")}
										type="text"
									/>
								</div>

								<div>
									<TextInput
										id="description"
										label={"Description"}
										placeholder="drug description"
										{...register("description")}
										type="text"
									/>
								</div>

								<div>
									<TextInput
										id="unitOfPricing"
										label={"Unit of Pricing"}
										placeholder="Tablet"
										{...register("unitOfPricing")}
										type="text"
									/>
								</div>

								<div>
									<TextInput
										id="price"
										label={"Price"}
										placeholder="2.02"
										{...register("price")}
										type="number"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Add;
