// src/pages/Contact.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission logic, e.g., send email
		console.log("Submitted:", { name, email, message });
		// Reset form fields
		setName("");
		setEmail("");
		setMessage("");
	};

	return (
		<div className="container mx-auto py-20 px-6">
			<motion.h1
				className="text-4xl font-bold text-gray-900 dark:text-white mb-8"
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
			>
				Contact Me
			</motion.h1>
			<motion.form
				onSubmit={handleSubmit}
				className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.6 }}
			>
				<div className="mb-4">
					<label
						className="block text-gray-700 dark:text-gray-300 mb-2"
						htmlFor="name"
					>
						Name
					</label>
					<input
						type="text"
						id="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
						className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400"
					/>
				</div>
				<div className="mb-4">
					<label
						className="block text-gray-700 dark:text-gray-300 mb-2"
						htmlFor="email"
					>
						Email
					</label>
					<input
						type="email"
						id="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
						className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400"
					/>
				</div>
				<div className="mb-4">
					<label
						className="block text-gray-700 dark:text-gray-300 mb-2"
						htmlFor="message"
					>
						Message
					</label>
					<textarea
						id="message"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						required
						className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400"
						rows="5"
					/>
				</div>
				<button
					type="submit"
					className="mt-4 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
				>
					Send Message
				</button>
			</motion.form>
		</div>
	);
};

export default Contact;
