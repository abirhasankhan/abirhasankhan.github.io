import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaDiscord, FaGithub } from "react-icons/fa";

const Contact = () => {
	return (
		<div className="container mx-auto py-20 px-6 text-center">
			<motion.h1
				className="text-4xl font-bold text-gray-900 dark:text-white mb-8"
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
			>
				Get in Touch
			</motion.h1>
			<motion.p
				className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.3, duration: 0.6 }}
			>
				Whether you have a question, want to collaborate, or just want
				to say hi, feel free to reach out. Connect with me on my social
				channels!
			</motion.p>
			<div className="flex justify-center gap-6 mb-10">
				<motion.a
					href="mailto:ak99.abirkhan@gmail.com"
					target="_blank"
					rel="noopener noreferrer"
					whileHover={{ scale: 1.2 }}
					whileTap={{ scale: 0.9 }}
					className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-all duration-300"
				>
					<FaEnvelope className="text-3xl" />
				</motion.a>
				<motion.a
					href="https://linkedin.com/in/mdabirhasankhan"
					target="_blank"
					rel="noopener noreferrer"
					whileHover={{ scale: 1.2 }}
					whileTap={{ scale: 0.9 }}
					className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-all duration-300"
				>
					<FaLinkedin className="text-3xl" />
				</motion.a>
				<motion.a
					href="https://discord.com/users/your-discord-id"
					target="_blank"
					rel="noopener noreferrer"
					whileHover={{ scale: 1.2 }}
					whileTap={{ scale: 0.9 }}
					className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-all duration-300"
				>
					<FaDiscord className="text-3xl" />
				</motion.a>
				<motion.a
					href="https://github.com/abirhasankhan"
					target="_blank"
					rel="noopener noreferrer"
					whileHover={{ scale: 1.2 }}
					whileTap={{ scale: 0.9 }}
					className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-all duration-300"
				>
					<FaGithub className="text-3xl" />
				</motion.a>
			</div>
			<motion.p
				className="text-sm text-gray-500 dark:text-gray-400"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.6, duration: 0.6 }}
			>
				Looking forward to connecting and building something amazing
				together!
			</motion.p>
		</div>
	);
};

export default Contact;
