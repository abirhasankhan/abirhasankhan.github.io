// src/pages/About.jsx
import React from "react";
import { motion } from "framer-motion";

const About = () => (
	<div className="container mx-auto py-20 px-6 text-center">
		<motion.h1
			className="text-4xl font-bold text-gray-900 dark:text-white mb-8"
			initial={{ opacity: 0, x: -50 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.6 }}
		>
			About Me
		</motion.h1>
		<motion.p
			className="text-lg text-gray-600 dark:text-gray-300 mb-4 leading-relaxed"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 0.3, duration: 0.6 }}
		>
			I am a dedicated developer with expertise in building engaging and
			efficient web applications. My skills include a strong grasp of
			modern front-end and back-end technologies, such as React, Node.js,
			and more.
		</motion.p>
	</div>
);

export default About;
