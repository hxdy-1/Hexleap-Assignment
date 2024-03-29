import React from "react";
import { Poppins } from "next/font/google";
import Baseball1 from "../public/baseball-1.png";
import Baseball2 from "../public/baseball-2.png";
import IceHockey from "../public/ice-hockey.png";
import SportsCard from "./SportsCard";
import Ad from "./Ad";
import SeeMoreBtn from "./SeeMoreBtn";
import ThemeSwitch from "./ThemeSwitch";

const poppins = Poppins({ subsets: ["latin"], weight: ["700"] });

const SPORTS_ARRAY = [
	{
		image: Baseball1,
		title: "Sacramento River Cats",
		totalEvents: 48,
		sportType: "Baseball",
	},
	{
		image: Baseball2,
		title: "Las Vegas Aviators",
		totalEvents: 28,
		sportType: "Baseball",
	},
	{
		image: IceHockey,
		title: "New Jersey Devils",
		totalEvents: 15,
		sportType: "Ice Hockey",
	},
	{
		image: Baseball2,
		title: "Las Vegas Aviators",
		totalEvents: 28,
		sportType: "Baseball",
	},
];

const Sports = () => {
	return (
		<section className="max-w-7xl flex flex-col gap-10">
			<div className="flex justify-between">
				<h2
					className={`${poppins.className} font-bold text-lg capitalize decoration-[#738FFF] decoration-2 underline underline-offset-8`}
				>
					sports
				</h2>
				<ThemeSwitch />
			</div>
			<div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8">
				{SPORTS_ARRAY.map((sport, index) => (
					<SportsCard
						key={index}
						image={sport.image}
						title={sport.title}
						totalEvents={sport.totalEvents}
						sportsType={sport.sportType}
					/>
				))}
				<Ad />
			</div>
			<SeeMoreBtn />
		</section>
	);
};

export default Sports;
