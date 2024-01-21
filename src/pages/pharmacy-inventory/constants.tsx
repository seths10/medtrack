/* eslint-disable @typescript-eslint/no-explicit-any */
export const data = [
	{ name: "Group A", value: 400 },
	{ name: "Group B", value: 300 },
	{ name: "Group C", value: 300 },
	{ name: "Group D", value: 200 },
];

export type SearchFormInput = {
	drugName: string;
	description: string;
	unitOfPricing: string;
	username: string;
	drugCode: number;
	price: number;
};

export const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export const RADIAN = Math.PI / 180;

export const renderCustomizedLabel = ({
	cx,
	cy,
	midAngle,
	innerRadius,
	outerRadius,
	percent,
}: any) => {
	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
	const x = cx + radius * Math.cos(-midAngle * RADIAN);
	const y = cy + radius * Math.sin(-midAngle * RADIAN);

	return (
		<text
			x={x}
			y={y}
			fill="white"
			textAnchor={x > cx ? "start" : "end"}
			dominantBaseline="central"
		>
			{`${(percent * 100).toFixed(0)}%`}
		</text>
	);
};
