import React from "react";
import Image from "next/image";
import AdImage from "../public/ad.png";

const Ad = () => {
	return (
		<div className="w-[230px] flex flex-col gap-2 bg-white text-black dark:bg-dark-secondary dark:text-white p-2 shadow-lg transition-all duration-200 hover:scale-[1.01] cursor-pointer">
			<div className="relative">
				<Image src={AdImage} alt="Ad"></Image>
				<span className="bg-black absolute right-0 top-0 px-4 py-0.5 font-semibold text-white">
					Ad
				</span>
			</div>
			<div className="p-4 flex flex-col justify-between gap-2">
				<h4 className="font-semibold text-[#222D3A] text-lg dark:text-white">
					Advertisement title
				</h4>
				<p className="text-xs font-light text-stone-700 tracking-wider dark:text-stone-300">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
					elit, sed do eiusmod tempor incididunt ut labore et dolore
					magna aliqua.
				</p>
			</div>
		</div>
	);
};

export default Ad;
