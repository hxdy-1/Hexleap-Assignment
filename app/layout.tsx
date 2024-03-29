import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeSwitch from "@/components/ThemeSwitch";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Hexleap Assignment",
	description: "An assignment by Abdul Haadi Momin",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<script
					dangerouslySetInnerHTML={{
						__html: `
              if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark')
              } else {
                document.documentElement.classList.remove('dark')
              }
        `,
					}}
				/>
			</head>
			<body
				className={`${inter.className} flex flex-col gap-8 md:gap-12 py-6 justify-between items-center text-black bg-white dark:text-white dark:bg-dark-primary`}
			>
				{children}
			</body>
		</html>
	);
}
