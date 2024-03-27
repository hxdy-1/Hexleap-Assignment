"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light" | null;

export default function ThemeSwitch() {
	const [theme, setTheme] = useState<Theme>("dark");

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme");
		if (savedTheme) {
			setTheme(savedTheme as Theme);
		}
	}, []);

	function toggleDarkMode() {
		const newTheme = theme === "dark" ? "light" : "dark";
		setTheme(newTheme);
		localStorage.setItem("theme", newTheme);

		if (newTheme === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}

	return (
		<div>
			<button className="mr-1" onClick={toggleDarkMode}>
				{theme === "dark" ? "🌙" : "☀️"}
			</button>
		</div>
	);
}
