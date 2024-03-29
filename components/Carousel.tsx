"use client";
import { useEffect, useState } from "react";
import LeftAngle from "../public/left-angle.svg";
import RightAngle from "../public/right-angle.svg";
import Image from "next/image";

interface CarouselProps {
	slides: React.ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
	const [currentIndex, setCurrentIndex] = useState<number>(0);
	const [visibleSlides, setVisibleSlides] = useState<number>(3);

	const nextSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === slides.length - 3 ? 0 : prevIndex + 1
		);
	};

	const prevSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? slides.length - 3 : prevIndex - 1
		);
	};

	const handleResize = () => {
		if (window.innerWidth >= 1024) {
			setVisibleSlides(3);
		} else if (window.innerWidth > 640) {
			setVisibleSlides(2);
		} else {
			setVisibleSlides(1);
		}
	};

	useEffect(() => {
		handleResize();

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div className="relative w-10/12">
			<div className="flex overflow-hidden pb-8">
				{slides.map((slide, index) => (
					<div
						key={index}
						className={`flex-shrink-0 mr-12 w-[100%] md:w-[50%] lg:w-[30%] ${
							index >= currentIndex &&
							index < currentIndex + visibleSlides
								? "block"
								: "hidden"
						}`}
					>
						{slides[(index + slides.length) % slides.length]}
					</div>
				))}
			</div>
			<button
				onClick={prevSlide}
				className="absolute z-[5] top-1/2 -left-[23%] md:-left-[10%] transform flex items-center justify-center -translate-y-1/2 bg-transparent border-blue-500 border text-white px-3 py-4 transition-all duration-200 hover:border-blue-600 hover:rounded hover:scale-[1.03]"
			>
				<Image src={LeftAngle} alt="slide left" />
			</button>
			<button
				onClick={nextSlide}
				className="absolute z-[5] top-1/2 -right-[23%] md:-right-[10%] transform flex items-center justify-center -translate-y-1/2 bg-transparent border-blue-500 border text-white px-3 py-4 transition-all duration-200 hover:border-blue-600 hover:rounded hover:scale-[1.03]"
			>
				<Image src={RightAngle} alt="slide right" />
			</button>
		</div>
	);
};

export default Carousel;
