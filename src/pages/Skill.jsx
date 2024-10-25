import { motion } from "framer-motion";

const Skills = () => (
	<div className="container mx-auto py-20 px-6 text-center">
		<motion.h1
			className="text-4xl font-bold text-gray-900 dark:text-white mb-8"
			initial={{ opacity: 0, x: -50 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.6 }}
		>
			Skills & Expertise 💻
		</motion.h1>
		<motion.ul
			className="text-lg text-gray-600 dark:text-gray-300 mb-4 leading-relaxed space-y-4"
			initial="hidden"
			animate="visible"
			variants={{
				visible: {
					opacity: 1,
					transition: { staggerChildren: 0.2 },
				},
				hidden: { opacity: 0 },
			}}
		>
			<motion.li
				variants={{
					visible: { opacity: 1, x: 0 },
					hidden: { opacity: 0, x: -30 },
				}}
			>
				<strong>Languages:</strong> C, C++, C#, Java, SQL, PL/SQL,
				JavaScript, Python, PHP
			</motion.li>
			<motion.li
				variants={{
					visible: { opacity: 1, x: 0 },
					hidden: { opacity: 0, x: -30 },
				}}
			>
				<strong>Frontend Development:</strong> HTML, CSS, Bootstrap,
				React
			</motion.li>
			<motion.li
				variants={{
					visible: { opacity: 1, x: 0 },
					hidden: { opacity: 0, x: -30 },
				}}
			>
				<strong>Backend Development:</strong> Node.js, Express.js, PHP,
				Laravel
			</motion.li>
			<motion.li
				variants={{
					visible: { opacity: 1, x: 0 },
					hidden: { opacity: 0, x: -30 },
				}}
			>
				<strong>Databases:</strong> SQL, MongoDB, Firebase
			</motion.li>
			<motion.li
				variants={{
					visible: { opacity: 1, x: 0 },
					hidden: { opacity: 0, x: -30 },
				}}
			>
				<strong>Mobile Development:</strong> Android Studio
			</motion.li>
			<motion.li
				variants={{
					visible: { opacity: 1, x: 0 },
					hidden: { opacity: 0, x: -30 },
				}}
			>
				<strong>Game Development:</strong> Unity
			</motion.li>
		</motion.ul>
	</div>
);

export default Skills;
