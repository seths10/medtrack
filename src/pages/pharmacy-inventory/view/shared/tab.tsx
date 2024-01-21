import {
	DocumentMagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import { classNames } from "../../../../components/className";
import { ForwardRefExoticComponent, RefAttributes, SVGProps } from "react";

export type TransactionsTabState = "personal";

type Props = {
	activeState: TransactionsTabState;
	handleChangeTab: (args: TransactionsTabState) => void;
};

export type TransactionsTabList = {
	name: string;
	icon: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & { title?: string | undefined; titleId?: string | undefined; } & RefAttributes<SVGSVGElement>>;
	value: TransactionsTabState;
};

const tabs: TransactionsTabList[] = [
	{ name: "Details", value: "personal", icon: DocumentMagnifyingGlassIcon },
];

export function Tab({ activeState, handleChangeTab }: Props) {
	return (
		<div>
			<div className="hidden sm:block">
				<div className="border-b border-gray-200">
					<nav className="flex -mb-px space-x-5" aria-label="Tabs">
						{tabs.map((tab) => (
							<button
								key={tab.name}
								onClick={() => handleChangeTab(tab.value)}
								className={classNames(
									tab.value === activeState
										? "border-secondary text-secondary"
										: "border-none  text-gray-500 hover:text-gray-700 hover:border-gray-300",
									"group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm"
								)}
								aria-current={
									tab.value === activeState
										? "page"
										: undefined
								}
							>
								<tab.icon
									className={classNames(
										tab.value === activeState
											? "text-secondary"
											: "text-gray-500 group-hover:text-gray-600",
										"-ml-0.5 mr-2 h-5 w-5"
									)}
									aria-hidden="true"
								/>
								<span>{tab.name}</span>
							</button>
						))}
					</nav>
				</div>
			</div>
		</div>
	);
}
