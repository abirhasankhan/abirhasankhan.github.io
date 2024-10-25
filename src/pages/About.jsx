// src/pages/About.jsx
import { motion } from "framer-motion";

const About = () => (
	<div className="container mx-auto py-20 px-6 text-center">
		<motion.h1
			className="text-4xl font-bold text-gray-900 dark:text-white mb-8"
			initial={{ opacity: 0, x: -50 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.6 }}
		>
			About Me 👋
		</motion.h1>
		<motion.p
			className="text-lg text-gray-600 dark:text-gray-300 mb-4 leading-relaxed"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 0.3, duration: 0.6 }}
		>
			<p className="text-lg">
				Hi, I’m Md. Abir Hasan Khan, a dedicated{" "}
				<strong>Web and Mobile App Developer</strong> with a passion for
				pushing the boundaries of digital experiences. Currently, I'm
				diving deep into <strong>game development with Unity</strong> as
				I transition toward a career in the gaming industry.
			</p>
			<p className="text-lg mt-4">
				With a versatile background in{" "}
				<strong>web and mobile applications</strong>, I've honed my
				skills across a broad range of technologies. From{" "}
				<strong>C, C++, C#</strong> to{" "}
				<strong>Java, JavaScript, Python</strong>, and{" "}
				<strong>SQL</strong>, I love to leverage my expertise to build
				engaging and functional applications. I’m also adept in
				frameworks and libraries like
				<strong> ReactJS, NodeJS, Laravel, and Express.js</strong>,
				creating everything from responsive web apps to efficient
				server-side solutions.
			</p>
			<p className="text-lg mt-4">
				<strong>Fun Fact:</strong> I'm a serious anime enthusiast – I
				can binge-watch an entire series in one sitting and still have
				energy to code for 12 hours straight! :3
			</p>
		</motion.p>
	</div>
);

export default About;
