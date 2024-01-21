function TableHeader() {
  return (
    <>
      <thead>
        <tr>
          <th
            scope="col"
            className="py-3 pl-5 pr-3 text-left whitespace-nowrap text-sm font-semibold text-gray-600"
          >
            Drug Name
          </th>

          <th
            scope="col"
            className="px-3 py-3 text-left whitespace-nowrap text-sm font-semibold text-gray-600"
          >
            Description
          </th>
          <th
            scope="col"
            className="px-3 py-3 text-left whitespace-nowrap text-sm font-semibold text-gray-600"
          >
            Drug Code
          </th>
          <th
            scope="col"
            className="px-3 py-3 text-left whitespace-nowrap text-sm font-semibold text-gray-600"
          >
            Unit of Pricing
          </th>
          <th
            scope="col"
            className="px-3 py-3 text-left whitespace-nowrap text-sm font-semibold text-gray-600"
          >
            Price
          </th>
          
          <th scope="col" className="relative py-3 text-gray-400 pr-4">
            <span className="sr-only">Edit</span>
          </th>
        </tr>
      </thead>
    </>
  );
}

export { TableHeader };
