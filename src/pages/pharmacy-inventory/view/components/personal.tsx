import { Logo } from "../../../../assets";
import { PharmacyInventory } from "../../data-view/types";

type Props = {
  pharmacyInventory?: PharmacyInventory;
};

const Personal = ({ pharmacyInventory }: Props) => {
  return (
    <div className="py-0.5 mt-3">
      <dl className="grid grid-cols-1 gap-x-2 gap-y-4 sm:grid-cols-2">
        <div className="bg-gray-50 py-4 px-4 rounded sm:col-span-2 flex flex-row items-center gap-10">
          <div>
            <img src={Logo} alt="logo" className="w-6" />
          </div>

          <div>
            <h1 className="text-lg font-bold text-gray-900">
              {pharmacyInventory?.drugName}
            </h1>
            <p className="text-xs font-medium text-gray-500">
              Drug Name
            </p>
          </div>
        </div>

        <div className="sm:col-span-1">
          <dt className="text-sm font-medium text-gray-500">
            Drug Code
          </dt>
          <dd className="mt-1 text-sm text-gray-900">
            {pharmacyInventory?.drugCode}
          </dd>
        </div>

        <div className="sm:col-span-1">
          <dt className="text-sm font-medium text-gray-500">
            Description
          </dt>
          <dd className="mt-1 text-sm text-gray-900">
            {pharmacyInventory?.description}
          </dd>
        </div>

        <div className="sm:col-span-1">
          <dt className="text-sm font-medium text-gray-500">
            Unit of Pricing
          </dt>
          <dd className="mt-1 text-sm text-gray-900">
            {pharmacyInventory?.unitOfPricing}
          </dd>
        </div>

        <div className="sm:col-span-1">
          <dt className="text-sm font-medium text-gray-500">
            Price
          </dt>
          <dd className="mt-1 text-sm text-gray-900">
            {pharmacyInventory?.price}
          </dd>
        </div>
      </dl>
    </div>
  );
};

export { Personal };
