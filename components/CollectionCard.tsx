import Image, { StaticImageData } from "next/image";
import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500"] });

interface CollectionCardProps {
	image: StaticImageData;
	name: string;
	date: string;
	day: string;
	time: string;
	address: string;
	btnTxt: string;
}

const beforeStyles: string =
	"before:content-[''] before:-top-[10%] before:-left-[5%] before:absolute before:rounded-full  before:bg-white before:dark:bg-[#1f1d2b] before:p-4";

const afterStyles: string =
	"after:content-[''] after:-top-[10%] after:-right-[5%] after:absolute after:rounded-full after:bg-white after:dark:bg-[#1f1d2b] after:p-4";

const CollectionCard = (props: CollectionCardProps) => {
	return (
		<div className="overflow-hidden flex flex-col justify-center items-center pb-4 gap-4 shadow-xl bg-white dark:bg-dark-secondary">
			<Image src={props.image} alt="collection image" />
			<div
				className={`relative px-6 pt-4 border-t-2 border-dashed border-[#818A97] flex flex-col gap-4 items-center
            ${beforeStyles}
            ${afterStyles}
            `}
			>
				<h4
					className={`${poppins.className} capitalize text-center font-[500] text-xl`}
				>
					{props.name}
				</h4>
				<span className={`${poppins.className} uppercase`}>
					{props.date} | {props.day} | <time>{props.time}</time>
				</span>
				<address className="not-italic text-[#525965] dark:text-[#DFDFDF] text-sm leading-5 tracking-wider text-center">
					{props.address}
				</address>
				<button className="bg-black text-white capitalize w-full text-center px-2 py-2 font-[500] tracking-wide transition-all duration-200 hover:scale-[1.01] hover:rounded">
					{props.btnTxt}
				</button>
			</div>
		</div>
	);
};

export default CollectionCard;
