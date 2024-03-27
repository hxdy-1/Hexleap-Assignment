import React from "react";
import Carousel from "./CarouselBeta";
import { Poppins } from "next/font/google";
import CollectionCard from "./CollectionCard";
import LasVegas from "../public/las-vagas-aviators.png";
import RiverCats from "../public/river-cats.png";

// const slides = [
// 	<div className="bg-red-500 h-64">Slide 1</div>,
// 	<div className="bg-blue-500 h-64">Slide 2</div>,
// 	<div className="bg-green-500 h-64">Slide 3</div>,
// 	<div className="bg-orange-500 h-64">Slide 4</div>,
// 	<div className="bg-pink-500 h-64">Slide 5</div>,
// 	<div className="bg-violet-500 h-64">Slide 6</div>,
// 	// Add more slides as needed
// ];

const slides = [
	<CollectionCard
		image={LasVegas}
		name="Las Vegas Aviators"
		date="oct 15"
		day="sun"
		time="4:30 PM"
		address="Las Vegas Ballpark, Las Vegas, Nevada"
		btnTxt="Take Flight Collection"
	/>,
	<CollectionCard
		image={RiverCats}
		name="Sacramento River Cats"
		date="oct 15"
		day="sun"
		time="4:30 PM"
		address="Sutter Health Park, Sacramento, California"
		btnTxt="Orange Collection"
	/>,
	<CollectionCard
		image={LasVegas}
		name="Las Vegas Aviators"
		date="oct 15"
		day="sun"
		time="4:30 PM"
		address="Las Vegas Ballpark, Las Vegas, Nevada"
		btnTxt="Take Flight Collection"
	/>,
	<CollectionCard
		image={RiverCats}
		name="Sacramento River Cats"
		date="oct 15"
		day="sun"
		time="4:30 PM"
		address="Sutter Health Park, Sacramento, California"
		btnTxt="Orange Collection"
	/>,
];

const poppins = Poppins({ subsets: ["latin"], weight: ["700"] });

const CollectionSpotlight = () => {
	return (
		<section className="max-w-7xl bg-white dark:bg-gradient-to-b from-[#18282A] to-[#221A2C] flex flex-col justify-center items-center gap-8 px-12 pt-16 pb-12">
			<h1
				className={`${poppins.className} text-2xl md:text-4xl lg:text-5xl  font-bold`}
			>
				Collection Spotlight
			</h1>
			<p className="text-center text-sm lg:px-28 leading-6">
				Discover extraordinary moments with our Spotlight Collection
				metatickets—exclusive access to premium events for an
				unforgettable experience. Grab yours today!
			</p>
			<Carousel slides={slides} />
		</section>
	);
};

export default CollectionSpotlight;
