import Image, { StaticImageData } from "next/image";
import React from "react";

interface SportsProp {
	image: StaticImageData;
	title: string;
	totalEvents: number;
	sportsType: string;
}

const SportsCard = (props: SportsProp) => {
	return (
		<div className="flex flex-col gap-2 bg-white text-black dark:bg-dark-secondary dark:text-white p-2 shadow-lg transition-all duration-200 hover:scale-[1.01] cursor-pointer">
			<Image src={props.image} alt={props.title} />
			<h4 className="tracking-wider">{props.title}</h4>
			<div className="flex w-full rounded-sm p-2 bg-[#F7F7F8] text-black dark:bg-dark-tertiary dark:text-white">
				<div className="text-left w-1/2">
					<h6 className="text-xs text-stone-600 dark:text-stone-300">
						Total Events
					</h6>
					<p className="font-[500] text-sm">
						{props.totalEvents} Events
					</p>
				</div>
				<div className="text-left  w-1/2">
					<h6 className="text-xs text-stone-600 dark:text-stone-300">
						Sport
					</h6>
					<p className="font-[500] text-sm">{props.sportsType}</p>
				</div>
			</div>
		</div>
	);
};

export default SportsCard;
