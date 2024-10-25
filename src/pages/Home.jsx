// src/pages/Home.jsx
import React from "react";
import { motion } from "framer-motion";

const Home = () => (
	<div className="container mx-auto py-20 px-6 text-center">
		<motion.h1
			className="text-5xl font-bold text-gray-900 dark:text-white mb-6"
			initial={{ opacity: 0, y: -50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
		>
			Welcome to My Portfolio
		</motion.h1>
		<motion.p
			className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 0.3, duration: 0.6 }}
		>
			<h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
				Hi, I'm Abir Khan.
			</h2>
			I am a Software Engineer and Game Programmer I am passionate about
			software engineering and game programming. I love learning new
			technologies and creating games and solving problems. I currently
			live in Dhaka, Bangladesh.
		</motion.p>
		<a
			href="https://github.com/abirhasankhan" // Replace with your GitHub link
			target="_blank"
			rel="noopener noreferrer"
			className="inline-flex items-center mt-10"
		>
			<motion.button
				className="flex items-center px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.5, duration: 0.6 }}
			>
				{/* GitHub Logo */}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					viewBox="0 0 20 20"
					fill="currentColor"
					className="mr-2" // Space between logo and text
				>
					<path d="M10 0C4.48 0 0 4.48 0 10c0 4.41 2.86 8.16 6.84 9.49.5.09.68-.22.68-.49 0-.24-.01-.93-.01-1.68-2.79.61-3.38-1.34-3.38-1.34-.45-1.14-1.1-1.44-1.1-1.44-.9-.61.07-.6.07-.6 1 .07 1.54 1.02 1.54 1.02.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.64-1.33-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.99 1.03-2.7-.1-.25-.44-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0110 3.5c.85.004 1.71.115 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.54 1.37.2 2.39.1 2.64.64.71 1.03 1.61 1.03 2.7 0 3.83-2.34 4.68-4.56 4.93.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.68.48A10 10 0 0020 10c0-5.52-4.48-10-10-10z" />
				</svg>
				GitHub
			</motion.button>
		</a>
	</div>
);

export default Home;